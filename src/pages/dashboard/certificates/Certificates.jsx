import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavigationDashboard } from "../../../components/dashboard-layout";
import CardRounded16 from "../../../components/cards/CardRounded16";
import TextSize20 from "../../../components/texts/TextSize20";
import OverflowHidden from "../../../components/global/OverflowHidden";
import LogOutModal from "../../../components/modals/LogOutModal";

const Certificates = () => {
  const [openModal, setOpenModal] = useState(false);
  const { t } = useTranslation();
  return (
    <div>
      <NavigationDashboard title={t("sidebar_links.certificates")} />
      <div className="lg:mt-[90px] mt-[60px] py-5 px-3.5">
        <CardRounded16>
          <TextSize20>My certificates</TextSize20>

          <div className="grid grid-cols-4 gap-6 mt-6">
            <div
              className="flex flex-col justify-between xl:col-span-1 md:col-span-2 col-span-4 px-4 py-10 rounded-2xl bg-greenLight relative overflow-hidden"
              onClick={() => setOpenModal(true)}
            >
              <div class="bg-gradient-to-b from-[#E9F8FA] to-[#F5FBF8] absolute w-full h-full top-0 left-0"></div>
              <div className="flex justify-center items-center w-full h-full relative z-10">
                <div className="flex flex-col items-center gap-3">
                  <img src="/images/certificate1.png" alt="" />
                  <p className="text-base font-bold text-black text-center">
                    Flutter developer
                  </p>
                  <p className="text-sm font-medium text-grayDark text-center">
                    12.01.2024
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col justify-between xl:col-span-1 md:col-span-2 col-span-4 px-4 py-10 rounded-2xl bg-greenLight relative overflow-hidden"
              onClick={() => setOpenModal(true)}
            >
              <div class="bg-gradient-to-b from-[#FEF2DA] to-[#F1FAFA] absolute w-full h-full top-0 left-0"></div>
              <div className="flex justify-center items-center w-full h-full relative z-10">
                <div className="flex flex-col items-center gap-3">
                  <img src="/images/certificate2.png" alt="" />
                  <p className="text-base font-bold text-black text-center">
                    Dart developer
                  </p>
                  <p className="text-sm font-medium text-grayDark text-center">
                    12.01.2024
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col justify-between xl:col-span-1 md:col-span-2 col-span-4 px-4 py-10 rounded-2xl bg-greenLight relative overflow-hidden"
              onClick={() => setOpenModal(true)}
            >
              <div class="bg-gradient-to-b from-[#E9F8FA] to-[#F5FBF8] absolute w-full h-full top-0 left-0"></div>
              <div className="flex justify-center items-center w-full h-full relative z-10">
                <div className="flex flex-col items-center gap-3">
                  <img src="/images/certificate1.png" alt="" />
                  <p className="text-base font-bold text-black text-center">
                    Flutter developer
                  </p>
                  <p className="text-sm font-medium text-grayDark text-center">
                    12.01.2024
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col justify-between xl:col-span-1 md:col-span-2 col-span-4 px-4 py-10 rounded-2xl bg-greenLight relative overflow-hidden"
              onClick={() => setOpenModal(true)}
            >
              <div class="bg-gradient-to-b from-[#E9F8FA] to-[#F5FBF8] absolute w-full h-full top-0 left-0"></div>
              <div className="flex justify-center items-center w-full h-full relative z-10">
                <div className="flex flex-col items-center gap-3">
                  <img src="/images/certificate1.png" alt="" />
                  <p className="text-base font-bold text-black text-center">
                    Flutter developer
                  </p>
                  <p className="text-sm font-medium text-grayDark text-center">
                    12.01.2024
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col justify-between xl:col-span-1 md:col-span-2 col-span-4 px-4 py-10 rounded-2xl bg-greenLight relative overflow-hidden"
              onClick={() => setOpenModal(true)}
            >
              <div class="bg-gradient-to-b from-[#E9F8FA] to-[#F5FBF8] absolute w-full h-full top-0 left-0"></div>
              <div className="flex justify-center items-center w-full h-full relative z-10">
                <div className="flex flex-col items-center gap-3">
                  <img src="/images/certificate1.png" alt="" />
                  <p className="text-base font-bold text-black text-center">
                    Flutter developer
                  </p>
                  <p className="text-sm font-medium text-grayDark text-center">
                    12.01.2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardRounded16>
      </div>

      {/* {openModal ? (
        <OverflowHidden>
          <LogOutModal setOpenModal={() => setOpenModal(false)} />
        </OverflowHidden>
      ) : null} */}
    </div>
  );
};

export default Certificates;
