import React from "react";
import LoginForm from "./LoginForm";
import Success from "./success";
import SignUp from "./signup";
import moment from "moment-jalaali";
import { Routes, Route } from "react-router-dom";

moment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

function App() {
  return (
    <div className="appForm pt-10">
      <Routes>
        <Route path="" element={<LoginForm />} />
        <Route path="/success" element={<Success />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
