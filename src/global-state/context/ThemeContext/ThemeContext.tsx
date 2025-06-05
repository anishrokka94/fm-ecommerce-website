import { createContext, useEffect, useReducer, type ReactNode } from "react";
import {
  ThemeReducer,
  type ThemeState,
} from "../../reducer/ThemeReducer/ThemeReducer";
import type { ThemeAction } from "../../action/ThemeActions/ThemeActions";
// Context type
type ThemeContextType = {
  state: ThemeState;
  themeDispatch: React.Dispatch<ThemeAction>;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

const initialThemeState: ThemeState = {
  darkMode: localStorage.getItem("theme") === "dark",
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [state, themeDispatch] = useReducer(ThemeReducer, initialThemeState);

  useEffect(() => {
    const classList = document.documentElement.classList;
    if (state.darkMode) {
      classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [state.darkMode]);

  return (
    <ThemeContext.Provider value={{ state, themeDispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
