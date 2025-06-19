import { useContext } from "react";
import { CartContext } from "../../global-state/context/CartContext/CartContext";
import { CART_ACTION_TYPE } from "../../global-state/action/CartActions/CartActions";

interface AddToCartProps {
  product: any;
}

const AddToCart = ({ product }: AddToCartProps) => {
  const { cartDispatch } = useContext(CartContext);

  const handleAddToCart = () => {
    cartDispatch({ type: CART_ACTION_TYPE.ADD_TO_CART, payload: product });
  };

  return (
    <button
      className="w-100 border-2 border-gray-600 rounded-full px-4 py-1 hover:bg-black-500 cursor-pointer"
      onClick={handleAddToCart}
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
