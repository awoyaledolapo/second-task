import { useState } from "react";
import {  NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; 



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <nav className=" md:px-8 px-2 lg:px-0">
      <div className="max-w-5xl mx-auto flex items-center justify-between bg-[#1e1e2f] text-white px-6 py-3 rounded-full shadow-lg">
        {/* Logo */}
        <h1
         
          className="font-semibold tracking-wide text-lg text-[#abdbf2d1] transition "
        >
          scavo's
        </h1>
<div className="hidden lg:block md:block">
        {/* Desktop Links */}
        <ul className=" md:flex items-center space-x-6 ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded-full hover:no-underline  ${
                  isActive
                    ? "bg-gray-700 text-white hover:no-underline "
                    : "hover:bg-gray-700 hover:text-white hover:no-underline "
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-4 py-2 rounded-full ${
                  isActive
                    ? "bg-gray-700 text-white"
                    : "hover:bg-gray-700 hover:text-white"
                }`
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-4 py-2 rounded-full ${
                  isActive
                    ? "bg-[#0b59bf] text-white"
                    : "hover:bg-[#0b59bf] hover:text-white"
                }`
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
</div>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden  mt-3 bg-[#1e1e2f] text-white rounded-2xl shadow-md py-4 space-y-2 text-center">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block py-2 rounded-full mx-4 ${
                isActive
                  ? "bg-gray-700 text-white"
                  : "hover:bg-gray-700 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block py-2 rounded-full mx-4 ${
                isActive
                  ? "bg-gray-700 text-white"
                  : "hover:bg-gray-700 hover:text-white"
              }`
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block py-2 rounded-full mx-4 ${
                isActive
                  ? "bg-[#bc1502a2] text-white"
                  : "hover:bg-[#bc1502a2] hover:text-white"
              }`
            }
          >
            Contact Us
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
