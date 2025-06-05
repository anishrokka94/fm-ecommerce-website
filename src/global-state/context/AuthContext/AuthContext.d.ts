import { User } from "../../action/AuthActions/AuthActions";
import { AuthAction } from "../../reducer/AuthReducer/AuthReducer";

export interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
}

export interface AuthContextType {
  state: AuthState;
  loginDispatch: React.Dispatch<AuthAction>;
}
