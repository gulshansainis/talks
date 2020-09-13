// Pic.js
import React from "react";

export default ({ url }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
    }}
  >
    <img
      style={{
        display: "block",
        borderRadius: "50%",
        width: "20rem",
        height: "auto",
      }}
      src={url}
      alt="profile"
    />
  </div>
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
