import { createContext, useReducer, type ReactNode } from "react";
import DrawerReducer from "../../reducer/DrawerReducer/DrawerReducer";

const initialDrawerState = {
  isOpen: false,
};

export const DrawerContext = createContext(initialDrawerState);

export const DrawerProvider = ({ children }: { children: ReactNode }) => {
  const [state, drawerDispatch] = useReducer(DrawerReducer, initialDrawerState);

  console.log("drawer state", state);
  return (
    <DrawerContext.Provider value={{ state, drawerDispatch }}>
      {children}
    </DrawerContext.Provider>
  );
};
