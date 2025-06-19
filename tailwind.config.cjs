const typography = require('@tailwindcss/typography');
const flowbite = require('flowbite/plugin');

module.exports = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./src/routes/**/*.{html,js,svelte,ts}",
    "./src/lib/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [typography, flowbite],
};
