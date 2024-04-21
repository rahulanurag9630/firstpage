/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'creem': '#FC9CAA',
        'cblue':'#8FC2FF  ',
        'ccblue':'#9BDCF8',
        'cpink':'#F19AFF',
        'nblue':'#6DBCDB',
        'pblue':'#43A6FF',
        'mcolor':'#1d80aa',
        'ic1':'#301D00',
        'ic2':'#050300'


      },
    },
  },
  plugins: [],
}

