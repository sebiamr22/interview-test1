module.exports = {
  important: true,
  theme: {
    extend: {
      colors: {
        primary: '#0F4C81',
        secondary: '#53B0AE',
        accent: '#F74371',
      },
      fontFamily: {
        display: 'Libre Baskerville, Arial, sans-serif',
        body: 'Noto Sans JP, Arial, sans-serif',
      },
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    './components/**/*.jsx', // all components
    "./components/**/*.{js,ts,jsx,tsx}", // all pages as well
  ],
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
  ],
};
