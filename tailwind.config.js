/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: true,
  theme: {
    screens: {
          // => @media (min-width: 414px) { ... }
      'tablet': '450px',
      // => @media (min-width: 576px) { ... }

      'laptop': '960px',
      // => @media (min-width: 960px) { ... }

      'desktop': '1440px',
      // => @media (min-width: 1440px) { ... }
    }
  }
,
  plugins: [],
}
