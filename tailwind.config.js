/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand and primary colors (HouseEazy theme)
        primary: {
          DEFAULT: '#00A6A6',
          dark: '#008080',
        },
        teal: {
          DEFAULT: '#00A6A6',
          dark: '#008080',
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
