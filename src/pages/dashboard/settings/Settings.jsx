import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavigationDashboard } from "../../../components/dashboard-layout";
import BaseButton from "../../../components/buttons/BaseButton";
import PlusIcon from "../../../components/icons/PlusIcon";
import EditIcon from "../../../components/icons/EditIcon";
import RemoveIcon from "../../../components/icons/RemoveIcon";
import UploadDefaultIcon from "../../../components/icons/UploadDefaultIcon";
import TextSize20 from "../../../components/texts/TextSize20";
import CustomInput from "../../../components/forms/CustomInput";
import Label from "../../../components/forms/Label";
import BaseButtonOutline from "../../../components/buttons/BaseButtonOutline";
import OverflowHidden from "../../../components/global/OverflowHidden";
import CropImageModal from "../../../components/modals/CropImageModal";
import DeleteModal from "../../../components/modals/DeleteModal";
import FileInput from "../../../components/forms/FileInput";

const Settings = () => {
  const [openCropModal, setOpenCropModal] = useState(false);
  const [openRemoveModal, setOpenRemoveModal] = useState(false);
  const [changeColor, setChangeColor] = useState(false);
  const [changeColor2, setChangeColor2] = useState(false);

  const handleChangeColor = () => setChangeColor(!changeColor);
  const handleChangeColor2 = () => setChangeColor2(!changeColor2);
  const { t } = useTranslation();

  const handleFileSelect = (file) => {
    console.log("Selected file:", file);
    // Do something with the selected file, like uploading it
  };
  return (
    <div>
      <NavigationDashboard title={t("sidebar_links.settings")} />
      <div className="lg:mt-[90px] mt-[60px] p-6">
        <div className="flex flex-col p-6 bg-white rounded-2xl border border-solid border-gray md:max-w-[760px] max-w-full max-md:px-5">
          <TextSize20>Profile information</TextSize20>

          <div className="inline-flex md:flex-row flex-col gap-4 justify-center items-center md:self-start self-auto mt-6">
            <div className="flex justify-center items-center w-[100px] h-[100px] rounded-full overflow-hidden">
              <UploadDefaultIcon />
            </div>
            <div className="inline-flex gap-4 flex-wrap">
              <FileInput onFileSelect={handleFileSelect} />
              <BaseButtonOutline
                blue_color="blue_color"
                className="gap-3 items-center sm:!w-[120px] w-full !px-2"
                onMouseEnter={handleChangeColor}
                onMouseLeave={handleChangeColor}
                onClick={() => setOpenCropModal(true)}
              >
                <EditIcon
                  color={changeColor ? "#fff" : "#2A85FF"}
                  color2={changeColor ? "#2A85FF" : "#fff"}
                />
                <span>Edit</span>
              </BaseButtonOutline>
              <BaseButtonOutline
                red_color="red_color"
                className="gap-3 items-center sm:!w-[140px] w-full !px-2"
                onMouseEnter={handleChangeColor2}
                onMouseLeave={handleChangeColor2}
                onClick={() => setOpenRemoveModal(true)}
              >
                <RemoveIcon color={changeColor2 ? "#fff" : "#CE5A67"} />
                <span>Remove</span>
              </BaseButtonOutline>
            </div>
          </div>
          <br />
          <Label title="Name" className="relative select-none">
            <CustomInput placeholder={"Your name"} />
          </Label>
          <br />
          <Label title="Surname" className="relative select-none">
            <CustomInput placeholder={"Your surname"} />
          </Label>
        </div>
        <div className="inline-flex gap-3 mt-6">
          <BaseButton className="min-w-[180px] !px-3" blue_color="blue_color">
            Save
          </BaseButton>
          {/* <BaseButtonOutline
            className="min-w-[180px] !px-3"
            red_color="red_color"
          >
            Delate account
          </BaseButtonOutline> */}
        </div>
      </div>

      {openCropModal ? (
        <OverflowHidden>
          <CropImageModal cancel={() => setOpenCropModal(false)} />
        </OverflowHidden>
      ) : null}
      {openRemoveModal ? (
        <OverflowHidden>
          <DeleteModal cancel={() => setOpenRemoveModal(false)} />
        </OverflowHidden>
      ) : null}
    </div>
  );
};

export default Settings;
