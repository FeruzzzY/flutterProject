import React, { useEffect, useState } from "react";
import TextSize20 from "../../texts/TextSize20";
import CustomTextarea from "../../forms/CustomTextarea";
import { setLoading } from "../../../redux";
import { useDispatch } from "react-redux";
import { GetAuthInstance } from "../../../helpers/httpClient";
import { useTranslation } from "react-i18next";
import ProgrammingLanDropDown from "../../global/ProgrammingLanDropDown";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { formatBytes } from "../../../helpers/another_functions";

const ProblemsSubmit = ({ detail, statusMy, getResultStatusMyPagination }) => {
  // *compiler functions
  const hightlightWithLineNumbers = (input, language) =>
    highlight(input, language)
      .split("\n")
      .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
      .join("\n");
  // *compiler functions

  const [compilers, setCompilers] = useState([]);
  const [activeCompiler, setActiveCompiler] = useState();
  const [codeValue, setCodeValue] = useState(``);
  const [solutionError, setSolutionError] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);

  const chooseNewCompiler = (id) => {
    let f = compilers?.filter((e) => e?.id === id);
    let fMy = statusMy?.filter((e) => e?.compiler_id === f[0]?.id);
    setActiveCompiler(f[0]);
    setCodeValue(fMy?.length > 0 ? fMy[0]?.source : ``);
  };

  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    getCompilers();

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [i18n.language]);

  const getCompilers = () => {
    dispatch(setLoading(true));
    GetAuthInstance()
      .get(`api/v1/compilers`)
      .then((res) => {
        let data = res?.data?.data;
        let compilerActive = data?.find((e) => e?.display_name === "Dart");

        if (compilerActive !== undefined) {
          setActiveCompiler(compilerActive);
        } else {
          setActiveCompiler(data?.[0]);
        }
        let fMy = statusMy?.filter(
          (e) => e?.compiler_id === compilerActive?.id
        );

        setCompilers(data);
        setCodeValue(fMy?.length > 0 ? fMy[0]?.source : ``);
      })
      .catch((error) => {})
      .finally(() => {
        dispatch(setLoading(false));
      });
  };

  const handleSolution = (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    let t = true,
      error = false;
    if (!codeValue) {
      t = false;
      error = true;
    }

    const formData = new FormData();
    formData.append("compiler_id", activeCompiler?.id);
    formData.append("problem_id", detail?.id);
    formData.append("contest_slug", "contest-test-dart");
    formData.append("solution", `${codeValue}`);
    if (t) {
      GetAuthInstance()
        .post(`api/v1/submit-solution`, formData)
        .then((res) => {
          toast.success(res?.data?.msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          getResultStatusMyPagination();
        })
        .catch((error) => {
          console.log(error);
        })
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
    <div className="pb-16">
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
      <ProgrammingLanDropDown
        open={open}
        toggleDropdown={toggleDropdown}
        compilers={compilers}
        activeCompiler={activeCompiler}
        chooseNewCompiler={chooseNewCompiler}
      />
      <br />
      <form onSubmit={(e) => handleSolution(e)}>
        <Editor
          value={codeValue}
          onValueChange={(code) => setCodeValue(code)}
          highlight={(code) => hightlightWithLineNumbers(code, languages.js)}
          padding={10}
          textareaId="codeArea"
          className="editor border border-[#E8E9EB] rounded-[10px] min-h-[400px]"
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 16,
            outline: 0,
          }}
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
    </div>
  );
};

export default ProblemsSubmit;
