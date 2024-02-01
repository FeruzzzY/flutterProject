import React, { useState } from "react";

const Switcher = (props) => {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex items-center justify-center">
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio"
          name="option"
          value="option1"
          checked={selectedOption === "option1"}
          onChange={handleOptionChange}
        />
        <span className="ml-2">Option 1</span>
      </label>
      <label className="inline-flex items-center ml-6">
        <input
          type="radio"
          className="form-radio"
          name="option"
          value="option2"
          checked={selectedOption === "option2"}
          onChange={handleOptionChange}
        />
        <span className="ml-2">Option 2</span>
      </label>
    </div>
  );
};

export default Switcher;
