import React, { useEffect, useState } from "react";
import { BrandIcon } from "../svg/BrandIcon";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`bg-gray-800 p-4 fixed top-0 w-full z-10 py-4 bg-sliverWhite ${
        scrolling ? "border-b-2 border-gray" : ""
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-16">
            <Link to="/" className="text-black font-bold text-xl py-3">
              <BrandIcon />
            </Link>
            <div className="flex gap-10 pt-1">
              <Link
                to="/benefits"
                className="font-semibold text-base text-black duration-150 hover:text-dodgerBlue"
              >
                Benefits
              </Link>
              <Link
                to="/our-courses"
                className="font-semibold text-base text-black duration-150 hover:text-dodgerBlue"
              >
                Our courses
              </Link>
              <Link
                to="/our-testimonials"
                className="font-semibold text-base text-black duration-150 hover:text-dodgerBlue"
              >
                Our testimonials
              </Link>
              <Link
                to="/faq"
                className="font-semibold text-base text-black duration-150 hover:text-dodgerBlue"
              >
                FAQ
              </Link>
            </div>
          </div>
          {/* Add your navigation links here */}
          <div className="space-x-4">
            <a href="#" className="text-black">
              Home
            </a>
            <a href="#" className="text-black">
              About
            </a>
            <a href="#" className="text-black">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
