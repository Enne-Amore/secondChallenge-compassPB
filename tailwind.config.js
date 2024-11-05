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
        "bronw-70" : 'rgba(35, 8, 28, 0.7)' 
      },
      width: {
        '342': '342px',
      },
      height: {
        '285': '285px',
    },
      fontSize: {
        '24px': '24px',
  },
  fontFamily: {
    roboto: ['Roboto', 'sans-serif'],
  },
  plugins: [],
  }
  }
}

