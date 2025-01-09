/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "components/**/*.{jsx,js}",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
  ],
}

