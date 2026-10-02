"""Exercise deployment identity and failure gates without contacting Coolify."""
import json
import os
from pathlib import Path
import shutil
import subprocess
import tempfile
import unittest

MOCK_CURL = r'''#!/usr/bin/env python3
import json, os, sys
args = sys.argv[1:]
url = next(x for x in args if x.startswith('https://'))
method = args[args.index('--request') + 1] if '--request' in args else 'GET'
record = {'url': url, 'method': method}
if '--data-binary' in args:
    record['body'] = json.loads(open(args[args.index('--data-binary') + 1][1:]).read())
with open(os.environ['REQUEST_LOG'], 'a') as output:
    output.write(json.dumps(record) + '\n')
tag = 'sha-' + os.environ['RELEASE_SHA']
scenario = os.environ['SCENARIO']
content_type = 'application/json'
http_code = '200'
if method == 'PATCH' and scenario in ('forbidden', 'method-not-allowed'):
    if '--dump-header' in args:
        with open(args[args.index('--dump-header') + 1], 'w') as output:
            output.write('Allow: GET, HEAD\nContent-Type: text/html\nSet-Cookie: private-value\n')
    print('403' if scenario == 'forbidden' else '405', end='')
    sys.exit(22)
if '/applications/' in url:
    domains = {'no-domain': None, 'http-domain': 'http://preview.example',
               'port-domain': 'https://preview.example:3000',
               'multiple-domains': 'http://ignored.example,https://preview.example/'}
    value = {'uuid': 'site-app', 'docker_registry_image_name': os.environ['COOLIFY_IMAGE'], 'docker_registry_image_tag': tag, 'status': 'running:healthy', 'fqdn': domains.get(scenario, 'https://preview.example')}
elif '/api/v1/deploy?' in url:
    value = {'deployments': [{'resource_uuid': 'site-app', 'deployment_uuid': 'deploy-1'}]}
elif '/deployments/' in url:
    value = {'status': 'failed' if os.environ['SCENARIO'] == 'failed' else 'finished', 'docker_registry_image_tag': 'sha-wrong' if os.environ['SCENARIO'] == 'wrong-tag' else tag}
elif url.endswith('/api/health'):
    requests = [json.loads(line) for line in open(os.environ['REQUEST_LOG'])]
    health_calls = sum(r['url'].endswith('/api/health') for r in requests)
    if scenario == 'transient-http' and health_calls == 1:
        sys.exit(22)
    value = {'status': 'ok', 'commit': 'old-commit' if scenario == 'old-site' or (scenario == 'transient-old' and health_calls == 1) else os.environ['RELEASE_SHA']}
elif url.endswith('/api/resume/download'):
    content_type = 'text/html' if scenario == 'pdf-mime' else 'application/pdf'
    value = '{}' if scenario == 'pdf-body' else '%PDF-1.7\nfixture\n%%EOF\n'
    if scenario == 'pdf-truncated':
        value = '%PDF-1.7\ntruncated'
elif url.endswith('/api/og'):
    content_type = 'text/html' if scenario == 'og-mime' else 'image/svg+xml; charset=utf-8'
    value = '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"></svg>'
    if scenario == 'og-body':
        value = '<html>Fallback page</html>'
    elif scenario == 'og-malformed':
        value = '<svg'
elif url.endswith('/Blog'):
    value = '<a href="/Blog/engineering/example">Post</a>'
else:
    value = {}
body = value if isinstance(value, str) else json.dumps(value)
if '--output' in args:
    with open(args[args.index('--output') + 1], 'w') as output:
        output.write(body)
else:
    print(body)
if '--write-out' in args:
    print(http_code if args[args.index('--write-out') + 1] == '%{http_code}' else content_type, end='')
'''


class DeploymentGates(unittest.TestCase):
    def run_deploy(self, scenario, webhook=None):
        with tempfile.TemporaryDirectory() as directory:
            mock = Path(directory) / 'curl'
            mock.write_text(MOCK_CURL)
            mock.chmod(0o755)
            # Avoid real delays; the production script still performs every bounded attempt.
            sleep = Path(directory) / 'sleep'
            sleep.write_text('#!/bin/sh\nexit 0\n')
            sleep.chmod(0o755)
            log = Path(directory) / 'requests.jsonl'
            environment = dict(os.environ, PATH=directory + os.pathsep + os.environ['PATH'],
                               COOLIFY_API_TOKEN='test-token',
                               COOLIFY_DEPLOY_WEBHOOK=webhook if webhook is not None else 'https://coolify.example/api/v1/deploy?uuid=site-app&force=false',
                               COOLIFY_IMAGE='ghcr.io/owner/site', RELEASE_SHA='a' * 40,
                               REQUEST_LOG=str(log), SCENARIO=scenario)
            for derived in ['COOLIFY_URL', 'COOLIFY_APP_UUID', 'COOLIFY_CHECK_URL']:
                environment.pop(derived, None)
            result = subprocess.run(['bash', str(Path(__file__).with_name('deploy-coolify.sh'))],
                                    env=environment, capture_output=True, text=True, timeout=10)
            requests = [json.loads(line) for line in log.read_text().splitlines()] if log.exists() else []
            self.assertNotIn('test-token', result.stdout + result.stderr)
            return result, requests

    @unittest.skipUnless(shutil.which('jq'), 'jq is required by the deployment script')
    def test_success_binds_update_deployment_and_served_commit(self):
        result, requests = self.run_deploy('success')
        self.assertEqual(result.returncode, 0, result.stderr)
        mutations = [r for r in requests if r['method'] != 'GET']
        self.assertEqual([r['method'] for r in mutations], ['PATCH'])
        self.assertEqual(mutations[0]['body']['docker_registry_image_tag'], 'sha-' + 'a' * 40)
        webhook_calls = [r for r in requests if '/api/v1/deploy?' in r['url']]
        self.assertEqual(webhook_calls, [{'method': 'GET', 'url': 'https://coolify.example/api/v1/deploy?uuid=site-app&force=false'}])
        self.assertTrue(any(r['url'].endswith('/api/resume/download') for r in requests))
        self.assertTrue(any(r['url'].endswith('/Blog/engineering/example') for r in requests))

    @unittest.skipUnless(shutil.which('jq'), 'jq is required by the deployment script')
    def test_failed_deployment_wrong_tag_and_old_site_block_success(self):
        for scenario in ['failed', 'wrong-tag', 'old-site']:
            with self.subTest(scenario=scenario):
                result, requests = self.run_deploy(scenario)
                self.assertNotEqual(result.returncode, 0)
                self.assertFalse(any(r['url'].endswith('/api/resume/download') for r in requests))
                if scenario == 'old-site':
                    self.assertEqual(sum(r['url'].endswith('/api/health') for r in requests), 12)

    @unittest.skipUnless(shutil.which('jq'), 'jq is required by the deployment script')
    def test_public_readiness_recovers_without_repeating_mutations(self):
        for scenario in ['transient-old', 'transient-http']:
            with self.subTest(scenario=scenario):
                result, requests = self.run_deploy(scenario)
                self.assertEqual(result.returncode, 0, result.stderr)
                self.assertEqual(sum(r['url'].endswith('/api/health') for r in requests), 2)
                self.assertEqual([r['method'] for r in requests if r['method'] != 'GET'], ['PATCH'])
                self.assertEqual(sum('/api/v1/deploy?' in r['url'] for r in requests), 1)

    def test_invalid_webhook_never_receives_credentials(self):
        for webhook in [
            'https://coolify.example/wrong-path?uuid=site-app',
            'http://coolify.example/api/v1/deploy?uuid=site-app',
            'https://coolify.example/api/v1/deploy?uuid=',
            'https://coolify.example/api/v1/deploy?uuid=site-app,another-app',
            'https://coolify.example/api/v1/deploy?uuid=site-app&tag=production',
            'https://coolify.example/api/v1/deploy?uuid=site-app&uuid=another-app',
            'https://coolify.example/api/v1/deploy?uuid=site-app&force=true',
            'https://coolify.example/api/v1/deploy?uuid=site-app#fragment',
            '',
        ]:
            with self.subTest(webhook=webhook):
                result, requests = self.run_deploy('success', webhook)
                self.assertNotEqual(result.returncode, 0)
                self.assertEqual(requests, [])

    def test_forbidden_update_explains_permissions_without_deploying(self):
        result, requests = self.run_deploy('forbidden')
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('image-tag update failed (HTTP 403)', result.stderr)
        self.assertIn('deploy-only token cannot update', result.stderr)
        self.assertFalse(any('/api/v1/deploy?' in r['url'] for r in requests))

    def test_rejected_patch_reports_operation_and_safe_protocol_metadata(self):
        result, requests = self.run_deploy('method-not-allowed')
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('image-tag update failed (HTTP 405)', result.stderr)
        self.assertIn('Allow: GET, HEAD', result.stderr)
        self.assertNotIn('private-value', result.stderr + result.stdout)
        self.assertFalse(any('/api/v1/deploy?' in r['url'] for r in requests))

    def test_public_domain_is_read_from_application(self):
        for scenario in ['port-domain', 'multiple-domains']:
            with self.subTest(scenario=scenario):
                result, requests = self.run_deploy(scenario)
                self.assertEqual(result.returncode, 0, result.stderr)
                self.assertTrue(any(r['url'] == 'https://preview.example/api/health' for r in requests))
                self.assertFalse(any(':3000' in r['url'] for r in requests))
        for scenario in ['no-domain', 'http-domain']:
            with self.subTest(scenario=scenario):
                result, requests = self.run_deploy(scenario)
                self.assertNotEqual(result.returncode, 0)
                self.assertFalse(any('/api/v1/deploy?' in r['url'] for r in requests))

    @unittest.skipUnless(shutil.which('jq'), 'jq is required by the deployment script')
    def test_invalid_assets_block_success(self):
        for scenario in ['pdf-mime', 'pdf-body', 'pdf-truncated', 'og-mime', 'og-body', 'og-malformed']:
            with self.subTest(scenario=scenario):
                result, _ = self.run_deploy(scenario)
                self.assertNotEqual(result.returncode, 0)
                self.assertNotIn('Blog category and post smoke checks passed', result.stdout)


if __name__ == '__main__':
    unittest.main()
