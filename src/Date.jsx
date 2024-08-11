import React from "react";
import jalaali from "jalaali-js";

const MyDateComponent = () => {
  const today = new Date();
  const jalaliDate = jalaali.toJalaali(
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate()
  );

  return (
    <div className="text-left">
      {jalaliDate.jy}/{jalaliDate.jm}/{jalaliDate.jd}
    </div>
  );
};

export default MyDateComponent;
