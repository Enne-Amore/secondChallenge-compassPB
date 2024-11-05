/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-55': 'rgba(0, 0, 0, 0.55)',
        'blue-55' : '#92BBFF',
        "bronw-70" : 'rgba(35, 8, 28, 0.7)' ,
        'blue-750' : '#1E293B',
        'yellow-150' : '#FCF4B6',
        'blue-850' : '#160A60'
      },
      width: {
        '342': '342px',
        '392' : '392px'
      },
      height: {
        '285': '285px',
        '794' : '794px'
    },
      fontSize: {
        '24px': '24px',
  },
    fontFamily: {
    roboto: ['Roboto', 'sans-serif'],
  },
    margin: {
    'margin-b': '39px', 
    },
    padding: {
      'person1' : '60px'
    },
  plugins: [],
  }
  }
}

