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
      }
    },
  },
  plugins: [],
}

