import React from "react";

const BlueRoundIcon = (props) => {
  return (
    <svg
      width="8"
      height="10"
      viewBox="0 0 8 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_ddd_558_3194)">
        <circle cx="4" cy="3" r="3" fill="#2A85FF" />
      </g>
      <defs>
        <filter
          id="filter0_ddd_558_3194"
          x="0"
          y="0"
          width="8"
          height="10"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.164706 0 0 0 0 0.521569 0 0 0 0 1 0 0 0 0.17 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_558_3194"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.164706 0 0 0 0 0.521569 0 0 0 0 1 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_558_3194"
            result="effect2_dropShadow_558_3194"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.164706 0 0 0 0 0.521569 0 0 0 0 1 0 0 0 0.03 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_558_3194"
            result="effect3_dropShadow_558_3194"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow_558_3194"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default BlueRoundIcon;
