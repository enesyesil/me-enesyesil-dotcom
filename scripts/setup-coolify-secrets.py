"""Store Coolify production secrets with gh; never print the API token."""
import getpass
import subprocess
import sys
from urllib.parse import parse_qs, urlsplit


def main():
    repository = 'enesyesil/me-enesyesil-dotcom'
    subprocess.run(['gh', 'auth', 'status'], check=True)
    # Require the existing environment; do not change its protection rules.
    subprocess.run(['gh', 'api', f'repos/{repository}/environments/production'],
                   check=True, stdout=subprocess.DEVNULL)
    webhook = input('Coolify Deploy Webhook (auth required): ').strip()
    url = urlsplit(webhook)
    query = parse_qs(url.query, keep_blank_values=True)
    uuid = query.get('uuid', [])
    if (url.scheme != 'https' or not url.hostname or url.username or url.password
            or url.path != '/api/v1/deploy' or url.fragment
            or len(uuid) != 1 or not uuid[0]
            or any(c not in 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-' for c in uuid[0])
            or set(query) - {'uuid', 'force'}
            or query.get('force', ['false']) != ['false']):
        sys.exit('Use this application’s HTTPS resource webhook with force=false, without tags.')
    token = getpass.getpass('Coolify API token (hidden; read/update/deploy permissions): ')
    if not token:
        sys.exit('API token is required.')
    values = {
        'COOLIFY_DEPLOY_WEBHOOK': webhook,
        'COOLIFY_API_TOKEN': token,
    }
    for name, value in values.items():
        # stdin keeps values out of process arguments and shell history.
        subprocess.run(['gh', 'secret', 'set', name, '--repo', repository,
                        '--env', 'production'], input=value, text=True, check=True)
        print(f'Saved {name} in production')
    print('Secrets configured. No deployment was triggered.')


if __name__ == '__main__':
    try:
        main()
    except (subprocess.CalledProcessError, KeyboardInterrupt, EOFError):
        sys.exit('Setup stopped. Rerun to finish any secrets not yet saved.')
