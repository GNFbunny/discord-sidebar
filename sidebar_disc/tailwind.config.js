// tailwind.config.js
module.exports = {
  darkMode: 'class', // Ensures we use the class method for dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure this includes your component files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
