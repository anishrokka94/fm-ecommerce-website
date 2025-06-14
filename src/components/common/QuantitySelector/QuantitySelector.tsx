import { useState } from "react";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increase = () => setQuantity(quantity + 1);

  return (
    <div className="flex items-center border-2 border-gray-600 rounded-full px-4 py-1 w-fit select-none">
      <button
        onClick={decrease}
        className="text-xl text-gray-800 px-2 hover:text-black cursor-pointer"
      >
        &minus;
      </button>
      <span className="mx-4 text-lg">{quantity}</span>
      <button
        onClick={increase}
        className="text-xl text-gray-800 px-2 hover:text-black cursor-pointer"
      >
        &#43;
      </button>
    </div>
  );
};

export default QuantitySelector;
