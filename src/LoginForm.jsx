import React, { useState } from "react";
import axios from "axios";
import Footer from "./footer";
import HeaderComponent from "./HeaderComponent";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://7257ab76-c596-478b-9f9d-5d639b0e7dd9.mock.pstmn.io/login",
        {
          username,
          password,
        }
      );

      if (response.data.success) {
        setError("");
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      setError("An error occurred while trying to log in");
      console.error(error);
    }
  };

  return (
    <>
      <HeaderComponent />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div>
          <h2 className="bg-red-700 p-1 rounded-t-lg mt-10 text-center text-lg leading-9 tracking-tight text-white sm:mx-auto sm:w-full sm:max-w-xs">
            سامانه اینترنت بانک شهر
          </h2>
        </div>
        <div
          className="bg-white p-10 rounded-lg sm:mx-auto sm:w-full sm:max-w-sm"
          style={{
            boxShadow: "rgb(209, 209, 209) 0px 2px 5px",
          }}
        >
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              ></label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder="نام کاربری"
                  className="block w-full rounded-md text-right pr-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              ></label>
              <div className="mt-2">
                <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 text-right pr-3 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="رمز عبور"
                />
              </div>
            </div>
            <div className="dir-rtl">
              <label
                htmlFor="dropdown"
                className="block text-sm font-medium leading-6 text-gray-900"
              ></label>
              <select className="block w-full rounded-md border-0 py-1.5 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 text-right pr-3 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <option value="">رمز ایستا</option>
                <option value="">رمز یکبار مصرف</option>
              </select>
            </div>
            <div>
              <button
                className="flex justify-center rounded-md bg-red-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                type="submit"
              >
                ورود
              </button>
            </div>
            {error && <p>{error}</p>}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Login;
