/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppin : ['Poppins'],
        Poiret : ['Poiret One'],
        Nunito : ['Nunito Sans']
      },
      backgroundImage : {
        origin : ['url("https://www.transparenttextures.com/patterns/little-pluses.png")']
      }
    },
  },
  plugins: [],
}

