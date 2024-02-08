import React from "react";
import { formatBytes } from "../../../helpers/another_functions";
import CustomInput from "../../../components/forms/CustomInput";
import Label from "../../../components/forms/Label";
import { CloneIcon } from "../../../components/icons";
import TextSize20 from "../../texts/TextSize20";
import { useTranslation } from "react-i18next";
import toastr from "toastr";

const ProblemsTab = ({ detail }) => {
  const { t } = useTranslation();
  const handleCopyInput = (val) => {
    navigator.clipboard
      .writeText(val)
      .then(() => {
        toastr.success(t("problem_solve.input_copied_clipboard"));
      })
      .catch((error) => {});
  };

  const handleCopyOutPut = (val) => {
    navigator.clipboard
      .writeText(val)
      .then(() => {
        toastr.success(t("problem_solve.output_copied_clipboard"));
      })
      .catch((error) => {});
  };
  return (
    <>
      <TextSize20>
        {detail?.id}.{detail?.title}
      </TextSize20>
      <div className=" mt-2 pb-4 border-b border-b-gray">
        <p className="text-xs font-medium text-black">
          <span className="text-grayDark">
            {t("problem_solve.time_limit")}:{" "}
          </span>
          : {detail?.time_limit ? detail?.time_limit + " ms" : "-"}
        </p>
        <p className="text-xs font-medium text-black">
          <span className="text-grayDark">
            {t("problem_solve.memory_limit")}:{" "}
          </span>
          : {detail?.memory_limit ? formatBytes(detail?.memory_limit) : "-"}
        </p>{" "}
      </div>
      <div
        className="dangerouslySetInnerHTML mt-2 pb-4 border-b border-b-gray"
        dangerouslySetInnerHTML={{ __html: detail?.body }}
      />
      <div className="mt-2 pb-4 border-b border-b-gray">
        <p className="text-base text-black font-semibold mb-2">
          {t("problem_solve.incoming_data")}
        </p>
        <div
          className="dangerouslySetInnerHTML"
          dangerouslySetInnerHTML={{ __html: detail?.input_type }}
        />
      </div>
      <div className="mt-2 pb-4 border-b border-b-gray">
        <p className="text-base text-black font-semibold mb-2">
          {t("problem_solve.outgoing_data")}
        </p>
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
                    placeholder={t("problem_solve.input_value")}
                    value={sample_input}
                    className="pr-11 select-none"
                    disabled
                  />
                  <span onClick={() => handleCopyInput(sample_input)}>
                    <CloneIcon className="absolute top-10 right-3" />
                  </span>
                </Label>
                <Label title="Output" className="relative select-none">
                  <CustomInput
                    placeholder={t("problem_solve.output_value")}
                    value={sample_output}
                    className="pr-11 select-none"
                    disabled
                  />

                  <span onClick={() => handleCopyOutPut(sample_output)}>
                    <CloneIcon className="absolute top-10 right-3" />
                  </span>
                </Label>
              </div>
            );
          })
        : null}
    </>
  );
};

export default ProblemsTab;
