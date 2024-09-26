/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    extend: {
      fontFamily: {
        'dmsans-regular': ['DMSans-Regular', 'sans-serif'],
        'dmsans-medium': ['DMSans-Medium', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

