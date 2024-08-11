import React from "react";
import LoginForm from "./LoginForm";
import moment from "moment-jalaali";

moment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });
function App() {
  return (
    <div className="appForm pt-10">
      <LoginForm />
    </div>
  );
}

export default App;
