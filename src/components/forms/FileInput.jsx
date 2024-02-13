// FileInput.js
import React, { useRef } from "react";
import BaseButton from "../buttons/BaseButton";
import PlusIcon from "../icons/PlusIcon";

const FileInput = ({ onFileSelect }) => {
  const fileInputRef = useRef(null);

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onFileSelect(file);
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
      <BaseButton
        className="gap-3 items-center sm:!w-[246px] w-full"
        blue_color="blue_color"
        onClick={handleFileSelect}
      >
        <PlusIcon /> <span>Upload new picture</span>
      </BaseButton>
    </>
  );
};

export default FileInput;
