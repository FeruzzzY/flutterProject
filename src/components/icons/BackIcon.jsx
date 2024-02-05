import React from "react";

const BackIcon = (props) => {
  return (
    <svg
      className={props?.className}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11" cy="11" r="10" fill="#E8E9EB" />
      <circle cx="11" cy="11" r="10" stroke="#6E7179" strokeWidth="1.5" />
      <path
        d="M7 11L15 11M7 11C7 10.2998 8.9943 8.99153 9.5 8.5M7 11C7 11.7002 8.9943 13.0085 9.5 13.5"
        stroke="#6E7179"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BackIcon;
