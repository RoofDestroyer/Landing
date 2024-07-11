import React from "react";

const CustomSVG = ({ color = "white" }) => (
  <svg
    width="13"
    height="10"
    viewBox="0 0 13 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.01864 7.26588L11.0073 0.270325L12.257 1.51894L4.01917 9.75676L0.274902 6.01249L1.52352 4.76387L4.01864 7.26588Z"
      fill={color}
    />
  </svg>
);

export default CustomSVG;
