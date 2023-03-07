import * as React from "react";
const SvgArrowButton = (props) => (
  <svg
    {...props}
    className="arrow-button"
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
  >
    <circle id="arrow-button-button" cx={7} cy={7} r={7}/>
    <path
      id="arrow-button-arrow"
      d="M9.494 7.354a.5.5 0 0 0 0-.708L6.312 3.464a.5.5 0 1 0-.708.708L8.433 7 5.604 9.828a.5.5 0 1 0 .708.708l3.182-3.182ZM9 7.5h.14v-1H9v1Z"
    />
  </svg>
);
export default SvgArrowButton;

