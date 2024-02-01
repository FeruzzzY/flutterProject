import { useState } from "react";
import Label from "@/components/forms/Label";

function RadioSwitcher({
  label,
  required,
  value1 = "yes",
  value2 = "no",
  title1 = "Ha",
  title2 = "Yo'q",
}) {
  const [selectedOption, setSelectedOption] = useState(value1);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const renderRadioButton = (value, title) => (
    <label>
      <input
        type="radio"
        value={value}
        checked={selectedOption === value}
        onChange={handleOptionChange}
        className="hidden"
      />
      <span
        className={`font-semibold leading-5 flex items-center justify-center h-8 px-4 rounded-lg cursor-pointer ${
          selectedOption === value
            ? "bg-dodgerBlue text-white"
            : "bg-white text-dark"
        }`}
      >
        {title}
      </span>
    </label>
  );

  return (
    <div className="items-stretch self-stretch flex flex-col">
      <Label title={label} required={required} />
      <div className="flex bg-white border border-grayOpacity06 p-1 w-full max-w-max rounded-[10px]">
        {renderRadioButton(value1, title1)}
        {renderRadioButton(value2, title2)}
      </div>
    </div>
  );
}

export default RadioSwitcher;
