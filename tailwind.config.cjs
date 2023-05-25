/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        retro: ['Autom', 'sans-serif'],
        'retro-numbers': ['Eight Bit Dragon', 'sans-serif'],
        good__times: ['Good Times', 'Arial', 'sans-serif'],
        misterPixel: ['MisterPixel', 'sans-serif']
      },
      colors: {
        'background-light': '#132C36',
        background: '#0d1e25',
        contrast: '#21EFC2',
        primary: '#B567DC',
        secondary: '#3b82f6',
        bronze: '#cd7f32',
        silver: '#c0c0c0',
        gold: '#ffd700'
      },
      animation: {
        'bounce-slow': 'bounce 1.5s ease-in-out infinite',
        'bounce-delayed-1': 'bounce 1.5s ease-in-out infinite 50ms',
        'bounce-delayed-2': 'bounce 1.5s ease-in-out infinite 100ms',
        'pulse-slow': 'pulse 1.5s ease-in-out infinite'
      },
      keyframes: {
        pulse: {
          '0%': { opacity: 0.6 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0.6 }
        }
      },
      boxShadow: {
        'intense-shadow-lg': '0px 0px 35px #B567DC',
        'intense-shadow': '0px 0px 35px #B567DC'
      },
      dropShadow: {
        gold: '1px 1px 4px #ffd700',
        silver: '1px 1px 4px #c0c0c0',
        bronze: '1px 1px 4px #cd7f32',
        whiteStrokeShadow: '2px 2px 0 #fff',
        primaryStrokeShadow: '3px 3px 0 #B567DC',
        buttonShadow: '2px 2px 10px #B567DC',
        buttonShadowHover: '3px 3px 15px #B567DC'
      }
    }
  },
  plugins: []
};
