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
        'purple-450': '#5C5A79',
        'black-51': 'rgb(51, 20, 54)',
        'blue-46': '#4F46E5',
        'green-22': '#22C55E',
        'blue-74': '#3B5174',
        'blue-26': '#268FE4',
        'purple-750': '#23081C',
      },
      width: {
        '342': '342px',
        '393': '393px',
        '353': '353px',
        '329': '329px',
        '110': '110px',
        '744': '744px',
        '656': '656px',
        '626': '626px',
        '508': '508px',
        '1400': '1400px',
        '520': '520px',
        '324': '324px',
        '251': '251px',
        '814': '814px',
        '489': '489px',
        '308': '308px',
      },
      height: {
        '285': '285px',
        '794': '794px',
        '624': '624px',
        '36': '36px',
        '56': '56px',
        '902': '902px',
        '1053': '1053px',
        '308': '308px',
        '381': '381px',
        '625': '625px',
        '108': '108px',
        '706': '706px',
      },
      fontSize: {
        '15': '15px',
        '16': '16px',
        '24': '24px',
        '40': '40px',
        '14': '14px',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'plus': ['Plus Jakarta Sans', 'sans-serif'],
      },
      margin: {
        'margin-b': '39px',
      },
      padding: {
        'person1': '60px',
      },
      backgroundSize: {
        '50%': '50% 50%',
      },
      backgroundImage: {
        'kanban-mobile': "url('/src/assets/draggable-area-mobile.png')",
        'kanban-desktop': "url('/src/assets/draggable-area-desktop.png')",
        'bgImg': "url('/src/assets/person-illustration.png')",
      },
      gridTemplateColumns: {
        'metrics': '112px minmax(100px, 2fr)',
      },
      screens: {
        'mobile': '393px',
        'tablete': '744px',
        'desktop': '1440px',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          /* Oculta a scrollbar no Chrome, Safari e Edge */
          '-ms-overflow-style': 'none',  // IE and Edge
          'scrollbar-width': 'none',     // Firefox
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',               // Chrome, Safari and Edge
        },
      });
    },
  ],
};
