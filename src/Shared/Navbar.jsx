import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import logo from "../../src/assets/Logo/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Pricing", path: "/pricing" },
    { name: "Services", path: "/services" },
    { name: "Free Trial", path: "/free-trial" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="bg-white w-full shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        {/* 🔸 Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-16 w-auto" />
        </div>

        {/* 🔸 Menu for large screen */}
        <ul className="hidden md:flex items-center gap-8 text-[16px] font-medium">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `cursor-pointer ${isActive
                    ? "text-[#f39c12]"
                    : "text-black hover:text-[#f39c12]"}`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* 🔸 Hamburger for mobile */}
        <div
          className="md:hidden text-2xl cursor-pointer z-50"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* 🔸 Mobile Menu with smooth open/close */}
      <div
        className={`md:hidden absolute w-full left-0 bg-white shadow-md overflow-hidden transform transition-all duration-500 ease-in-out ${
          open ? "max-h-[500px] opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
        }`}
      >
        <div className="flex flex-col items-center mx-4 my-2">
          {menuItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              onClick={() => setOpen(false)}
              className="w-full text-center py-3 px-4 border border-gray-300 text-black hover:border-[#f39c12] hover:text-[#f39c12] hover:bg-gray-100 transition-colors duration-300"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
