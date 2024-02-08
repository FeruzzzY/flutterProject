import React from "react";
import { BrandIcon } from "../svg/BrandIcon";
import { Link } from "react-router-dom";

const TitleCabinet = ({ title, className }) => {
  return (
    <>
      <p
        className={`lg:block hidden font-bold md:text-2xl text-lg mb-4 ${className}`}
      >
        {title}
      </p>
      <Link to="/">
        <BrandIcon className="lg:hidden block" />
      </Link>
    </>
  );
};

export default TitleCabinet;
