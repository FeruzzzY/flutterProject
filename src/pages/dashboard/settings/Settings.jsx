// import React, { useState } from "react";
// import { useTranslation } from "react-i18next";
// import { NavigationDashboard } from "../../../components/dashboard-layout";
// import BaseButton from "../../../components/buttons/BaseButton";
// import PlusIcon from "../../../components/icons/PlusIcon";
// import EditIcon from "../../../components/icons/EditIcon";
// import RemoveIcon from "../../../components/icons/RemoveIcon";
// import UploadDefaultIcon from "../../../components/icons/UploadDefaultIcon";
// import TextSize20 from "../../../components/texts/TextSize20";
// import CustomInput from "../../../components/forms/CustomInput";
// import Label from "../../../components/forms/Label";
// import BaseButtonOutline from "../../../components/buttons/BaseButtonOutline";
// import OverflowHidden from "../../../components/global/OverflowHidden";
// import CropImageModal from "../../../components/modals/CropImageModal";
// import DeleteModal from "../../../components/modals/DeleteModal";
// import FileInput from "../../../components/forms/FileInput";

// **************************************
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavigationDashboard } from "../../../components/dashboard-layout";
import { GetAuthInstance } from "../../../helpers/httpClient";
import BaseButton from "../../../components/buttons/BaseButton";
import UploadDefaultIcon from "../../../components/icons/UploadDefaultIcon";
import FileInput from "../../../components/forms/FileInput";
import TextSize20 from "../../../components/texts/TextSize20";
import CustomInput from "../../../components/forms/CustomInput";
import Label from "../../../components/forms/Label";
import BaseButtonOutline from "../../../components/buttons/BaseButtonOutline";
import OverflowHidden from "../../../components/global/OverflowHidden";
import CropImageModal from "../../../components/modals/CropImageModal";
import DeleteModal from "../../../components/modals/DeleteModal";
import toastr from "toastr";
import { IMG_URL } from "../../../helpers/api";

const Settings = () => {
  // const [openCropModal, setOpenCropModal] = useState(false);
  // const [openRemoveModal, setOpenRemoveModal] = useState(false);
  // const [changeColor, setChangeColor] = useState(false);
  // const [changeColor2, setChangeColor2] = useState(false);

  // const handleChangeColor = () => setChangeColor(!changeColor);
  // const handleChangeColor2 = () => setChangeColor2(!changeColor2);
  // const { t } = useTranslation();

  // const handleFileSelect = (file) => {
  //   console.log("Selected file:", file);
  //   // Do something with the selected file, like uploading it
  // };

  // ***************************************

  const [openCropModal, setOpenCropModal] = useState(false);
  const [changeColor, setChangeColor] = useState(false);
  const [loading, setLoading] = useState(true);
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [profileData, setProfileData] = useState({
    firstname: "",
    lastname: "",
    middlename: "",
    bio: "",
    avatar: null,
  });
  const [avatarUrl, setAvatarUrl] = useState("");

  const { t } = useTranslation();

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileResponse = await GetAuthInstance().get(
          "api/v1/profil/get"
        );
        const regionResponse = await GetAuthInstance().get(
          "api/v1/profil/regions"
        );

        setProfileData(profileResponse.data.data);

        if (profileResponse.data.data.avatar) {
          setAvatarUrl(profileResponse.data.data.avatar);
        }

        setRegions(regionResponse.data.data);
        setLoading(false);

        if (profileResponse.data.data.region_id) {
          setSelectedRegion(profileResponse.data.data.region_id);
        }
        if (profileResponse.data.data.city_id) {
          setSelectedCity(profileResponse.data.data.city_id);
        }
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedRegion) {
      getCity(selectedRegion);
    }
  }, [selectedRegion]);

  const getCity = async (r_id) => {
    try {
      const response = await GetAuthInstance().get(
        `api/v1/profil/regions/?parent_id=${r_id}`
      );
      setCities(response.data.data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const handleChangeColor = () => setChangeColor(!changeColor);

  const handleFileSelect = (file) => {
    console.log("Selected file:", file);
    setProfileData({ ...profileData, avatar: file });
    setAvatarUrl(URL.createObjectURL(file));
  };

  const handleSaveProfile = () => {
    setLoading(true);

    if (profileData.firstname.trim() === "") {
      setLoading(false);
      toastr.error("Name cannot be empty!");
      return;
    }

    const formData = new FormData();
    formData.append("firstname", profileData.firstname);
    formData.append("middlename", profileData.middlename);
    formData.append("bio", profileData.bio);
    formData.append("avatar", profileData.avatar);
    formData.append("lastname", profileData.lastname || "");
    formData.append("region_id", selectedRegion);
    formData.append("city_id", selectedCity);

    GetAuthInstance()
      .post("api/v1/profil/update", formData)
      .then((response) => {
        setLoading(false);
        toastr.success("Profile updated successfully!");
      })
      .catch((error) => {
        toastr.error("Error updating profile.");
        setLoading(false);
      });
  };
  return (
    <div>
      {/* <NavigationDashboard title={t("sidebar_links.settings")} />
      <div className="lg:mt-[90px] mt-[60px] py-5 px-3.5">
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
          <BaseButtonOutline
            className="min-w-[180px] !px-3"
            red_color="red_color"
          >
            Delate account
          </BaseButtonOutline>
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
      ) : null} */}

      {/* ****************************************** */}
      <div>
        <NavigationDashboard title={t("sidebar_links.settings")} />
        <div className="lg:mt-[90px] mt-[60px] py-5 px-3.5">
          <div className="flex flex-col p-6 bg-white rounded-2xl border border-solid border-gray md:max-w-[760px] max-w-full max-md:px-5">
            <TextSize20>Profile information</TextSize20>
            <div className="inline-flex md:flex-row flex-col gap-4 justify-center items-center md:self-start self-auto mt-6">
              <div className="flex justify-center items-center w-[100px] h-[100px] rounded-full overflow-hidden">
                {avatarUrl ? (
                  <img src={IMG_URL + avatarUrl} alt="Avatar" />
                ) : (
                  <UploadDefaultIcon />
                )}
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
                  Edit
                </BaseButtonOutline>
              </div>
            </div>
            <br />
            <Label title="Name" className="relative select-none">
              <CustomInput
                placeholder={"Your name"}
                value={profileData.firstname}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    firstname: capitalizeFirstLetter(e.target.value),
                  })
                }
              />
            </Label>
            <br />
            <Label title="Lastname" className="relative select-none">
              <CustomInput
                placeholder={"Your surname"}
                value={profileData.lastname}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    lastname: capitalizeFirstLetter(e.target.value),
                  })
                }
              />
            </Label>
            <br />
            <Label title="Middlename" className="relative select-none">
              <CustomInput
                placeholder={"Your middlename"}
                value={profileData.middlename}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    middlename: capitalizeFirstLetter(e.target.value),
                  })
                }
              />
            </Label>
            <br />
            <Label title="Region" className="relative select-none">
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="border border-solid border-gray p-2 rounded-md w-full"
              >
                <option value="" disabled>
                  Select Region
                </option>
                {regions.map((region) => (
                  <option key={region.id} value={region.id}>
                    {region.name}
                  </option>
                ))}
              </select>
            </Label>
            <br />
            {selectedRegion && (
              <div className="bred">
                <Label title="City" className="relative select-none">
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="border border-solid border-gray p-2 rounded-md w-full"
                  >
                    <option value="" disabled>
                      Select City
                    </option>
                    {cities.map((city) => (
                      <option key={city.id} value={city.id}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </Label>
              </div>
            )}
            <Label title="Bio" className="relative select-none">
              <textarea
                placeholder={"Your bio"}
                className="bio"
                value={profileData.bio}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    bio: capitalizeFirstLetter(e.target.value),
                  })
                }
              ></textarea>
            </Label>
          </div>
          {loading ? (
            <section class="dots-container">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </section>
          ) : (
            <div className="inline-flex gap-3 mt-6">
              <BaseButton
                className="min-w-[180px] !px-3"
                blue_color="blue_color"
                onClick={handleSaveProfile}
              >
                Save
              </BaseButton>
            </div>
          )}
        </div>

        {openCropModal ? (
          <OverflowHidden>
            <CropImageModal cancel={() => setOpenCropModal(false)} />
          </OverflowHidden>
        ) : null}
      </div>
    </div>
  );
};

export default Settings;
