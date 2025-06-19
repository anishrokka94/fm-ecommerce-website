import { CART_ACTION_TYPE } from "../../action/CartActions/CartActions";
import type { CartState } from "./CartTypes";
import type { CartAction } from "../../action/CartActions/CartActions.d";

export const CartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case CART_ACTION_TYPE.ADD_TO_CART: {
      const product = action.payload;
      console.log("new cart state", state);
      // console.log("product from", product);
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...product, quantity: 1 }],
        };
      }
    }

    case CART_ACTION_TYPE.REMOVE_FROM_CART: {
      const productId = action.payload.id;
      return {
        ...state,
        items: state.items.filter((item) => item.id !== productId),
      };
    }

    // case CART_ACTION_TYPE.CLEAR_CART:
    //   return { ...state, items: [] };

    // case CART_ACTION_TYPE.INCREASE_QUANTITY:
    //   return { ...state, items: [] };

    // case CART_ACTION_TYPE.DECREASE_QUNATITY:
    //   return { ...state, items: [] };

    default:
      return state;
  }
};
