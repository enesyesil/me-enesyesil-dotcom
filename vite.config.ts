import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';


export default defineConfig({
	assetsInclude: ['**/*.md'],
	plugins: [sveltekit()],
	preview: {
		port: 3000,
		host: true,  // Listen on 0.0.0.0
	},
	server: {
		port: 3000,
		host: true,  // Listen on 0.0.0.0
	},
	test: {
		globals: true,
		environment: 'jsdom',
		exclude: [...configDefaults.exclude, 'e2e/*'],
	},
});