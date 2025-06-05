import { Link } from "react-router-dom";
import CartIcon from "../../assets/svg/CartIcon";
import FavouriteIcon from "../../assets/svg/FavouriteIcon";
import UserIcon from "../../assets/svg/UserIcon";
import GlobalSearch from "../GlobalSearch/GlobalSearch";
import DarkModeToggleButton from "../Buttons/DarkModeToggleButton";
import ChevronDownIcon from "../../assets/svg/ChevronDownIcon";

const Navbar = () => {
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
          <div className="flex space-x-4">
            <a
              href="#"
              className="rounded-md text-black hover:text-gray-500 px-2 py-2 text-sm font-medium"
              aria-current="page"
            >
              Categories <ChevronDownIcon />
            </a>
            <a
              href="/shop"
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
                  <Link to="/cart" className="">
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
