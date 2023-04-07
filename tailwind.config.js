/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
        fontFamily:{
            melodrama:"Melodrama",
            stardom:"Stardom"
        },
        blur:{
            xs:'0.5px'

        }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

