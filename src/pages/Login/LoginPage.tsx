import React, { useContext } from "react";
// import LogoutButton from "./components/LogInButton";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../global-state/context/AuthContext/AuthContext";
import { AUTH_ACTION_TYPE } from "../../global-state/action/AuthActions/AuthActions";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();

  const { state, authDispatch } = useContext(AuthContext);

  const handleSubmit = async (e: MouseEvent) => {
    e.preventDefault();
    // call backend api

    try {
      const res = await axios.post("https://dummyjson.com/auth/login", {
        username: state.username,
        password: state.password,
        expiresInMins: 60,
      });

      authDispatch({
        type: AUTH_ACTION_TYPE.LOGIN,
        payload: res.data,
      });

      navigate("/");

      console.log("res", res);
    } catch (error) {
      console.log(error);
      authDispatch({ type: AUTH_ACTION_TYPE.ERROR, payload: error.message });
    }
  };
  return (
    <div className="flex justify-center py-5">
      <div className="w-full max-w-md">
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
            Login
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Field */}
            {state.error && (
              <p className="bg-red-900 text-white p-2 rounded-sm">
                {" "}
                {state.error}
              </p>
            )}
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-gray-800 mb-1"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Enter Username"
                value={state.username}
                onChange={(e) => {
                  authDispatch({
                    type: AUTH_ACTION_TYPE.SET_USERNAME,
                    payload: e.target.value,
                  });
                }}
              />
            </div>

            {/* Password Field */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label
                  htmlFor="password"
                  className="text-lg font-semibold text-gray-800"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-sm text-gray-700 underline hover:text-gray-900"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Enter your password"
                value={state.password}
                onChange={(e) => {
                  authDispatch({
                    type: AUTH_ACTION_TYPE.SET_PASSWORD,
                    payload: e.target.value,
                  });
                }}
              />
            </div>

            {/* Sign In Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-8 text-center text-gray-700">
            New customer?{" "}
            <a href="#" className="underline font-medium hover:text-gray-900">
              Create an account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
