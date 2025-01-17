import React from "react";

const RemoveIcon = (props) => {
  return (
    <svg
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5 4.5L16.8803 14.5251C16.7219 17.0864 16.6428 18.3671 16.0008 19.2879C15.6833 19.7431 15.2747 20.1273 14.8007 20.416C13.8421 21 12.559 21 9.99274 21C7.42312 21 6.1383 21 5.17905 20.4149C4.7048 20.1257 4.296 19.7408 3.97868 19.2848C3.33688 18.3626 3.25945 17.0801 3.10461 14.5152L2.5 4.5"
        stroke={props?.color || "#CE5A67"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M19 4.5H1"
        stroke={props?.color || "#CE5A67"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14.0575 4.5L13.3748 3.09173C12.9213 2.15626 12.6946 1.68852 12.3035 1.39681C12.2167 1.3321 12.1249 1.27454 12.0288 1.2247C11.5957 1 11.0759 1 10.0363 1C8.97059 1 8.43775 1 7.99745 1.23412C7.89986 1.28601 7.80675 1.3459 7.71906 1.41317C7.3234 1.7167 7.10239 2.20155 6.66037 3.17126L6.05469 4.5"
        stroke={props?.color || "#CE5A67"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7.5 15.5L7.5 9.5"
        stroke={props?.color || "#CE5A67"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12.5 15.5L12.5 9.5"
        stroke={props?.color || "#CE5A67"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default RemoveIcon;
