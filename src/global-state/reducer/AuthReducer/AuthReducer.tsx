import { AUTH_ACTION_TYPE } from "../../action/AuthActions/AuthActions";

export const AuthReducer = (state, action) => {
  switch (action) {
    case AUTH_ACTION_TYPE.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.paload,
      };

    case AUTH_ACTION_TYPE.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };

    default:
      return state;
  }
};
