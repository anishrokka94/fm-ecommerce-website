import { User } from "../../action/AuthActions/AuthActions";

export interface AuthAction {
  type: "LOGIN";
  payload: User | { type: "LOGOUT" };
}
