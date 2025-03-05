/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}', // Adjust this path based on your project structure
    ],
    theme: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'tablet': '1024px', // Custom tablet breakpoint
        'lg': '1280px',
        'xl': '1536px',
      },
      extend: {},
    },
    plugins: [],
  };