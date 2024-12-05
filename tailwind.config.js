/** @type {import('tailwindcss').Config} */
export default{
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        primary: ['Nunito Sans', 'sans-serif'],
        secondary: ['Abel', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
      },
      colors: {
        primary: '#96e0ff',
        secondary: '#676e6d',
      },
      boxShadow: {
        custom: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};
