import type { CartItem } from "../../../components/common/Cart/Cart";
export type CartAction =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "REMOVE_FROM_CART"; payload: { id: number } };
// | { type: "CLEAR_CART" }
// | { type: "INCREASE_QUANTITY"; payload: { id: number } }
// | { type: "DECREASE_QUANTITY"; payload: { id: number } }
