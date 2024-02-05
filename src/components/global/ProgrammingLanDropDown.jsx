import React from "react";

const ProgrammingLanDropDown = ({
  open,
  toggleDropdown,
  compilers,
  activeCompiler,
  chooseNewCompiler,
}) => {
  return (
    <div
      onClick={() => toggleDropdown()}
      // onBlur={()=>toggleDropdown()}
      // onFocus={()=>toggleDropdown()}
      tabIndex="0"
      className="relative inline-flex my-2 z-9999"
    >
      <div
        className="flex items-center cursor bg-[#0000000f] px-2 py-1 rounded-lg cursor-pointer select-none"
        onClick={() => toggleDropdown()}
      >
        <span className="mr-1">{activeCompiler?.display_name}</span>
        <svg
          className={
            open ? "-rotate-180 duration-200" : "rotate-0 duration-200"
          }
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.33366 6.66602L8.00033 9.33268L10.667 6.66602"
            stroke="#8989A1"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {open && (
        <div className="absolute top-[30px] left-[0] w-auto text-left text-base font-medium bg-white border border-[#eaeaee] rounded-xl overflow-hidden">
          <div
            className="inline-flex flex-col 
            overflow-y-auto overflow-x-hidden max-h-[180px] w-[130px]
           "
          >
            {compilers?.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`py-1 px-4 cursor-pointer 
                  ${
                    activeCompiler?.display_name === item?.display_name
                      ? "text-dodgerBlue"
                      : "text-black"
                  } hover:text-dodgerBlue`}
                  onClick={() => {
                    toggleDropdown();
                    chooseNewCompiler(item?.id);
                  }}
                >
                  {item?.display_name}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgrammingLanDropDown;
