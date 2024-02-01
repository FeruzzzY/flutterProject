import React from "react";

const TitleCabinet = ({ title, className }) => {
  return (
    <p className={`font-bold md:text-2xl text-lg mb-4 ${className}`}>{title}</p>
  );
};

export default TitleCabinet;
