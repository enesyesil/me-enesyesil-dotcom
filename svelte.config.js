import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess({})],
	kit: {
		csp: {
			mode: 'auto',
			directives: {
				'base-uri': ['self'],
				'connect-src': ['self'],
				'default-src': ['self'],
				'font-src': ['self', 'https://fonts.gstatic.com'],
				'form-action': ['self'],
				'frame-ancestors': ['none'],
				'img-src': ['self', 'data:', 'https:'],
				'object-src': ['none'],
				'script-src': ['self'],
				'style-src': ['self', 'unsafe-inline', 'https://fonts.googleapis.com']
			}
		},
		adapter: adapter({
			// Listen on all network interfaces
			out: 'build',
			precompress: false,
			envPrefix: ''
		})
	}
};

export default config;
