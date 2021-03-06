import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import GridCols from './GridCols.js'

function Grid({ cols, visibleByDefault, color }) {
  const [gridVisible, setGridVisible] = useState(visibleByDefault)
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'g') setGridVisible(!gridVisible)
    })
  })

  if (process.env.NODE_ENV !== 'development') return null
  if (!gridVisible) return null

  return (
    <section className="fixed inset-0 z-50 pointer-events-none">
      {cols.map((set, index) => (
        <GridCols
          key={set.breakpoint}
          set={set}
          index={index}
          cols={cols}
          className={set.className}
          color={color}
        />
      ))}
    </section>
  )
}

Grid.propTypes = {
  visibleByDefault: PropTypes.bool,
  cols: PropTypes.arrayOf(PropTypes.shape({
    breakpoint: PropTypes.string.isRequired,
    columns: PropTypes.number.isRequired,
    className: PropTypes.string,
  })),
  color: PropTypes.oneOf(['red', 'green', 'blue']),
}

Grid.defaultProps = {
  visibleByDefault: true,
  cols: [
    {
      breakpoint: `default`,
      columns: 6,
      className: `mx-4 border-l border-r border-red-500`,
    },
    {
      breakpoint: `md`,
      columns: 12,
      className: ``,
    },
  ],
  color: `red`
}

export default Grid
