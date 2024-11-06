/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
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
                508: "508px",
                1400: "1400",
                520: "520px",
            },
            height: {
                285: "285px",
                794: "794px",
                624: "624px",
                36: "36px",
                56: "56px",
                902: "902px",
                1053: "1053",
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
            plugins: [],
        },
    },
};
