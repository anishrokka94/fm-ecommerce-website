import { createContext, useReducer, type ReactNode } from "react";
import AuthReducer from "../../reducer/AuthReducer/AuthReducer";
import type { AuthContextType } from "./AuthContext.d";

export const initialAuthState = {
  username: "",
  password: "",
  isAuthenticated: false,
  error: "",
};

// export const AuthContext = createContext(initialAuthState);

export const AuthContext = createContext<AuthContextType>({
  state: initialAuthState,
  authDispatch: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, authDispatch] = useReducer(AuthReducer, initialAuthState);

  console.log("context", state);

  return (
    <AuthContext.Provider value={{ state, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
