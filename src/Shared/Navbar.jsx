import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../src/assets/Logo/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Pricing", path: "/pricing" },
    { name: "Services", path: "/services" },
    { name: "Free Trial", path: "/free-trial" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
         <img src={logo} alt="logo" className="h-10 sm:h-12 md:h-14 w-auto" />

        </div>

        {/* Menu for medium+ screens */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-[14px] sm:text-[15px] md:text-[16px] font-medium">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#0046FF] border-b-2 border-[#0046FF] pb-1 transition-all duration-300"
                    : "text-black hover:text-[#0046FF] transition-colors duration-300"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger for mobile */}
        <div
          className="md:hidden text-2xl cursor-pointer z-50 text-[#0046FF]"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full left-0 bg-white/95 shadow-md backdrop-blur-md overflow-hidden transform transition-all duration-500 ease-in-out ${
          open ? "max-h-[500px] opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
        }`}
      >
        <div className="flex flex-col items-center mx-4 my-2">
          {menuItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `w-full text-center py-3 px-4 border border-gray-300 rounded-md my-1 transition-colors duration-300 ${
                  isActive
                    ? "text-[#0046FF] border-[#0046FF] bg-blue-50"
                    : "text-black hover:border-[#0046FF] hover:text-[#0046FF] hover:bg-blue-50"
                }`
              }
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
