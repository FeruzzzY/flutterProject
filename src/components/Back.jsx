import React from "react";
import { BackIcon } from "./icons";
import { Link } from "react-router-dom";

const Back = ({ link }) => {
  return (
    <div>
      <Link
        to={link}
        className="inline-flex gap-2 mb-6 items-center text-grayDark font-semibold text-sm"
      >
        <BackIcon />
        <span>Back</span>
      </Link>
    </div>
  );
};

export default Back;
