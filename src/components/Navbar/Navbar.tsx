import { Link } from "react-router-dom";
import CartIcon from "../../assets/svg/CartIcon";
import FavouriteIcon from "../../assets/svg/FavouriteIcon";
import UserIcon from "../../assets/svg/UserIcon";
import GlobalSearch from "../GlobalSearch/GlobalSearch";
import DarkModeToggleButton from "../Buttons/DarkModeToggleButton";
import ChevronDownIcon from "../../assets/svg/ChevronDownIcon";
import { useContext } from "react";
import { DrawerContext } from "../../global-state/context/DrawerContext/DrawerContext";
import { DRAWER_ACTION_TYPE } from "../../global-state/action/DrawerActions/DrawerActions";

const Navbar = () => {
  const { drawerDispatch } = useContext(DrawerContext);

  const handleDrawer = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("open..");
    e.preventDefault();
    drawerDispatch({ type: DRAWER_ACTION_TYPE.OPEN });
  };
  return (
    <>
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
                className="rounded-md text-black hover:text-gray-500 px-2 py-2 text-sm font-medium"
                aria-current="page"
              >
                Categories <ChevronDownIcon />
              </a>

              <div className="absolute left-0 mt-2 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto pointer-events-none transform transition-all duration-300 ease-out bg-white dark:bg-amber-900 shadow-lg rounded-md p-4 z-50">
                <div className="grid grid-cols-3 gap-6 min-w-[400px]">
                  <div className="space-y-2">
                    <Link
                      to="/categories/mobiles"
                      className="block text-sm hover:underline"
                    >
                      Mobiles
                    </Link>
                    <Link
                      to="/categories/laptops"
                      className="block text-sm hover:underline"
                    >
                      Laptops
                    </Link>
                    <Link
                      to="/categories/cameras"
                      className="block text-sm hover:underline"
                    >
                      Cameras
                    </Link>
                  </div>
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
                  <Link to="/" className="" onClick={(e) => handleDrawer(e)}>
                    <CartIcon />
                  </Link>
                  <Link to="/account" className="">
                    <UserIcon />
                  </Link>

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
