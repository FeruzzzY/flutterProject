import React, { useState } from "react";
import CustomAccardion from "../../forms/CustomAccardion";
import TextSize60 from "../../texts/TextSize60";
import TextSize18 from "../../texts/TextSize18";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: "Can I enroll in multiple courses at once?",
      content:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
    {
      title: "What kind of support can I expect from instructors?",
      content:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
    {
      title:
        "Are the courses self-paced or do they have specific start and end dates?",
      content:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
    {
      title: "Are there any prerequisites for the courses?",
      content:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
  ];
  return (
    <div
      className="md:max-w-[867px] md:px-0 px-4  w-full mx-auto flex flex-col gap-7 md:pt-[100px] pt-[60px] md:mb-[150px] mb-[40px]"
      id="faq"
    >
      <TextSize60 className="text-center">
        Frequently Asked Questions
      </TextSize60>
      <TextSize18 className="text-center text-grayDark md:!px-36 px-0 md:mb-7 mb-1">
        Still you have any questions? Contact our Team via exadothelpme95.com
      </TextSize18>
      {accordionItems.map((item, index) => (
        <div key={index}>
          <CustomAccardion
            index={index}
            item={item}
            activeIndex={activeIndex}
            toggleAccordion={toggleAccordion}
          />
        </div>
      ))}
    </div>
  );
};

export default Faq;
