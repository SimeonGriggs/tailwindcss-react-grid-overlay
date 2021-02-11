import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import GridCols from './GridCols'

function Grid({ cols }) {
  const [gridVisible, setGridVisible] = useState(true)
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
        />
      ))}
    </section>
  )
}

Grid.propTypes = {
  cols: PropTypes.arrayOf(PropTypes.shape({
    breakpoint: PropTypes.string.isRequired,
    columns: PropTypes.number.isRequired,
    className: PropTypes.string,
  })),
}

GridCols.defaultProps = {
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
}

export default Grid
