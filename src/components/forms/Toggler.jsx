import { useState } from "react";

const Toggler = ({ label, onToggle, required }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    onToggle(!isChecked);
  };

  return (
    <div className="flex items-center">
      <label htmlFor={label} className="flex flex-col cursor-pointer">
        <div className="text-gray-700 font-medium">
          {required && <span className="text-red-500">*</span>}
          {label}
        </div>
        <div className="relative">
          <input
            id={label}
            type="checkbox"
            className="sr-only"
            checked={isChecked}
            onChange={handleToggle}
          />
          <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
          <div
            className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
              isChecked ? "transform translate-x-full bg-green-500" : ""
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default Toggler;
