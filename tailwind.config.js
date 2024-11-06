/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'black-55': 'rgba(0, 0, 0, 0.55)',
        'blue-55' : '#92BBFF',
        "brown-70" : 'rgba(35, 8, 28, 0.7)' ,
        'blue-750' : '#1E293B',
        'yellow-150' : '#FCF4B6',
        'blue-850' : '#160A60',
        'purple-450' : '#5C5A79',

      },
      width: {
        '353' : '353px',
        '342': '342px',
        '393' : '393px',
        '308' : '308px',
        

        "black-55": "rgba(0, 0, 0, 0.55)",
        "black-51": "rgb(51, 20, 54)",
        "blue-55": "#92BBFF",
        "blue-46": "#4F46E5",
        "bronw-70": "rgba(35, 8, 28, 0.7)",
        "blue-750": "#1E293B",
        "yellow-150": "#FCF4B6",
        "blue-850": "#160A60",
        "green-22": "#22C55E",
      },
      width: {
        342: "342px",
        392: "392px",
        353: "353px",
        329: "329px",
        110: "110px",
        744: "744px",
        656: "656px",
        626: "626px",
        508: "508px",
        1400: "1400px",
        520: "520px",
        324: "324px",
        251: "251px",
        814: "814px",
        489: "489px",
        393: "393px",
        308: "308px",

      },
      height: {
        285: "285px",
        794: "794px",
        624: "624px",
        36: "36px",
        56: "56px",
        902: "902px",
        1053: "1053px",
        308: "308px",
        381: "381px",
      },
      fontSize: {
        "24px": "24px",
        "15px": "15px",
        "14px": "14px",
        "40px": "40px",
        "16px": "16px",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        plus: ["Plus Jakarta Sans", "sans-serif"],
      },
      margin: {
        "margin-b": "39px",
      },
      padding: {
        person1: "60px",
      },
      backgroundSize: {
        "50%": "50% 50%",
      },
      backgroundImage: {
        kanban: "url('/src/assets/draggable-area.png')",
      },
      gridTemplateColumns: {
        metrics: "112px minmax(100px, 2fr)",
      },
       screens: {
      'tablete' : '744px'
    },
    },
   
  },

  plugins: [],
};
