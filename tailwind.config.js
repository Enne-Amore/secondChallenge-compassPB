/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'kanban': "url('/src/assets/draggable-area.png')",
      },
      gridTemplateColumns: {
        'metrics': '112px minmax(100px, 2fr)',
      },
      fontFamily: {
        'plus': ['Plus Jakarta Sans', 'sans-serif',],
      },
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
        '393' : '393px',
        '308' : '308px',
      },
      height: {
        '285': '285px',
        '794' : '794px',
        '308' : '308px',
        '381' : '381px'
      },
      fontSize: {
        '24': '24px',
      },
      fontFamily: {
        roboto: ['Roboto'],
      },
      margin: {
        'margin-b': '39px', 
      },
      padding: {
        'person1' : '60px'
      },
    },
  plugins: [],
  }
}

