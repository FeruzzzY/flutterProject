import React from "react";

const AvatarIcon = (props) => {
  return (
    <svg
      {...props}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="24" fill="#E8E9EB" />
      <circle cx="24" cy="24" r="10" fill="#E8E9EB" />
      <circle cx="24" cy="24" r="10" stroke="#23262F" strokeWidth="1.5" />
      <path
        d="M26.4915 21.5C26.4915 22.8807 25.3706 24 23.9879 24C22.6053 24 21.4844 22.8807 21.4844 21.5C21.4844 20.1193 22.6053 19 23.9879 19C25.3706 19 26.4915 20.1193 26.4915 21.5Z"
        fill="white"
      />
      <path
        d="M19.5 29C21.8317 26.5578 26.1432 26.4428 28.5 29M26.4951 21.5C26.4951 22.8807 25.3742 24 23.9915 24C22.6089 24 21.488 22.8807 21.488 21.5C21.488 20.1193 22.6089 19 23.9915 19C25.3742 19 26.4951 20.1193 26.4951 21.5Z"
        stroke="#23262F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default AvatarIcon;
