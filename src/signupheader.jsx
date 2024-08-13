import React from "react";

function SignUpHeader() {
  return (
    <>
      <div className="bg-slate-100 h-10 border-b-2 border-red-700 sm:w-full shadow-slate-500/50"></div>
      <div
        className="bg-header-logo bg-center bg-no-repeat text-center bg-white bg-right-center h-20 hidden md:block sm:hidden"
        style={{
          boxShadow: "rgb(209, 209, 209) 0px 2px 5px",
        }}
      ></div>
    </>
  );
}

export default SignUpHeader;
