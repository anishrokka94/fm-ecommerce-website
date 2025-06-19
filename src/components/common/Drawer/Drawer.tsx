import { useContext } from "react";
import { DRAWER_ACTION_TYPE } from "../../../global-state/action/DrawerActions/DrawerActions";
import { DrawerContext } from "../../../global-state/context/DrawerContext/DrawerContext";
import { CartContext } from "../../../global-state/context/CartContext/CartContext";
import { TrashIcon } from "@heroicons/react/24/solid";
import { actualPrice } from "../../../utils/auth";
import { CART_ACTION_TYPE } from "../../../global-state/action/CartActions/CartActions";
import type { CartItem } from "../Cart/Cart";

const Drawer = () => {
  const context = useContext(DrawerContext);

  if (!context) {
    throw new Error("DrawerContext must be used within a DrawerProvider");
  }

  const { state, drawerDispatch } = context;
  const handleDrawer = () => {
    console.log("drawer...", state);
    drawerDispatch({ type: DRAWER_ACTION_TYPE.CLOSE });
  };

  const { cartState, cartDispatch } = useContext(CartContext);
  console.log("cartstate in draw", cartState);

  const removeCartHandler = (id: number) => {
    cartDispatch({
      type: CART_ACTION_TYPE.REMOVE_FROM_CART,
      payload: { id: id },
    });
  };

  return (
    <>
      {state.isOpen && (
        <div
          className="relative z-10"
          aria-labelledby="slide-over-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0 bg-gray-500/75 transition-opacity"
            aria-hidden="true"
          ></div>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <div className="pointer-events-auto relative w-screen max-w-md">
                  <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                    <button
                      onClick={handleDrawer}
                      type="button"
                      className="relative rounded-md text-gray-300 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden"
                    >
                      <span className="absolute -inset-2.5"></span>
                      <span className="sr-only">Close panel</span>
                      <svg
                        className="size-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <h2
                        className="text-base font-semibold text-gray-900"
                        id="slide-over-title"
                      >
                        Your Cart ({cartState?.items?.length})
                      </h2>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {cartState.items?.map((cart: CartItem) => {
                        return (
                          <div className="flex items-start gap-4 border-b pb-4 mb-4">
                            {/* Product Image */}
                            <img
                              src={cart.thumbnail}
                              // alt={title}
                              className="w-24 h-24 object-cover rounded-md"
                            />

                            {/* Product Details */}
                            <div className="flex-1">
                              <div className="flex justify-between items-start">
                                <h3 className="text-lg font-semibold text-[#7c1c38] leading-snug">
                                  {/* {title} */}
                                  {cart?.title}
                                </h3>
                                <button
                                  onClick={() => removeCartHandler(cart.id)}
                                  className="text-[#7c1c38] hover:text-red-600 transition"
                                  aria-label="Remove item"
                                >
                                  <TrashIcon className="w-5 h-5 cursor-pointer" />
                                </button>
                              </div>

                              {/* Price */}
                              <div className="mt-2 text-lg font-semibold text-[#7c1c38]">
                                ${" "}
                                {actualPrice(
                                  cart.price,
                                  cart.discountPercentage
                                )}
                                <span className="ml-2 line-through text-gray-500 text-sm font-normal">
                                  $ {cart.price}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="px-4 sm:px-6">
                      <button className="w-100 border-2 border-gray-600 rounded-full px-4 py-1 hover:bg-black-500 cursor-pointer">
                        {" "}
                        Checkout{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Drawer;
