# Tailwind React Grid Overlay

**What this is:**  
A quick Tailwind CSS-based overlay for column grids.

**What this isn't:**  
A highly opinionated, all incompasing Grid System

**Notes:**

- Toggle on/off by pressing `g` on your keyboard
- Will `return null` if `process.env.NODE_ENV !== development`
- Dynamically creates some class strings, which goes against Tailwind CSS guidelines for Purge CSS, but since you don't want this ending up on production, that shouldn't matter.

## Usage

```jsx
import { Grid } from "tailwind-react-grid-overlay";

<Grid
  // optional: default is `true`
  visibleByDefault={false}
  //
  // Sets of columns for each breakpoint
  // In this example the mobile columns have outside margin and borders
  // The others will touch to the outer edges of the window
  cols={[
    {
      breakpoint: `default`,
      columns: 6,
      className: `mx-4 border-l border-r border-red-500`,
    },
    { breakpoint: `md`, columns: 12, className: `` },
    { breakpoint: `xl`, columns: 16, className: `` },
  ]}
/>;
```

- By [Simeon Griggs](https://simeongriggs.dev/)
