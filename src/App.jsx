import React from 'react'
import Grid from './Grid'

function App() {
  return (
    <Grid
      cols={[
        {
          breakpoint: `default`,
          columns: 6,
          className: `mx-4 border-l border-r border-red-500`,
        },
        { breakpoint: `md`, columns: 12, className: `` },
        { breakpoint: `xl`, columns: 16, className: `` },
      ]}
    />
  )
}

export default App
