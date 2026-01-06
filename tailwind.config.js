/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand and primary colors (Orvea Estates green theme)
        primary: {
          DEFAULT: '#5c9531',
          dark: '#4a7a27',
        },
        teal: {
          DEFAULT: '#5c9531',
          dark: '#4a7a27',
        },
        // Accent colors
        coral: '#ED716C',
        accent: {
          red: '#DC3545',
          coral: '#ED716C',
        },
        // Text colors
        text: {
          primary: '#212529',
          heading: '#111111',
          muted: '#6C757D',
        },
        // Background colors
        background: {
          main: '#F8F9FA',
          light: '#E9ECEF',
        },
        // Border colors
        border: {
          DEFAULT: '#CED4DA',
          light: '#DEE2E6',
        },
      },
    },
  },
  plugins: [],
}
