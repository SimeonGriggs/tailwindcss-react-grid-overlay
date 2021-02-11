import PropTypes from 'prop-types'
import React from 'react'

function GridCols({ className, cols, index, set }) {
  const columns = [...Array(set.columns).keys()]

  const nextBreakpoint = cols[index + 1]?.breakpoint
  const visibleClass =
    set.breakpoint === `default` ? `flex` : `hidden ${set.breakpoint}:flex`
  const hiddenClass = nextBreakpoint ? `${nextBreakpoint}:hidden` : `hidden`
  const defaultClasses = `h-full divide-x divide-red-500`

  const classes = [visibleClass, hiddenClass, defaultClasses, className]

  return (
    <div className={classes.join(' ').trim()}>
      {columns.map((col) => (
        <div
          key={col}
          className="flex-1 text-red-500 flex items-center justify-center h-full"
        >
          {col + 1 === set.columns && (
            <div className="fixed w-full bottom-0 flex justify-center items-center">
              <code className="text-xs px-2 py-1 rounded-t bg-black text-white">
                {set.breakpoint}
              </code>
            </div>
          )}
          <div className="transform rotate-90">
            {col + 1}/{set.columns}
          </div>
        </div>
      ))}
    </div>
  )
}

GridCols.propTypes = {
  className: PropTypes.string,
  cols: PropTypes.array,
  index: PropTypes.number,
  set: PropTypes.shape({
    breakpoint: PropTypes.string.isRequired,
    columns: PropTypes.number.isRequired,
    className: PropTypes.string,
  }),
}

GridCols.defaultProps = {
  className: '',
  cols: [
    {
      breakpoint: `default`,
      columns: 6,
      className: `mx-4 border-l border-r border-red-500`,
    },
  ],
  index: 0,
  set: {
    breakpoint: `default`,
    columns: 6,
    className: `mx-4 border-l border-r border-red-500`,
  },
}

export default GridCols
