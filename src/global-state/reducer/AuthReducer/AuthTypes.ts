import { AUTH_ACTION_TYPE } from "../../action/AuthActions/AuthActions";

export type AuthState = {
  username: string;
  password: string;
  isAuthenticated: boolean;
  error: string;
};

type LoginAction = {
  type: typeof AUTH_ACTION_TYPE.LOGIN;
  payload: {
    accessToken: string;
    refreshToken: string;
    firstName: string;
  };
};

type SetUsernameAction = {
  type: typeof AUTH_ACTION_TYPE.SET_USERNAME;
  payload: string;
};

type SetPasswordAction = {
  type: typeof AUTH_ACTION_TYPE.SET_PASSWORD;
  payload: string;
};

type LogoutAction = {
  type: typeof AUTH_ACTION_TYPE.LOGOUT;
};

type ErrorAction = {
  type: typeof AUTH_ACTION_TYPE.ERROR;
  payload: string;
};

export type AuthAction =
  | LoginAction
  | SetUsernameAction
  | SetPasswordAction
  | LogoutAction
  | ErrorAction;
