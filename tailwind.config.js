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
        "brown-70" : 'rgba(35, 8, 28, 0.7)' ,
        'blue-750' : '#1E293B',
        'yellow-150' : '#FCF4B6',
        'blue-850' : '#160A60',
        'blue-check': '#5570F1',
        'social-color':'#5E6366',
        'btn-blue': '#1E293B',
      },
      width: {
        '342': '342px',
        '393' : '393px',
        '308' : '308px',
        '37': '37%',
        '48': '48%',
        '51': '51%',
        '65': '65%',
        '70': '70%',
        '85': '85%',
      },
      height: {
        '285': '285px',
        '794' : '794px',
        '308' : '308px',
        '381' : '381px'
    },
      fontSize: {
        '15': '15px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '28': '28px',
        '32': '32px',
        '48': '48px',
  },
  screens: {
    'tablet': '394px',
    'desktop': "745px", // Adiciona um breakpoint extra grande
  },
    fontFamily: {
    'roboto': ['Roboto'],
    'inter': ['Inter'],
  },
    margin: {
    'margin-b': '39px', 
    },
    padding: {
      'person1' : '60px'
    },
    spacing: {
      '1/3': '33.3333%',
      '1/5': '20%'
    },
  plugins: [],
  }
  }
}

