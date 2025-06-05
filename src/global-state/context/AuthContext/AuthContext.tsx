import { createContext, useReducer, type ReactNode } from "react";
import { AuthReducer } from "../../reducer/AuthReducer/AuthReducer";
import type { AuthAction, User } from "../../action/AuthActions/AuthActions";

export interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
}

interface AuthContextType {
  state: AuthState;
  loginDispatch: React.Dispatch<AuthAction>;
}

const initialAuthState = {
  isLoggedIn: false,
  user: null,
};

const dummyDispatch: React.Dispatch<AuthAction> = () => {
  throw new Error(
    "loginDispatch function must be overridden by the AuthProvider."
  );
};

export const AuthContext = createContext({
  state: initialAuthState,
  loginDispatch: dummyDispatch,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, loginDispatch] = useReducer(AuthReducer, initialAuthState);

  return (
    <AuthContext.Provider value={{ state, loginDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
