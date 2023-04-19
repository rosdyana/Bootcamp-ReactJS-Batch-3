import React from "react";

/**
 * Spacer component
 * @param {string} children - children of the component
 * @returns {JSX.Element} - spacer component
 */
const Spacer = ({ children }) => {
  return (
    <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
      {children}
    </div>
  );
};

export default Spacer;
