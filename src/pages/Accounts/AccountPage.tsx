import React from "react";
// import LogoutButton from "./components/LogInButton";
import LogInButton from "./components/LogInButton";

const AccountPage = () => {
  return (
    <div className="flex justify-center py-5">
      <div className="w-full max-w-md">
        <LogInButton />
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
            Login
          </h2>

          <form className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-gray-800 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Enter your email"
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

export default AccountPage;
