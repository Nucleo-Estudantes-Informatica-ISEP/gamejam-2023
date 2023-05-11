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
      'tv-background': '#101011',
      'background': '#0d1e25'
    },
    animation: {
      'bounce-slow': 'bounce 1.5s ease-in-out infinite',
      'bounce-delayed-1': 'bounce 1.5s ease-in-out infinite 25ms',
      'bounce-delayed-2': 'bounce 1.5s ease-in-out infinite 50ms'
  },
  },
  plugins: []
};
