import React from "react";
import { useTranslation } from "react-i18next";
import { NavigationDashboard } from "../../../components/dashboard-layout";
import CardRounded16 from "../../../components/cards/CardRounded16";
import TextSize20 from "../../../components/texts/TextSize20";

const Notifications = () => {
  const { t } = useTranslation();
  return (
    <div>
      <NavigationDashboard title={t("sidebar_links.notifications")} />
      <div className="lg:mt-[90px] mt-[60px] py-5 px-3.5">
        <div className="grid grid-cols-5 w-full justify-center md:gap-7 items-start gap-0">
          <CardRounded16 className="md:col-span-3 col-span-5">
            <TextSize20>Change your password</TextSize20>
            <br />
            <p className="text-base font-normal text-black">
              Our company, E-Shopify, is looking to launch a cutting-edge
              E-Commerce mobile app to enhance our customers' shopping
              experience. We want a talented development team to create a
              user-friendly and feature-rich app that meets the needs of modern
              online shoppers. The app should be compatible with both iOS and
              Android platforms.
              <br />
              <br />
              <span className="font-semibold">User Registration/Login:</span>
              <ul className="list-disc pl-8">
                <li>
                  Allow users to create accounts or log in using social media
                  credentials.
                </li>
                <li>Implement a secure authentication system.</li>
              </ul>
              <br />
              <span className="font-semibold">Product Catalog:</span>
              <ul className="list-disc pl-8">
                <li>
                  Display a wide range of products with detailed descriptions.
                </li>
                <li>
                  Enable users to filter products based on categories, prices,
                  and brands.
                </li>
              </ul>
              <br />
              <span className="font-semibold">Shopping Cart:</span>
              <ul className="list-disc pl-8">
                <li>Implement a seamless shopping cart functionality.</li>
                <li>
                  Allow users to add, edit, and remove items from their cart.
                </li>
              </ul>
              <br />
              <span className="font-semibold">Checkout Process:</span>
              <ul className="list-disc pl-8">
                <li>Create a smooth and intuitive checkout process.</li>
                <li>
                  Include multiple payment options (credit card, PayPal, etc.).
                </li>
              </ul>
            </p>
          </CardRounded16>
          <CardRounded16 className="md:col-span-2 col-span-5 !p-0">
            <p className="text-base md:text-xl font-bold text-black p-4  border-b border-gray">
              All notifications{" "}
              <span className="text-dodgerBlue text">(15)</span>
            </p>
            <div className="px-6 py-4 pb-0">
              <div className="bg-greenLight text-base font-normal text-black p-2 rounded-lg">
                <p className="font-semibold">Change your password</p>
                <p className="mt-2">
                  In the ever-evolving landscape of programming languages, Dart
                  emerges as a powerful, open-source language...
                </p>
              </div>
              <div className="w-full border border-gray mt-4" />
              {[1, 2, 3, 4, 5].map((item, index) => {
                return (
                  <div
                    className="border-b border-gray last-of-type:border-b-0 py-4 "
                    key={index}
                  >
                    <div className="flex gap-5 items-start justify-between">
                      <p className="text-sm font-bold text-black">
                        Notifications
                      </p>
                    </div>
                    <p className="text-sm font-normal text-black mt-2">
                      In the ever-evolving landscape of programming languages,
                      Dart emerges as a powerful, open-source language...
                    </p>
                  </div>
                );
              })}
            </div>
          </CardRounded16>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
