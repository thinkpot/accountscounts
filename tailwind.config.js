/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#001f3f',    // Deep Navy Blue
        'secondary': '#8c92ac', // Cool Slate Gray
        'accent': '#5DE2E7',     // Gold
      },
      fontFamily: {
        'unbounded': ['Unbounded', 'sans-serif'],
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

/* working */