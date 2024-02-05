import React, { useState } from "react";
import Label from "../../../components/forms/Label";
import CustomInput from "../../../components/forms/CustomInput";
import CustomCheckbox from "../../../components/forms/CustomCheckbox";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { GetAuthInstance } from "../../../helpers/httpClient";
import { useDispatch } from "react-redux";
import { setToken } from "../../../helpers/tokenStorage";
import { useNavigate } from "react-router-dom";
import { setLoading } from "../../../redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [obj, setObj] = useState({});
  const [objE, setObjE] = useState({});
  const [showPassword, setShowPassword] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeInput = (event) => {
    setObj({ ...obj, [event.target.name]: event.target.value });
    setObjE({ ...objE, [event.target.name]: false, common: false });
  };

  const submitLogin = (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    let t = true,
      err = {};
    if (!obj?.name) {
      t = false;
      err = { ...err, name: true };
    }
    if (!obj?.password) {
      t = false;
      err = { ...err, password: true };
    }
    if (t) {
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
          toast.success("Login successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        })
        .catch((error) => {
          if (error.response.status === 401) {
            toast.error("Error logging in ", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        })
        .finally(() => {
          dispatch(setLoading(false));
        });
    } else {
      console.log("err", err);
      setObjE(err);
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="flex gap-3 select-none lg:h-full h-svh bg-white">
      <div className="lg:w-[50%] w-full lg:mt-0 mt-6 lg:mb-0 mb-6 p-4 flex items-center justify-center">
        <div>
          <p className="text-2xl lg:text-4xl font-bold text-black text-center">
            Login
          </p>
          <p className="text-xl font-medium text-black text-center mt-3">
            Welcome back! Please log in to access your account.
          </p>
          <form onSubmit={submitLogin} className="flex flex-col gap-6 mt-3">
            <Label title="Login">
              <CustomInput
                placeholder="Enter your login"
                name="name"
                value={obj?.name}
                onChange={changeInput}
              />

              {objE.name ? <div className="text-red">Enter login</div> : ""}
            </Label>
            <Label title="Password" className="relative">
              <CustomInput
                type={showPassword ? "password" : "text"}
                className="pr-[40px]"
                placeholder="Enter your password"
                name="password"
                value={obj?.password}
                onChange={changeInput}
              />
              {objE.password ? (
                <div className="text-red">Enter password</div>
              ) : (
                ""
              )}
              <div className="flex justify-end w-full mt-3">
                <span className="cursor-pointer">Forgot Password?</span>
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
            <CustomCheckbox label="Remember Me" />
            <button
              type="submit"
              className="bg-dodgerBlue w-full p-4 rounded-[100px] border-none duration-200 text-base
             font-semibold text-white hover:shadow-blueShadow"
            >
              Login
            </button>
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
