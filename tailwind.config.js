module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      screens: {
          'sm': '640px',
          // => @media (min-width: 640px) { ... }
          'md': '768px',
          'lg': '1024px',
          // => @media (min-width: 1024px) { ... }

          'xl': '1280px',
          // => @media (min-width: 1280px) { ... }
      },
      colors: {
          'red': '#ff0000',
          'black': '#000',
          'white': '#fff',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': {
              100: '#f6f2f2',
          200: '#eae6e6',
          300: '#dbd7d7',
          400: '#cbc8c8',
          500: '#aeabab',
          600: '#9d9a9a',
          700: '#8d8a8a',
          800: '#757373',
          900: '#5b5959',
      },
          'secondary': {
              100: '#E2E2D5',
              200: '#888883'
          }
    },
    fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        body: ['Nunito']
    },
    extend: {},
  },
  plugins: [],
}
