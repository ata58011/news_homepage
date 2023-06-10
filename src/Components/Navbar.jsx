import React from "react";
import menu_open from "../images/icon-menu.svg";
import close from "../images/icon-menu-close.svg";
const Navbar = () => {
  const menuHandler = () => {
    let menuDropdown = document.getElementById("dropdown-menu-wrapper");
    menuDropdown.classList.remove("hidden");
    menuDropdown.classList.add("flex");
  };
  const menuCloseHandler = () => {
    let menuDropdown = document.getElementById("dropdown-menu-wrapper");
    menuDropdown.classList.remove("flex");
    menuDropdown.classList.add("hidden");
  };
  return (
    <header
      id="navbar"
      className="container flex justify-between items-center mx-auto md:py-16 font-inter py-12 relative"
    >
      <div>
        <h1 className="text-6xl  font-bold	">W.</h1>
      </div>
      <div>
        <ul className=" items-center gap-x-12 sm:flex hidden ">
          <li className="hover:text-red-600">Home</li>
          <li className="hover:text-red-600">New</li>
          <li className="hover:text-red-600">Popular</li>
          <li className="hover:text-red-600">Trending</li>
          <li className="hover:text-red-600">Categories</li>
        </ul>
        <button
          className="absolute right-12 bottom-16 sm:hidden inline-block"
          onClick={menuHandler}
        >
          <img src={menu_open} alt="" />
        </button>
        <div
          id="dropdown-menu-wrapper"
          className="h-screen w-60 hidden absolute top-0  right-0  bg-slate-50 transition-all	"
        >
          <ul className=" items-center  flex flex-col gap-y-6 justify-start pt-48 ">
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
          <button
            className="absolute top-16 right-12  sm:hidden inline-block"
            onClick={menuCloseHandler}
          >
            <img src={close} alt="" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;