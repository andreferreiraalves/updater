/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
  theme: {
    extend: {
      colors: {
        "primary-300": "#FF8732",
        "primary-400": "#FF7819",
        "primary": "#ff6900",
        "primary-600": "#E55E00",
        // "dark-purple-hover": "#203575",
        // "light-purple": "#E3EAFC",
        // "light-white": "rgba(255,255,255,0.17)",
      }
    },
  }
}

