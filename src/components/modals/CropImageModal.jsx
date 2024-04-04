import React, { useRef, useState } from "react";
import TextSize18 from "../texts/TextSize18";
import BaseButton from "../buttons/BaseButton";
import CloseIcon from "../icons/CloseIcon";
import { useTranslation } from "react-i18next";
import BaseButtonOutline from "../buttons/BaseButtonOutline";

const CropImageModal = ({ selectedFile, cancel, onSave }) => {
  const { t } = useTranslation();
  const [cropValue, setCropValue] = useState(50);
  const imageRef = useRef(null);

  const handleSave = () => {
    const canvas = document.createElement("canvas");
    canvas.width = imageRef.current.width;
    canvas.height = imageRef.current.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(imageRef.current, 0, 0);
    const croppedImage = canvas.toDataURL("image/jpeg");

    onSave(croppedImage);
  };

  const handleSliderChange = (e) => {
    setCropValue(e.target.value);
  };

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
              <CloseIcon onClick={cancel} className="cursor-pointer" />
            </div>
            <img
              ref={imageRef}
              src={URL.createObjectURL(selectedFile)}
              alt="Selected Image"
              className="max-w-full max-h-[400px] mb-4"
            />
            <div className="mb-4">
              <label
                htmlFor="crop-slider"
                className="block text-sm font-medium text-gray-700"
              >
                Crop Size
              </label>
              <div className="mt-1 flex items-center space-x-4">
                <input
                  type="range"
                  id="crop-slider"
                  min="0"
                  max="100"
                  value={cropValue}
                  onChange={handleSliderChange}
                  className="flex-grow w-full rounded-lg bg-blue-500 appearance-none focus:outline-none focus:ring-0"
                />
                <span className="text-sm font-medium text-gray-500">
                  {cropValue}%
                </span>
              </div>
            </div>
            <div className="flex gap-3 mt-6 justify-center">
              <BaseButton
                blue_color="blue_color"
                type="button"
                className="!py-2.5 w-[120px]"
                onClick={handleSave}
              >
                {t("save")}
              </BaseButton>
              <BaseButtonOutline
                blue_color="blue_color"
                className="!py-2.5 w-[120px]"
                onClick={cancel}
                type="button"
              >
                {t("login.cancel")}
              </BaseButtonOutline>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropImageModal;
