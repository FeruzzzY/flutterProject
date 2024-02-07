import React from "react";

const GlobusIcon = (props) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11" cy="11" r="10" fill="#E8E9EB" />
      <circle cx="11" cy="11" r="10" stroke="#6E7179" strokeWidth="1.5" />
      <ellipse cx="11" cy="11" rx="4" ry="10" fill="white" />
      <ellipse
        cx="11"
        cy="11"
        rx="4"
        ry="10"
        stroke="#6E7179"
        strokeWidth="1.5"
      />
      <path
        d="M1 11H21"
        stroke="#6E7179"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default GlobusIcon;
