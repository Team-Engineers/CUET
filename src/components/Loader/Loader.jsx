import React from "react";
import "./loader.css"
const CuetLoader = () => {
  const loaderStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    background: "#FCFCFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    overflow: "hidden",
  };

  return (
    <div style={loaderStyles}>
      <div className="three-body">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
      </div>
    </div>
  );
};

export default CuetLoader;
