const config = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

  plugins: [require('flowbite/plugin')],

  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'beige': '#F5F5DC',
        'darker-beige': '#A9957B',
      },
    }
  }
};

module.exports = config;