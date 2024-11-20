/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '0px',
      screens: {
        'lg': '1366px',
      },
    },
    letterSpacing: {
      '1': '8px',
    },
    
    extend: {
      borderRadius:{
        primary:"30px"
      },
      colors: {
        primary: "#4D6BB9",
        secondary:"#9FB1DE",
        gray:"#4F4F4F",
      },
      fontFamily:{
        poppin: ["Poppins", "sans-serif"]
      }
    },
    plugins: [],
  }

}