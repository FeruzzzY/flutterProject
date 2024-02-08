import React from "react";
import TextSize20 from "../texts/TextSize20";
import BaseButton from "../buttons/BaseButton";
import BaseButtonOutline from "../buttons/BaseButtonOutline";
import { removeToken } from "../../helpers/tokenStorage";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import toastr from "toastr";

const LogOutModal = ({ setLogOut, cabinetTrue }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogOut = () => {
    removeToken();
    setLogOut();
    if (cabinetTrue) {
      navigate("/");
    }
    toastr.success(t("login.logged_out"));
  };
  return (
    <div className="fixed w-full h-full top-0 left-0 z-[9000]">
      <div className="fixed w-full h-full bg-black opacity-50 top-0 left-0 z-[9001]" />
      <div className="flex justify-center items-center relative z-[9002] w-full h-full">
        <div
          className="bg-white p-8 rounded-2xl relative z-[9003]
        sm:w-[340px] w-[calc(100%_-_30px)]"
        >
          <div className="absolute top-[20px] left-[-55px] w-full h-full">
            <div className="flex justify-center ">
              <img src="/images/logout_redbg.png" alt="" />
            </div>
          </div>
          <div className="mt-[70px]  relative z-[9003]">
            <TextSize20 className="text-center">
              {t("login.sure_log_out")}
            </TextSize20>
            <div className="flex gap-3 mt-6">
              <BaseButtonOutline
                blue_color="blue_color"
                className="!py-2.5"
                onClick={() => setLogOut()}
                type="button"
              >
                {t("login.cancel")}
              </BaseButtonOutline>
              <BaseButton
                blue_color="blue_color"
                type="button"
                className="!py-2.5"
                onClick={() => handleLogOut()}
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

export default LogOutModal;
