import React, { useEffect, useState } from "react";
import Label from "../../../components/forms/Label";
import CustomInput from "../../../components/forms/CustomInput";
import CustomCheckbox from "../../../components/forms/CustomCheckbox";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { GetAuthInstance } from "../../../helpers/httpClient";
import { useDispatch } from "react-redux";
import { issetToken, setToken } from "../../../helpers/tokenStorage";
import { Link, useNavigate } from "react-router-dom";
import { setLoading } from "../../../redux";
import { useTranslation } from "react-i18next";
import BaseButton from "../../../components/buttons/BaseButton";
import { SpinnerIcon } from "../../../components/svg/SpinnerIcon";
import toastr from "toastr";
import { BrandIcon } from "../../../components/svg/BrandIcon";

const Login = () => {
  const [obj, setObj] = useState({});
  const [objE, setObjE] = useState({});
  const [showPassword, setShowPassword] = useState(true);
  const [loadingLocal, setLoadingLocal] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { t } = useTranslation();

  const changeInput = (event) => {
    setObj({ ...obj, [event.target.name]: event.target.value });
    setObjE({ ...objE, [event.target.name]: false, common: false });
  };

  const submitLogin = (e) => {
    e.preventDefault();
    setLoadingLocal(true);
    let tt = true,
      err = {};
    if (!obj?.name) {
      tt = false;
      err = { ...err, name: true };
    }
    if (!obj?.password) {
      tt = false;
      err = { ...err, password: true };
    }
    if (tt) {
      GetAuthInstance()
        .post("api/v1/login", obj)
        .then((res) => {
          const token = res?.data?.access_token ?? "";
          setToken(token);
          localStorage.setItem("token", token);
          navigate("/");
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          toastr.success(t("login.success_login"));
        })
        .catch((error) => {
          if (error?.response?.status === 401) {
            toastr.error(t("login.error_logging_in"));
          }
        })
        .finally(() => {
          setLoadingLocal(false);
        });
    } else {
      setObjE(err);
      setLoadingLocal(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="flex gap-3 select-none lg:h-full h-svh bg-white">
      <div className="lg:w-[50%] w-full lg:mt-0 mt-6 lg:mb-0 mb-6 p-4 flex items-center justify-center">
        <div>
          <div className="flex justify-center">
            <Link to="/" className="inline-block">
              <BrandIcon className="w-[150px] h-[70px]" />
            </Link>
          </div>
          <p className="text-xl font-medium text-black text-center mt-3">
            {t("login.login_welcome")}
          </p>
          <form onSubmit={submitLogin} className="flex flex-col gap-6 mt-3">
            <Label title="Login">
              <CustomInput
                placeholder={t("login.enter_your_login")}
                name="name"
                value={obj?.name || ""}
                onChange={changeInput}
              />

              {objE.name ? (
                <div className="text-red">{t("login.enter_login")}</div>
              ) : (
                ""
              )}
            </Label>
            <Label title="Password" className="relative">
              <CustomInput
                type={showPassword ? "password" : "text"}
                className="pr-[40px]"
                placeholder={t("login.enter_your_password")}
                name="password"
                value={obj?.password || ""}
                onChange={changeInput}
              />
              {objE.password ? (
                <div className="text-red">{t("login.enter_password")}</div>
              ) : (
                ""
              )}
              <div className="flex justify-end w-full mt-3">
                <span className="cursor-pointer">
                  {t("login.forgot_password")}
                </span>
              </div>
              <div className="absolute top-[40px] right-3 z-10">
                {showPassword ? (
                  <IoEyeOutline
                    onClick={() => setShowPassword(false)}
                    size="20"
                  />
                ) : (
                  <IoEyeOffOutline
                    onClick={() => setShowPassword(true)}
                    size="20"
                  />
                )}
              </div>
            </Label>
            <CustomCheckbox label={t("login.remember_me")} />
            <BaseButton
              blue_color="blue_color"
              className="w-full"
              type="submit"
            >
              {loadingLocal ? <SpinnerIcon /> : t("login.login_title")}
            </BaseButton>
          </form>
        </div>
      </div>
      <img
        src="/images/login_bg.png"
        className="lg:w-[50%] w-full lg:block hidden h-svh object-cover"
        alt=""
      />
    </div>
  );
};

export default Login;
