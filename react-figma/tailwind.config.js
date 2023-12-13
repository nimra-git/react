/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1789FC',
        'custom-pink': '#FC60A8',
        'dark-blue' : '#0F072C',
        'custom-gray': 'rgba(248, 249, 255, 1)'
      },
    },
  },
  plugins: [],
}

