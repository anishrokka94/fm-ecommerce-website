import { AUTH_ACTION_TYPE } from "./AuthActions";

export type AuthActionType =
  | typeof AUTH_ACTION_TYPE.LOGIN
  | typeof AUTH_ACTION_TYPE.LOGOUT
  | typeof AUTH_ACTION_TYPE.SET_USERNAME
  | typeof AUTH_ACTION_TYPE.SET_PASSWORD
  | typeof AUTH_ACTION_TYPE.ERROR;

// Define the shape of each action for better typing

export type AuthAction =
  | {
      type: typeof AUTH_ACTION_TYPE.LOGIN;
      payload: { accessToken: string; refreshToken: string; firstName: string };
    }
  | { type: typeof AUTH_ACTION_TYPE.LOGOUT }
  | { type: typeof AUTH_ACTION_TYPE.SET_USERNAME; payload: string }
  | { type: typeof AUTH_ACTION_TYPE.SET_PASSWORD; payload: string }
  | { type: typeof AUTH_ACTION_TYPE.ERROR; payload: string };
