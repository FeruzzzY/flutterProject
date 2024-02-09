import React from "react";
import BaseButton from "./buttons/BaseButton";
import { Link } from "react-router-dom";

const PageNFound = () => {
  return (
    <div className="lg:mt-[70px] mt-[60px] p-6">
      <div className="flex w-full justify-center">
        <div className="md:w-[681px] flex w-full gap-6 flex-col items-center">
          <img src="/images/404.png" className="w-[200px] h-[200px]" alt="" />
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-center">
            Oops!
          </p>
          <div className="text-center text-lg md:text-xl font-medium text-grayDark md:px-10">
            We can’t find the page that you’re lokking for.
          </div>
          <Link to="/">
            <BaseButton className="w-[175px]" blue_color="blue_color">
              Go to home
            </BaseButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNFound;
