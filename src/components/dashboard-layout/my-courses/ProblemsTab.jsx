import React from "react";
import { formatBytes } from "../../../helpers/another_functions";
import CustomInput from "../../../components/forms/CustomInput";
import Label from "../../../components/forms/Label";
import { CloneIcon } from "../../../components/icons";
import TextSize20 from "../../texts/TextSize20";

const ProblemsTab = ({ detail }) => {
  return (
    <>
      <TextSize20>
        {detail?.id}.{detail?.title}
      </TextSize20>
      <div className=" mt-2 pb-4 border-b border-b-gray">
        <p className="text-xs font-medium text-black">
          <span className="text-grayDark">Time limit: </span>:{" "}
          {detail?.time_limit ? detail?.time_limit + " ms" : "-"}
        </p>
        <p className="text-xs font-medium text-black">
          <span className="text-grayDark">Memory limit: </span>:{" "}
          {detail?.memory_limit ? formatBytes(detail?.memory_limit) : "-"}
        </p>{" "}
      </div>
      <div
        className="dangerouslySetInnerHTML mt-2 pb-4 border-b border-b-gray"
        dangerouslySetInnerHTML={{ __html: detail?.body }}
      />
      <div className="mt-2 pb-4 border-b border-b-gray">
        <p className="text-base text-black font-semibold mb-2">Incoming data</p>
        <div
          className="dangerouslySetInnerHTML"
          dangerouslySetInnerHTML={{ __html: detail?.input_type }}
        />
      </div>
      <div className="mt-2 pb-4 border-b border-b-gray">
        <p className="text-base text-black font-semibold mb-2">Outgoing data</p>
        <div
          className="dangerouslySetInnerHTML"
          dangerouslySetInnerHTML={{ __html: detail?.output_type }}
        />
      </div>
      {detail?.test_case
        ? detail?.test_case.map((item, index) => {
            const { sample_input, sample_output } = item;
            return (
              <div
                className="flex flex-col gap-3 mt-3 pb-4 border-b border-b-gray last-of-type:border-b-0"
                key={index}
              >
                <Label title="Input" className="relative select-none">
                  <CustomInput
                    placeholder="Input value"
                    value={sample_input}
                    className="pr-11 select-none"
                    disabled
                  />
                  <CloneIcon className="absolute top-10 right-3" />
                </Label>
                <Label title="Output" className="relative select-none">
                  <CustomInput
                    placeholder="Output value"
                    value={sample_output}
                    className="pr-11 select-none"
                    disabled
                  />
                  <CloneIcon className="absolute top-10 right-3" />
                </Label>
              </div>
            );
          })
        : null}
    </>
  );
};

export default ProblemsTab;
