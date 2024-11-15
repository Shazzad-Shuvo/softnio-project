import { FaBars } from "react-icons/fa";
import logo from "../../assets/Logo.png";
import BtnPrimary from "../btnPrimary/BtnPrimary";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </li>
      <li>
        <NavLink to="/clients">Clients</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  // Close side navbar on "esc" key press
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape") {
        setSideNavOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  return (
    <div className="">
      <div className="flex justify-between px-5 py-4 relative">
        <div className="flex items-center gap-20">
          <img src={logo} alt="Website Logo" />
          <ul className="hidden lg:flex gap-10">
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center">
          <BtnPrimary
            text={"Book a Table"}
            style="hidden lg:block"
          ></BtnPrimary>
          {/* Side Navbar Icon */}
          <FaBars
            className="text-2xl text-white block lg:hidden"
            onClick={() => setSideNavOpen(!sideNavOpen)}
          ></FaBars>
        </div>

        {/* sidebar */}
        <div
          className={`fixed top-0 right-0 w-full  md:w-[35%] lg:w-[30%] h-screen bg-gradient-to-br from-red-800 to-red-400 via-red-600 p-8 transition-all duration-500 ease-in-out z-30 ${
            sideNavOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end">
            <IoCloseSharp
              className="text-4xl text-right text-white"
              onClick={() => setSideNavOpen(!sideNavOpen)}
            />
          </div>
          <div className="my-6">
            <img src={logo} alt="Website Logo" />
          </div>
          {/* side nav menu */}
          <ul className="space-y-5">
            {navLinks}
          </ul>
        </div>

        {/* Backdrop for blur effect */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-500 ease-in-out z-20 ${
            sideNavOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setSideNavOpen(false)} // Close sidebar when clicking on the blurred area
        ></div>
      </div>
    </div>
  );
};

export default Navbar;
