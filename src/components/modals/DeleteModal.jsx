import React from "react";
import TextSize20 from "../texts/TextSize20";
import BaseButton from "../buttons/BaseButton";
import BaseButtonOutline from "../buttons/BaseButtonOutline";
import { useTranslation } from "react-i18next";
import { RiDeleteBinLine } from "react-icons/ri";

const DeleteModal = ({ cancel }) => {
  const { t } = useTranslation();
  return (
    <div className="fixed w-full h-full top-0 left-0 z-[9000]">
      <div className="fixed w-full h-full bg-black opacity-50 top-0 left-0 z-[9001]" />
      <div className="flex justify-center items-center relative z-[9002] w-full h-full">
        <div
          className="bg-white p-8 rounded-2xl relative z-[9003]
        sm:w-[340px] w-[calc(100%_-_30px)]"
        >
          <div className=" relative z-[9003]">
            <div className="flex justify-center mb-3">
              <RiDeleteBinLine size={40} color="#CE5A67" />
            </div>
            <TextSize20 className="text-center">
              Are you sure you want remove?
            </TextSize20>
            <div className="flex gap-3 mt-6">
              <BaseButtonOutline
                blue_color="blue_color"
                className="!py-2.5"
                onClick={() => cancel()}
                type="button"
              >
                {t("login.cancel")}
              </BaseButtonOutline>
              <BaseButton
                blue_color="blue_color"
                type="button"
                className="!py-2.5"
              >
                {t("login.yes")}
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
