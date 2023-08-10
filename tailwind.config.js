/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "purple-bg": "url('./src/public/img/purple-bg.jpg')",
        "perf-img": "url('./src/public/img/Perfil.jpg')",
      },
      fontFamily: {
        Oxanium: ['Oxanium'],
      },
    },
  },
  plugins: [],
}