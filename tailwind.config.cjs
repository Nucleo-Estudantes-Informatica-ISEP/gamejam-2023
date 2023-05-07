/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        good__times: ['Good Times', 'Arial', 'sans-serif']
      }
    },
    colors: {
      'tv-background': '#101011'
    }
  },
  plugins: []
};
