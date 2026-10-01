import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';

export default defineConfig({
	assetsInclude: ['**/*.md'],
	plugins: [sveltekit()],
	preview: {
		port: 3000,
		host: '127.0.0.1',
		strictPort: true
	},
	server: {
		port: 3000,
		host: '127.0.0.1',
		strictPort: true
	},
	test: {
		globals: true,
		environment: 'jsdom',
		exclude: [...configDefaults.exclude, 'e2e/*']
	}
});
