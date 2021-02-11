const plugin = require('tailwindcss/plugin')

const borderXY = plugin(function({ addUtilities, theme }) {
    const borderWidths = theme('borderWidth', {})
    const axisBorders = Object.keys(borderWidths).map(key => {
      const value = borderWidths[key]
      const xClass = key === 'default' ? `.border-x` : `.border-x-${key}`
      const yClass = key === 'default' ? `.border-y` : `.border-y-${key}`

      return [ 
        { 
          [xClass]: {
            borderLeftWidth: value,
            borderRightWidth: value,
          },
        },
        { 
          [yClass]: {
            borderTopWidth: value,
            borderBottomWidth: value,
          }
        }
      ]
    }).flat()

    addUtilities(axisBorders)
  })

module.exports = borderXY