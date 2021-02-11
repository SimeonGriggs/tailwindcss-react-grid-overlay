const borderXY = require('./index')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      borderWidth: {
        'mega': '20px'
      }
    },
  },
  variants: {},
  plugins: [borderXY],
}
