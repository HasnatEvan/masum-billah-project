import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import logo from "../../src/assets/Logo/logo.png";

// Gorgeous Full-Page Spinner
const Spinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
    <div className="relative w-24 h-24">
      {/* Outer glowing ring */}
      <div className="absolute inset-0 rounded-full border-4 border-purple-500 border-t-transparent border-b-transparent animate-spin shadow-lg"></div>
      {/* Inner glowing ring */}
      <div className="absolute inset-2 rounded-full border-4 border-pink-500 border-l-transparent border-r-transparent animate-spin shadow-md"></div>
      {/* Center dot */}
      <div className="absolute inset-6 rounded-full bg-purple-600 animate-pulse"></div>
    </div>
  </div>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true); // Initial true for page load
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

  // Show spinner on initial page load
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleNavigation = (path) => {
    setLoading(true); // Show spinner on menu click
    setOpen(false); // Close mobile menu if open
    setTimeout(() => {
      setLoading(false);
      navigate(path);
    }, 2000); // 2 seconds delay
  };

  return (
    <>
      {loading && <Spinner />}
      <nav className="bg-white w-full shadow-sm relative z-50 sticky top-0">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-16 w-auto" />
          </div>

          {/* Menu for large screens */}
          <ul className="hidden md:flex items-center gap-8 text-[16px] font-medium">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleNavigation(item.path)}
                  className="cursor-pointer text-black hover:text-[#f39c12]"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Hamburger for mobile */}
          <div
            className="md:hidden text-2xl cursor-pointer z-50"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute w-full left-0 bg-white shadow-md overflow-hidden transform transition-all duration-500 ease-in-out ${
            open ? "max-h-[500px] opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
          }`}
        >
          <div className="flex flex-col items-center mx-4 my-2">
            {menuItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleNavigation(item.path)}
                className="w-full text-center py-3 px-4 border border-gray-300 text-black hover:border-[#f39c12] hover:text-[#f39c12] hover:bg-gray-100 transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
