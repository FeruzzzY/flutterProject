import React, { useState } from "react";
import TextSize20 from "../../texts/TextSize20";
import CustomTextarea from "../../forms/CustomTextarea";
import { setLoading } from "../../../redux";
import { useDispatch } from "react-redux";
import { GetAuthInstance } from "../../../helpers/httpClient";
import { Dropdown } from "flowbite-react";

const ProblemsSubmit = ({ detail }) => {
  const [solution, setSolution] = useState("");
  const [solutionError, setSolutionError] = useState(false);

  const dispatch = useDispatch();
  const changeSolution = (e) => {
    if (e.target.value) {
      setSolutionError(false);
    } else {
      setSolutionError(true);
    }
    return setSolution(<pre>{e.target.value}</pre>);
  };

  console.log(detail);

  const handleSolution = (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    let t = true,
      error = false;
    if (!solution) {
      t = false;
      error = true;
    }

    const formData = new FormData();
    // formData.append("content", get(obj, "content", ""));
    // formData.append("review", rate === null ? 0 : rate);
    // formData.append("craft", Number(craft?.id));
    if (t) {
      GetAuthInstance()
        .post(`api/v1/submit-solution`)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {})
        .finally(() => {
          dispatch(setLoading(false));
        });
    } else {
      setSolutionError(error);
      dispatch(setLoading(false));
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <br />
      <TextSize20 className={`${solutionError === true ? "text-red" : ""}`}>
        Problem solution
      </TextSize20>

      <br />
      <form onSubmit={(e) => handleSolution(e)}>
        <CustomTextarea
          name="solution"
          onChange={(e) => changeSolution(e)}
          rows={22}
        />
        <div className="flex justify-center w-full mt-3 text-white">
          <button
            type="submit"
            className="p-4 rounded-[100px] bg-blue w-[261px]"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ProblemsSubmit;
