import { describe, expect, it } from 'vitest';
import {
	escapeHtml,
	normalizeOgCategory,
	normalizeOgTitle,
	resolveStaticImageHref,
	sanitizeBlogHtml
} from './security';

describe('server-side output security', () => {
	it('escapes XML/HTML metacharacters', () => {
		expect(escapeHtml(`<script data-x="'">&`)).toBe('&lt;script data-x=&quot;&#39;&quot;&gt;&amp;');
	});

	it('bounds and normalizes Open Graph text', () => {
		expect(normalizeOgTitle('  hello\n\tworld  ')).toBe('hello world');
		expect(normalizeOgTitle('x'.repeat(500))).toHaveLength(120);
		expect(normalizeOgCategory('\u0000')).toBe('Post');
	});

	it('removes executable markup and unsafe URLs from blog HTML', () => {
		const result = sanitizeBlogHtml(`
			<script>alert(1)</script>
			<img src="x" onerror="alert(1)">
			<a href="javascript:alert(1)" onclick="alert(1)">bad link</a>
			<div class="mermaid other">graph TD; A-->B</div>
		`);

		expect(result).not.toContain('<script');
		expect(result).not.toContain('onerror');
		expect(result).not.toContain('onclick');
		expect(result).not.toContain('javascript:');
		expect(result).toContain('class="mermaid"');
	});

	it('allows only existing static image paths inside the static root', () => {
		expect(resolveStaticImageHref('/images/icon.png')).toBe('/images/icon.png');
		expect(resolveStaticImageHref('../../../etc/passwd')).toBeNull();
		expect(resolveStaticImageHref('https://example.com/image.png')).toBeNull();
	});
});
