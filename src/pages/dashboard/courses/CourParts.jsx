import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetAuthInstance } from "../../../helpers/httpClient";
import { Link } from "react-router-dom";
import CardRounded16 from "../../../components/cards/CardRounded16";
import { BsJournalRichtext } from "react-icons/bs";
import { TiPlus } from "react-icons/ti";
import { FaMinus } from "react-icons/fa";

const CourPart = () => {
  const { slug } = useParams();
  const [sectionData, setSectionData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    getData(slug);
  }, [slug]);

  const getData = (slug) => {
    GetAuthInstance()
      .get(`/api/v1/course/sections?slug=${slug}`)
      .then((res) => {
        setSectionData(res.data.data);
      });
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      CourPart desc
      {/* <div className="gap-5 flex lg:mt-[90px] mt-[10px] p-3.5 pt-[1px]">
        <div className="w-[100%] h-[100%]">
          {sectionData.map((item, index) => {
            return (
              <CardRounded16
                key={index}
                className="w-[100%] h-[100%] select-none"
              >
                <Accordion allowToggle>
                  <AccordionItem>
                    <h2>
                      <AccordionButton onClick={() => toggleAccordion(index)}>
                        <Box
                          className="ext-base md:text-xl font-bold text-black undefined"
                          as="span"
                          flex="1"
                          textAlign="left"
                        >
                          {item.name}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className=" mt-[10px]" pb={4}>
                      {item.description}
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </CardRounded16>
            );
          })}
        </div>

        <CardRounded16 className="w-[50%] h-[100%]">
          <p className="flex justify-between items-center md:pb-4 pb-2  text-sm md:text-xl font-bold text-black md:cursor-auto cursor-pointer">
            Course program
          </p>
          {sectionData.map((item, index) => {
            return (
              <div key={index}>
                <Accordion
                  defaultIndex={[0]}
                  className="mt-[15px]"
                  allowMultiple
                >
                  <AccordionItem>
                    <h2>
                      <AccordionButton onClick={() => toggleAccordion(index)}>
                        <Box
                          className="ext-base md:text-xl font-bold text-black undefined"
                          as="span"
                          flex="1"
                          textAlign="left"
                        >
                          {item.name}
                        </Box>
                        {activeIndex === index ? <TiPlus /> : <FaMinus />}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel className="mt-[10px] ml-10 -mt-0.3" pb={4}>
                      {item.childs && item.childs.length > 0 && (
                        <Accordion allowToggle>
                          {item.childs.map((childItem, childIndex) => (
                            <AccordionItem key={childIndex}>
                              <h2>
                                <AccordionButton>
                                  <Box as="span" flex="1" textAlign="left">
                                    <Link
                                      to={`/dashboard/courses/${slug}/${childItem.slug}`}
                                    >
                                      <div className="flex align-centre justify-centre gap-2">
                                        <BsJournalRichtext />
                                        {childItem.name}
                                      </div>
                                    </Link>
                                  </Box>
                                </AccordionButton>
                              </h2>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      )}
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            );
          })}
        </CardRounded16>
      </div> */}
    </div>
  );
};

export default CourPart;
