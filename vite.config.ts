import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';


export default defineConfig({
	assetsInclude: ['**/*.md'],
	plugins: [sveltekit()],
	test: {
	  globals: true,
	  environment: 'jsdom',
	  exclude: [...configDefaults.exclude, 'e2e/*'],
	},
  });