module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        turkis: '#40b0bf',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['even'],
      border: ['active', 'focus'],
    },
  },
  plugins: [],
}
