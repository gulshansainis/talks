// em.js
import React from "react";

export default ({ children }) => (
  <span
    style={{
      backgroundImage: "linear-gradient(120deg, #f1e767 0%, #feb645 100%)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 0.2em",
      backgroundPosition: "0 110%",
      transition: "background-size 0.25s ease-in",
    }}
  >
    {children}
  </span>
);

/**
 * Appear,
  Notes,
  Head,
  Image,
  FullScreenCode,
  Horizontal,
  Invert,
  Split,
  SplitRight
 */
