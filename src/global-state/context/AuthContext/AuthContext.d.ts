import type {
  AuthState,
  AuthAction,
} from "../../reducer/AuthReducer/AuthTypes";

import type { Dispatch } from "react";

export interface AuthContextType {
  state: AuthState;
  authDispatch: Dispatch<AuthAction>;
}
