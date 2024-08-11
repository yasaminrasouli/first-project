import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        setIsLoggedIn(true);
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
    <div className="bg-slate-400">
      <div>
        <h2 className="text-red-950">Sign in to your account</h2>
      </div>
      <div>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username"></label>
            <div>
              <input
                id="username"
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="یوزرنیم"
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="password"></label>
              <div className="mt-2">
                <input
                  className="text-right"
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="پسورد"
                />
              </div>
            </div>
          </div>
          <div>
            <button className="text-red-500" type="submit">
              ورود
            </button>
          </div>
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
};
export default Login;
