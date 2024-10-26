/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white": "#fff",
        "blue": "rgb(45, 210, 210)",
        "lite-green": "#25BF9D",
        "lite-blue": "#5a8fbd",
        "violet": "#6F5499",
        "gray": "#333",
        "light-gray": "#f8f8f8",
        'card-border': 'rgba(245,245,245,0.67)',
        "black": "#333333",
        'text_color':'#9A9797'
      },
      fontSize: {
        13: '13px',
        26: '26px'
      },
      maxWidth: {
        "1160": "1160px",
      },
      boxShadow: {
        "header": "-1px 12px 18px 10px rgba(7, 77, 131, 0.19)",
        "footer": "1px -7px 18px 0px rgba(10, 79, 133, 0.2)"
      }
    },
  },
  plugins: [],
}