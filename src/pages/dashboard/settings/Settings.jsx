import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavigationDashboard } from "../../../components/dashboard-layout";
import BaseButton from "../../../components/buttons/BaseButton";
import BaseButtonOutline from "../../../components/buttons/BaseButtonOutline";
import OverflowHidden from "../../../components/global/OverflowHidden";
import CropImageModal from "../../../components/modals/CropImageModal";
import FileInput from "../../../components/forms/FileInput";
import TextSize20 from "../../../components/texts/TextSize20";
import CustomInput from "../../../components/forms/CustomInput";
import Label from "../../../components/forms/Label";
import { GetAuthInstance } from "../../../helpers/httpClient";
import { IMG_URL } from "../../../helpers/api";
import UploadDefaultIcon from "../../../components/icons/UploadDefaultIcon";
import EditIcon from "../../../components/icons/EditIcon";
import RemoveIcon from "../../../components/icons/RemoveIcon";

const Settings = () => {
  const [openCropModal, setOpenCropModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [userData, setUserData] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = () => {
    GetAuthInstance()
      .get("/api/v1/profil/get")
      .then((response) => {
        if (response.data.success === 1) {
          setUserData(response.data.data);
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          console.log("xato bor");
        }
      });
  };

  const handleFileSelect = (file) => {
    setSelectedFile(file);
    setOpenCropModal(true);
  };

  const handleSaveImage = (croppedImage) => {
    setUserData((prevData) => ({
      ...prevData,
      avatar: croppedImage,
    }));
    setOpenCropModal(false);
  };

  const handleRemoveImage = () => {
    setUserData((prevData) => ({
      ...prevData,
      avatar: null,
    }));
    setSelectedFile(null);
  };

  const saveProfile = () => {
    const formData = new FormData();
    formData.append("avatar", userData.avatar);
    formData.append("firstname", userData.firstname || "");
    formData.append("lastname", userData.lastname || "");

    GetAuthInstance()
      .post("/api/v1/profil/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data.success === 1) {
          console.log("Saqlandi");
        }
      })
      .catch((error) => {
        console.error("Xatolik:", error);
      });
  };

  if (!userData) {
    return null;
  }

  return (
    <div>
      <NavigationDashboard title={t("sidebar_links.settings")} />
      <div className="lg:mt-[90px] mt-[60px] py-5 px-3.5">
        <div className="flex flex-col p-6 bg-white rounded-2xl border border-solid border-gray md:max-w-[760px] max-w-full max-md:px-5">
          <TextSize20>Profile information</TextSize20>

          <div className="inline-flex md:flex-row flex-col gap-4 justify-center items-center md:self-start self-auto mt-6">
            <div className="flex justify-center items-center w-[100px] h-[100px] rounded-full overflow-hidden">
              {userData.avatar ? (
                <img
                  src={IMG_URL + userData.avatar}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <UploadDefaultIcon />
              )}
            </div>
            <div className="inline-flex gap-4 flex-wrap">
              <FileInput onFileSelect={handleFileSelect} />
              {userData.avatar && (
                <>
                  <BaseButtonOutline
                    blue_color="blue_color"
                    className="gap-3 items-center sm:!w-[120px] w-full !px-2"
                    onClick={() => setOpenCropModal(true)}
                  >
                    <EditIcon />
                    <span>Edit</span>
                  </BaseButtonOutline>
                  <BaseButtonOutline
                    red_color="red_color"
                    className="gap-3 items-center sm:!w-[140px] w-full !px-2"
                    onClick={handleRemoveImage}
                  >
                    <RemoveIcon />
                    <span>Remove</span>
                  </BaseButtonOutline>
                </>
              )}
            </div>
          </div>
          <br />
          <Label title="Name" className="relative select-none">
            <CustomInput
              placeholder={"Your name"}
              value={userData.firstname || ""}
              onChange={(e) =>
                setUserData((prevData) => ({
                  ...prevData,
                  firstname: e.target.value,
                }))
              }
            />
          </Label>
          <br />
          <Label title="Surname" className="relative select-none">
            <CustomInput
              placeholder={"Your surname"}
              value={userData.lastname || ""}
              onChange={(e) =>
                setUserData((prevData) => ({
                  ...prevData,
                  lastname: e.target.value,
                }))
              }
            />
          </Label>
          {userData.errors && (
            <>
              <p>{userData.errors.firstname}</p>
              <p>{userData.errors.lastname}</p>
            </>
          )}
        </div>
      </div>

      <div className="inline-flex gap-3 mt-6 justify-center">
        <BaseButton
          className="min-w-[180px] !px-3"
          blue_color="blue_color"
          onClick={saveProfile}
        >
          Save
        </BaseButton>
        <BaseButtonOutline
          className="min-w-[180px] !px-3"
          red_color="red_color"
        >
          Delete account
        </BaseButtonOutline>
      </div>

      {openCropModal && (
        <OverflowHidden>
          <CropImageModal
            selectedFile={selectedFile}
            onSave={handleSaveImage}
            cancel={() => setOpenCropModal(false)}
          />
        </OverflowHidden>
      )}
    </div>
  );
};

export default Settings;
