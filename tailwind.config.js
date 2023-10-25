/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/images/hero.png')",
      },
      screens: {
        'xxs': '382px',
        'xs': '495px',
        'sm': '640px',  // Set custom pixel value for sm
        'md': '768px',  // Set custom pixel value for md
        'lg': '1024px', // Set custom pixel value for lg
        'xl': '1280px', // Set custom pixel value for xl
      },
    },
  },
  plugins: [],
}