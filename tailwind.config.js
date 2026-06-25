/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        nunito: ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        dark: {
          bg: '#0f0f0f',
          card: '#1a1a1a',
          border: '#2a2a2a',
        },
        light: {
          bg: '#ffffff',
          card: '#f8f8f8',
          border: '#e5e5e5',
        },
        primary: '#a855f7',
        'primary-dark': '#9333ea',
        accent: '#22d3ee',
        muted: '#94a3b8',
      }
    },
  },
  plugins: [],
}
