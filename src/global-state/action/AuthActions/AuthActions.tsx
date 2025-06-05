export const AUTH_ACTION_TYPE = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

export type AuthActionType = keyof typeof AUTH_ACTION_TYPE;

export interface User {
  id: string;
  username: string;
  email: string;
}

export type AuthAction =
  | { type: typeof AUTH_ACTION_TYPE.LOGIN; payload: User }
  | { type: typeof AUTH_ACTION_TYPE.LOGOUT };
