import { createContext, useReducer, type ReactNode } from "react";
import DrawerReducer from "../../reducer/DrawerReducer/DrawerReducer";
import type { DrawerContextType, DrawerState } from "./DrawerContext.d";

const initialDrawerState: DrawerState = {
  isOpen: false,
};

export const DrawerContext = createContext<DrawerContextType | undefined>(
  undefined
);

export const DrawerProvider = ({ children }: { children: ReactNode }) => {
  const [state, drawerDispatch] = useReducer(DrawerReducer, initialDrawerState);

  // console.log("drawer state", state);
  return (
    <DrawerContext.Provider value={{ state, drawerDispatch }}>
      {children}
    </DrawerContext.Provider>
  );
};
