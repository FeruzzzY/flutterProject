import React from "react";
import { Link } from "react-router-dom";

const CouldNotSolve = ({ info }) => {
  return (
    <div className="flex flex-col gap-6 py-4 px-6 rounded-2xl bg-redLight">
      <div className="flex md:flex-row flex-col gap-6 md:justify-between items-center">
        <div className=" md:w-[calc(100%_-_210px)] w-full flex flex-col gap-2">
          <p className="text-base font-semibold text-red">{info?.title}</p>
          <p className="text-sm font-medium text-black">{info?.sub_title}</p>
        </div>
        <Link
          to="#"
          className="py-4 md:px-8 px-4 border border-red text-red rounded-[100px] w-[210px] flex justify-center"
        >
          {info?.link_title}
        </Link>
      </div>

      <p className="text-sm font-medium text-white rounded-lg py-2 px-4 bg-red">
        {info?.desc}
      </p>
    </div>
  );
};

export default CouldNotSolve;
