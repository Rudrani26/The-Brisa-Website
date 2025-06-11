/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,jpg,png,svg}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9', // ocean blue
        secondary: '#f5f5dc', // sandy beige
        accent: '#ff7f50', // coral
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif']
      }
    }
  },
  plugins: [],
};
