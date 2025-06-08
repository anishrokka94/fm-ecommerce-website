import React, { useContext } from "react";
import { AuthContext } from "../../../global-state/context/AuthContext/AuthContext";
import { AUTH_ACTION_TYPE } from "../../../global-state/action/AuthActions/AuthActions";

const LogOutButton = () => {
  const { authDispatch } = useContext(AuthContext);

  return (
    <button
      onClick={() =>
        authDispatch({ type: AUTH_ACTION_TYPE.LOGOUT, payload: "" })
      }
    >
      {" "}
      Logout{" "}
    </button>
  );
};

export default LogOutButton;
