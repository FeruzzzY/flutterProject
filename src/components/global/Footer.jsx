// Footer.js

import React from "react";
import { Link } from "react-router-dom";
import { BrandIcon } from "../svg/BrandIcon";
import MailIcon from "../icons/MailIcon";
import MapIcon from "../icons/MapIcon";
import PhoneIcon from "../icons/PhoneIcon";
import FacebookIcon from "../icons/FacebookIcon";
import TwitterIcon from "../icons/TwitterIcon";
import LinkedInIcon from "../icons/LinkedInIcon";

const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white">
      <div className="container ">
        <div className="grid grid-cols-4 gap-6 py-8">
          <div className="lg:col-span-1 md:col-span-2 col-span-4 flex flex-col gap-6 text-lg font-medium text-black">
            <Link to="/">
              <BrandIcon />
            </Link>
            <a
              href="mailto: hello@exadot.com"
              className="flex gap-2 items-center"
            >
              <MailIcon />
              <span>hello@exadot.com</span>
            </a>
            <a
              href="tel: +91 91813 23 2309"
              className="flex gap-2 items-center"
            >
              <PhoneIcon />
              <span>+91 91813 23 2309</span>
            </a>
            <a href="#" className="flex gap-2 items-center">
              <MapIcon />
              <span>Somewhere in the World</span>
            </a>
          </div>
          <div className="lg:col-span-1 md:col-span-2 col-span-4 flex lg:justify-end justify-start">
            <div>
              <p className="text-xl font-bold text-black mb-4">Home</p>
              <div className="flex flex-col gap-2 text-xl font-normal text-chicago ">
                <Link to="/benefits" className="hover:text-black duration-200">
                  Benefits
                </Link>
                <Link
                  to="/our-courses"
                  className="hover:text-black duration-200"
                >
                  Our Courses
                </Link>
                <Link
                  to="/our-testimonials"
                  className="hover:text-black duration-200"
                >
                  Our Testimonials
                </Link>
                <Link to="/faq" className="hover:text-black duration-200">
                  Our FAQ
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 md:col-span-2 col-span-4 flex lg:justify-end justify-start">
            <div>
              <p className="text-xl font-bold text-black mb-4">About Us</p>
              <div className="flex flex-col gap-2 text-xl font-normal text-chicago ">
                <Link to="/company" className="hover:text-black duration-200">
                  Company
                </Link>
                <Link
                  to="/achievements"
                  className="hover:text-black duration-200"
                >
                  Achievements
                </Link>
                <Link to="/our-goals" className="hover:text-black duration-200">
                  Our Goals
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 md:col-span-2 col-span-4 flex lg:justify-end justify-start">
            <div>
              <p className="text-xl font-bold text-black mb-4">
                Social Profiles
              </p>
              <div className="flex gap-3.5 text-xl font-normal text-chicago ">
                <a href="#">
                  <FacebookIcon />
                </a>
                <a href="#">
                  <TwitterIcon />
                </a>
                <a href="#">
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-stormDust text-base sm:text-lg font-semibold flex justify-center py-8 border-t border-t-gray">
          <p>© {currentYear} Exadot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
