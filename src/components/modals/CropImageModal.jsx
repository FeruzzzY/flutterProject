import React from "react";
import TextSize18 from "../texts/TextSize18";
import BaseButton from "../buttons/BaseButton";
import CloseIcon from "../icons/CloseIcon";
import BaseButtonOutline from "../buttons/BaseButtonOutline";
import { useTranslation } from "react-i18next";

const CropImageModal = ({ cancel }) => {
  const { t } = useTranslation();
  return (
    <div className="fixed w-full h-full top-0 left-0 z-[9000]">
      <div className="fixed w-full h-full bg-black opacity-50 top-0 left-0 z-[9001]" />
      <div className="flex justify-center items-center relative z-[9002] w-full h-full">
        <div
          className="bg-white p-8 rounded-2xl relative z-[9003]
        sm:w-[640px] w-[calc(100%_-_30px)]"
        >
          <div className="relative z-[9003]">
            <div className="flex items-start gap-3 justify-between mb-3">
              <TextSize18>Crop image</TextSize18>
              <CloseIcon onClick={() => cancel()} className="cursor-pointer" />
            </div>
            <div className="flex gap-3 mt-6 justify-center">
              <BaseButtonOutline
                blue_color="blue_color"
                className="!py-2.5 w-[120px]"
                onClick={() => cancel()}
                type="button"
              >
                {t("login.cancel")}
              </BaseButtonOutline>
              <BaseButton
                blue_color="blue_color"
                type="button"
                className="!py-2.5 w-[120px]"
              >
                Save
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropImageModal;
