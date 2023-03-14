/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 200s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    themes: ['light', 'dark'],
  },
  plugins: [
    require('tailwind-typewriter')({
      wordsets: {
        fruit: {
          words: [
            'Hello 👋',
            'Ciao',
            'Bonjour',
            'Willkommen',
            'Hallå',
            'Hola',
            'Здраво',
            'Ahoj',
            'Merhaba',
            `Привіт!`,
            'Cześć',
            '欢迎',
            'नमस्ते',
            'ようこそ',
            'שלום',
            'Sawubona',
          ],
          delay: 2,
        },
      },
    }),
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
};
