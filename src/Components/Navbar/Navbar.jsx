import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <nav className="bg-white dark:bg-gray-800  shadow ">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-center justify-between h-16">
              <div className="w-full justify-between flex items-center">
                <NavLink to="/">
                  {/* <img className="h-8 w-8" src="/icons/rocket.svg" alt="Workflow" /> */}
                  <h2>Favcoctail</h2>
                </NavLink>

                <div className="block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <NavLink
                      to="/"
                      className="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Tried
                    </NavLink>
                    <NavLink
                      to="/wishlist"
                      className="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Wishlist
                    </NavLink>
                    <NavLink to="/addnew">
                      <button
                        type="button"
                        className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      >
                        Add new
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="block">
                <div className="ml-4 flex items-center md:ml-6"></div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
