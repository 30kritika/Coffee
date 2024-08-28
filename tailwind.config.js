/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        brown1: '#643c28',
        brown2:"#412a21",
        beige1:"#ead4c0",
        beige2:"#b19784",
        leftdark:"#643c28",
        lightbrown:"#ab917f",
        darkGray:"#1a1f25",
        lightGray:"#272c35",
      },
      container:{
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
        },
      }
    },
  },
  plugins: [],
}

