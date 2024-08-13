import React from "react";
import Date from "./Date";

function HeaderComponent() {
  return (
    <div className="bg-header-cube bg-no-repeat pl-44 mx-20 h-40 hidden md:block sm:hidden">
      <Date />
      <div className="bg-header-logo bg-right-center bg-red-600 h-10 mt-6 bg-no-repeat sm:w-full"></div>
    </div>
  );
}

export default HeaderComponent;
