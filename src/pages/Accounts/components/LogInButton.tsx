import React, { useContext } from "react";
import { AuthContext } from "../../../global-state/context/AuthContext/AuthContext";
import { AUTH_ACTION_TYPE } from "../../../global-state/action/AuthActions/AuthActions";

const LogInButton = () => {
  const { loginDispatch } = useContext(AuthContext);
  // console.log("acc page", isLoggedIn);

  const handleLogin = () => {
    loginDispatch({
      type: AUTH_ACTION_TYPE.LOGIN,
      payload: {
        id: "123",
        username: "anish",
        email: "anish@gmail.com",
      },
    });
  };

  return (
    <button
      type="button"
      className="bg-amber-300 p-1.5 rounded-sm cursor-pointer"
      onClick={handleLogin}
    >
      {" "}
      Log in{" "}
    </button>
  );
};

export default LogInButton;
