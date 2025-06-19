import { createContext, useEffect, useReducer, type ReactNode } from "react";
import { CartReducer } from "../../reducer/CartReducer/CartReducer";
import type { CartContextType } from "../CartContext/CartContext.d";
import type { CartState } from "../../reducer/CartReducer/CartTypes";

const initialState: CartState = {
  items: [],
};

export const CartContext = createContext<CartContextType>({
  cartState: initialState,
  cartDispatch: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const localCart = localStorage.getItem("cart");
  const parsedCart = localCart ? JSON.parse(localCart) : initialState;

  const [cartState, cartDispatch] = useReducer(CartReducer, parsedCart);

  console.log("cart state", cartState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState));
  }, [cartState]);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};
