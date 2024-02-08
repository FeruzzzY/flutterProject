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
import { formatBytes } from "../../../helpers/another_functions";
import { SpinnerIcon } from "../../../components/svg/SpinnerIcon";
import toastr from "toastr";

const ProblemsSubmit = ({
  detail,
  statusMy,
  getResultStatusMyPagination,
  setTab,
  getProblems,
}) => {
  // *compiler functions
  const hightlightWithLineNumbers = (input, language) =>
    highlight(input, language)
      .split("\n")
      .map((line, i) => `<span className='editorLineNumber'>${i + 1}</span>`)
      .join("\n");
  // *compiler functions

  const [compilers, setCompilers] = useState([]);
  const [activeCompiler, setActiveCompiler] = useState();
  const [codeValue, setCodeValue] = useState(``);
  const [solutionError, setSolutionError] = useState(false);
  const [open, setOpen] = useState(false);
  const [loadingLocal, setLoadingLocal] = useState(false);

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
    setLoadingLocal(true);
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
    setCodeValue(codeValue);
    if (t) {
      GetAuthInstance()
        .post(`api/v1/submit-solution`, formData)
        .then((res) => {
          toastr.success(res?.data?.msg);
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setSolutionError(false);
          setTab(4);
          getResultStatusMyPagination();
          getProblems();
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoadingLocal(false);
        });
    } else {
      setSolutionError(error);
      setLoadingLocal(false);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <TextSize20 className={solutionError ? `text-red` : ``}>
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
      {/* <ProgrammingLanDropDown
        open={open}
        toggleDropdown={toggleDropdown}
        compilers={compilers}
        activeCompiler={activeCompiler}
        chooseNewCompiler={chooseNewCompiler}
      /> */}
      <br />

      <form onSubmit={(e) => handleSolution(e)}>
        <div className="flex">
          <div className="editor_n select-none relative">
            <Editor
              value={codeValue}
              onValueChange={(code) => setCodeValue(code)}
              highlight={(code) =>
                hightlightWithLineNumbers(code, languages.js)
              }
              padding={10}
              textareaId="codeArea"
              className="editor !border-none !p-0"
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                outline: 0,
              }}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-transparent" />
          </div>
          <div className="w-full">
            <Editor
              value={codeValue}
              onValueChange={(code) => setCodeValue(code)}
              // highlight={(code) => hightlightWithLineNumbers(code, languages.js)}
              highlight={(code) => highlight(code, languages.js)}
              padding={10}
              textareaId="codeArea"
              className="editor border border-[#E8E9EB] rounded-[10px] min-h-[400px]"
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                outline: 0,
              }}
            />
          </div>
        </div>
        <div className="flex justify-center w-full mt-3 text-white">
          <button
            type="submit"
            className="p-4 rounded-[100px] bg-blue w-[261px]"
          >
            {loadingLocal ? <SpinnerIcon /> : t("problem_solve.submit")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProblemsSubmit;
