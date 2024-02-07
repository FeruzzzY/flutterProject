import React from "react";

const SlidingTab = ({
  tabUnderlineLeft,
  tabUnderlineWidth,
  allTabs,
  activeTabIndex,
  setActiveTabIndex,
  tabsRef,
}) => {
  return (
    <div className="flex-row relative mx-auto inline-flex rounded-[100px] bg-gray px-1 backdrop-blur-sm">
      <span
        className="absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-[100px] py-1 transition-all duration-300"
        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      >
        <span className="h-full w-full rounded-[100px] bg-white " />
      </span>
      {allTabs.map((tab, index) => {
        const isActive = activeTabIndex === index;

        return (
          <button
            key={index}
            ref={(el) => (tabsRef.current[index] = el)}
            className={`${
              isActive ? `` : `text-grayDark`
            } my-auto cursor-pointer select-none rounded-full px-4 text-center text-xl font-semibold text-black h-12`}
            onClick={() => setActiveTabIndex(index)}
          >
            {tab.name}
          </button>
        );
      })}
    </div>
  );
};

export default SlidingTab;
