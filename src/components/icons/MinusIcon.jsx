import React from "react";

const MinusIcon = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" fill="#ffd49" />
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="#2a85ff"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <path
        d="M16 12H8"
        stroke="#2a85ff"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default MinusIcon;
