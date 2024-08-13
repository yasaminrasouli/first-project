import React from "react";
import { Link, useLocation } from "react-router-dom";
import SignUpHeader from "./signupheader";

function SignUp() {
  const location = useLocation();
  const state = location.state || {};
  const message = state.message;
  return (
    <>
      <SignUpHeader />
      <div className="max-w-xl m-auto">
        <Link to="/" className="flex justify-between items-center mb-2 mt-10">
          {message === "ثبت نام در اینترنت بانک" ? (
            <span>ثبت نام</span>
          ) : (
            <span>فراموشی رمز عبور</span>
          )}
          <button className="border-solid border-2 border-red-700 text-sm text-gray-700 rounded-md p-2">
            بازگشت به اینترنت بانک
          </button>
        </Link>
        <div className="flex justify-center min-h-full flex-1 flex-col bg-slate-100">
          <div className="flex flex-col items-center mt-10">
            <span className="mb-2">{message}</span>
            <span>یکی از درگاه‌های خدمات بانکی را انتخاب کنید.</span>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-red-700 text-white m-10 p-2 rounded-md">
              اینترنت بانک
            </button>
            <button className="bg-red-700 text-white p-2 rounded-md">
              {" "}
              همراه شهر پلاس
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
