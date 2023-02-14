/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-light': "url('/src/assets/bg-desktop-light.jpg')",
        'desktop-dark': "url('/src/assets/bg-desktop-dark.jpg')",
        'mobile-light': "url('/src/assets/bg-mobile-light.jpg')",
        'mobile-light': "url('/src/assets/bg-mobile-light.jpg')",
      }
    },
  },
  plugins: [],
}
