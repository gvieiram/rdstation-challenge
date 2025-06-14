/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-sky': '#06d9df',
        'blue-sky-light': '#6ef7fb',
        'blue-dark-900': '#00121a',
        'blue-dark-200': '#0a626b',
        'blue-light': '#cafafc',
        'blue-extra-light': '#d5fefe',
        'blue-dark-100': '#19c1ce',
      },
    },
  },
  plugins: [],
};
