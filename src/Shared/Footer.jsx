import { useEffect, useRef, useState } from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaPinterestP } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../src/assets/Logo/logo.png";

const Footer = () => {
  const [visible, setVisible] = useState(false);
  const rightColumnsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (rightColumnsRef.current) observer.observe(rightColumnsRef.current);
    return () => {
      if (rightColumnsRef.current) observer.unobserve(rightColumnsRef.current);
    };
  }, []);

  const usefulLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Pricing", path: "/pricing" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  const services = [
    "Clipping Path",
    "Multiple Clipping Path",
    "Ghost Mannequin",
    "Neck Joint",
    "Background Remove",
    "Photo Retouching",
    "Image Masking",
  ];

  const extraServices = [
    "Color Correction",
    "Image Reflection",
    "Image Shadowing",
    "Image Cleaning",
    "Image Cropping",
    "Photo Restoration",
    "Raster to Vector",
  ];

  return (
    <footer className="w-full bg-white text-black pt-16 pb-6 px-5 sm:px-8 md:px-12 lg:px-20 border-t border-gray-200">
      {/* ---------- Top Grid ---------- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* ---------- Left Section ---------- */}
        <div>
          <img src={logo} alt="logo" className="h-20 mb-4 w-auto" />
          <p className="text-sm md:text-[15px] leading-relaxed text-gray-600 mb-4">
            Clipping Amazon is a professional image editing agency providing high-quality, cost-effective photo editing solutions for your business, agency, or studio.
          </p>

          {/* Contact Info */}
          <div className="flex items-center gap-2 mb-2 text-gray-600">
            <FiMail className="text-[#6c2bd9]" />
            <span className="text-sm md:text-[15px]">infocamazon2018@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 mb-4 text-gray-600">
            <FiPhone className="text-[#6c2bd9]" />
            <span className="text-sm md:text-[15px]">+8801788110628</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 text-white text-lg flex-wrap">
            {[FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaPinterestP].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="bg-[#6c2bd9] p-2 rounded-full hover:scale-110 transition-transform duration-300"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* ---------- Right Columns ---------- */}
        <div ref={rightColumnsRef} className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
          <div
            className={`transition-all duration-700 ease-out transform ${
              visible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            }`}
          >
            <h3 className="font-semibold text-xl text-[#6c2bd9] mb-5">Useful Links</h3>
            <ul className="space-y-2 text-gray-700">
              {usefulLinks.map((link, i) => (
                <li key={i}>
                  <NavLink to={link.path} className="hover:text-[#6c2bd9] transition-colors duration-300">
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`transition-all duration-900 delay-100 ease-out transform ${
              visible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            }`}
          >
            <h3 className="font-semibold text-xl text-[#6c2bd9] mb-5">Services</h3>
            <ul className="space-y-2 text-gray-700">
              {services.map((service, i) => (
                <li key={i} className="hover:text-[#6c2bd9] cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`transition-all duration-1100 delay-200 ease-out transform ${
              visible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            }`}
          >
            <h3 className="font-semibold text-xl text-[#6c2bd9] mb-5">Extra Services</h3>
            <ul className="space-y-2 text-gray-700">
              {extraServices.map((service, i) => (
                <li key={i} className="hover:text-[#6c2bd9] cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ---------- Bottom ---------- */}
      <div className="max-w-7xl mx-auto mt-10 border-t border-gray-400 pt-4 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm gap-4 md:gap-0">
        <p className="text-center md:text-left">© Clipping Amazon 2025 All Rights Reserved</p>
        <div className="flex gap-4 flex-wrap justify-center md:justify-start">
          <a href="#" className="hover:text-[#6c2bd9]">Terms & Conditions</a>
          <a href="#" className="hover:text-[#6c2bd9]">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
