import { Link } from "react-router-dom";
import CartIcon from "../../assets/svg/CartIcon";
import FavouriteIcon from "../../assets/svg/FavouriteIcon";
import GlobalSearch from "../GlobalSearch/GlobalSearch";
import DarkModeToggleButton from "../Buttons/DarkModeToggleButton";
import ChevronDownIcon from "../../assets/svg/ChevronDownIcon";
import { useContext } from "react";
import { DrawerContext } from "../../global-state/context/DrawerContext/DrawerContext";
import { DRAWER_ACTION_TYPE } from "../../global-state/action/DrawerActions/DrawerActions";
import { UserIcon, MapPinIcon, TruckIcon } from "@heroicons/react/24/solid";
import useAuthLogin from "../../hooks/useAuthLogin";
import useFetchProductCategories from "../../hooks/useFetchProductCategories";
import { CartContext } from "../../global-state/context/CartContext/CartContext";

const Navbar = () => {
  // const { drawerDispatch } = useContext(DrawerContext);
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("DrawerContext must be used within a DrawerProvider");
  }

  const { drawerDispatch } = context;

  const handleDrawer = (e: React.MouseEvent<HTMLElement>) => {
    // console.log("open..");
    e.preventDefault();
    drawerDispatch({ type: DRAWER_ACTION_TYPE.OPEN });
  };

  const { userData } = useAuthLogin();
  const { categories } = useFetchProductCategories(0);

  console.log("user", userData);

  const { cartState } = useContext(CartContext);
  return (
    <>
      <div className="bg-[#cc3131] text-white text-sm">
        <div className="mx-auto px-8 flex items-center justify-between py-2">
          <span className="font-semibold">The Joy of Well-Made Things!</span>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1 cursor-pointer hover:underline">
              <MapPinIcon className="h-4 w-4" />
              <span>Find Store</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:underline">
              <TruckIcon className="h-4 w-4" />
              <span>Track Order</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:underline">
              <UserIcon className="h-4 w-4" />
              <Link to="/account" className="">
                {" "}
                Hello
                {/* Hello, {userData?.firstName} */}
              </Link>
            </div>

            <div className="flex items-center gap-1 cursor-pointer hover:underline">
              <Link to="/login" className="">
                {" "}
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
      <nav className="dark:bg-amber-800 bg-white w-full flex gap-4 relative justify-between items-center mx-auto px-8 h-20">
        {/* <!-- logo --> */}
        <div className="inline-flex mr-4">
          <a className="" href="/">
            <img width="130" height="50" src="/img/logo.svg" alt="" />
          </a>
        </div>

        {/* <!-- end logo --> */}

        {/* <!-- search bar --> */}

        <GlobalSearch />

        <div className="hidden sm:ml-6 sm:block">
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <a
                href="#"
                className="rounded-md text-black hover:text-gray-500 px-2 py-2 text-sm font-medium text-abc"
                aria-current="page"
              >
                Categories <ChevronDownIcon />
              </a>

              <div className="absolute mt-2 left-0 sm:left-auto sm:right-0 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto pointer-events-none transform transition-all duration-300 ease-out bg-white dark:bg-amber-900 shadow-xl rounded-xl p-4 z-50">
                <div className="grid grid-cols-5 gap-x-6 gap-y-2 min-w-[900px] max-w-screen-md">
                  {categories?.map((category) => {
                    return (
                      <Link
                        to="/categories/mobiles"
                        className="block text-sm hover:underline"
                      >
                        {category.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <a
              href="/product"
              className="rounded-md px-2 py-2 text-sm font-medium  hover:text-gray-500 text-black"
            >
              Shop
            </a>
            <a
              href="#"
              className="rounded-md px-2 py-2 text-sm font-medium hover:text-gray-500 text-black"
            >
              About
            </a>
          </div>
        </div>

        {/* <!-- end search bar --> */}

        {/* <!-- login --> */}
        <div className="flex-initial">
          <div className="flex justify-end items-center relative">
            <div className="flex mr-4 items-center">
              <div className="block relative">
                <div className="flex items-center gap-4">
                  <Link to="" className="">
                    <FavouriteIcon />
                  </Link>
                  <div className="relative">
                    <Link to="/" className="" onClick={(e) => handleDrawer(e)}>
                      <CartIcon />
                    </Link>

                    {/* Badge */}
                    {cartState?.items?.length > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
                        {cartState?.items?.length}
                      </span>
                    )}
                  </div>

                  <DarkModeToggleButton />
                </div>
              </div>
            </div>

            {/* Add icons */}
          </div>
        </div>
        {/* end login  */}
      </nav>
    </>
  );
};

export default Navbar;
