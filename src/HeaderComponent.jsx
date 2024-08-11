import React from "react";
import Date from "./Date";

function HeaderComponent() {
  return (
    <div className="bg-header-cube bg-no-repeat pl-44 mx-20 h-40">
      <Date />
      <div className="bg-header-logo bg-right-center bg-red-600 h-10 mt-6 bg-no-repeat"></div>
    </div>
  );
}

export default HeaderComponent;
