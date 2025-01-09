// Header.js

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <header className="fixed max-w-[1400px] left-1/2 -translate-x-1/2 top-4 mx-auto flex flexWrap md:justify-start rounded-md md:flex-nowrap z-50 w-full bg-transparent backdrop-blur-md before:absolute before:inset-0 before:maxW-[66rem] before:mx-2 before:lg:mx-auto before:rounded-[26px] before:bg-transparent before:backdrop-blur-md">
      <nav className="relative maxW-[66rem] w-full py-2.5 ps-5 pe-2 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto">
        <div className="flex items-center justify-between">
          <Link
            className="flex-none rounded-md text-xl text-slate-700 inline-block font-bold font focus:outline-none focus:opacity-80"
            to="/"
            aria-label="Store"
          >
            Store
          </Link>

          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-transparent textWhite disabled:opacity-50 disabled:pointer-events-none"
              id="hs-navbar-floating-dark-collapse"
              aria-expanded="false"
              aria-controls="hs-navbar-floating-dark"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-navbar-floating-dark"
            >
              <svg
                className="hs-collapse-open:hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="hs-navbar-floating-dark"
          className="hs-collapse hidden transition-all duration-300 basis-full grow md:block"
          aria-labelledby="hs-navbar-floating-dark-collapse"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-end py-2 md:py-0 md:ps-7">
            <Link
              className="p-3 ps-px sm:px-3 md:py-4 text-sm textWhite hover:font-semibold focus:outline-none focus:text-neutral-300"
              to="/"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              className="p-3 ps-px sm:px-3 md:py-4 text-sm textWhite hover:font-semibold focus:outline-none focus:text-neutral-300"
              to="#"
            >
              Stories
            </Link>
            <Link
              className="p-3 ps-px sm:px-3 md:py-4 text-sm textWhite hover:font-semibold focus:outline-none focus:text-neutral-300"
              to="#"
            >
              Reviews
            </Link>
            <Link
              className="p-3 ps-px sm:px-3 md:py-4 text-sm textWhite hover:font-semibold focus:outline-none focus:text-neutral-300"
              to="#"
            >
              Approach
            </Link>

            <div>
              <Link
                className="group inline-flex items-center gap-x-2 py-2 relative px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                to="/cart"
              >
                {quantity !== 0 && (
                  <span className="absolute -top-2 -right-2 z-10 bg-neutral-800 inline-flex items-center justify-center text-white w-6 h-6 text-sm rounded-full ">
                    {quantity}
                  </span>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
