/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        retro: ['Autom', 'sans-serif'],
        'retro-numbers': ['Eight Bit Dragon', 'sans-serif'],
        good__times: ['Good Times', 'Arial', 'sans-serif']
      },
      colors: {
        'background-light': '#132C36',
        background: '#0d1e25',
        primary: '#7c3aed',
        secondary: '#3b82f6'
      },
      animation: {
        'bounce-slow': 'bounce 1.5s ease-in-out infinite',
        'bounce-delayed-1': 'bounce 1.5s ease-in-out infinite 50ms',
        'bounce-delayed-2': 'bounce 1.5s ease-in-out infinite 100ms'
      },
      boxShadow: {
        'intense-white': '0px 0px 15px #7c3aed'
      }
    }
  },
  plugins: []
};
