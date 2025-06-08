import { AUTH_ACTION_TYPE } from "../../action/AuthActions/AuthActions.ts";
import { initialAuthState } from "../../context/AuthContext/AuthContext.tsx";
import type { AuthState, AuthAction } from "./AuthTypes.ts";

const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AUTH_ACTION_TYPE.LOGIN:
      // login functionality
      localStorage.setItem(
        "tokens",
        JSON.stringify({
          accessToken: action.payload.accessToken,
          refreshToken: action.payload.refreshToken,
        })
      );
      localStorage.setItem("isAuthenticated", JSON.stringify(true));
      return {
        ...initialAuthState,
        isAuthenticated: true,
        username: action.payload.firstName,
      };

    case AUTH_ACTION_TYPE.SET_USERNAME:
      return { ...state, username: action.payload };

    case AUTH_ACTION_TYPE.SET_PASSWORD:
      return { ...state, password: action.payload };

    case AUTH_ACTION_TYPE.LOGOUT:
      localStorage.clear();
      window.location.href = "/login";
      return { ...state, isAuthenticated: false };

    case AUTH_ACTION_TYPE.ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default AuthReducer;
