import {
  FiMail,
  FiPhone
} from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../src/assets/Logo/logo.png";

const Footer = () => {
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
    { name: "Clipping Path Service", link: "/services/clipping-path" },
    { name: "Multiple Clipping Path", link: "/services/multiple-clipping-path" },
    { name: "Ghost Mannequin Service", link: "/services/ghost-mannequin" },
    { name: "Neck Joint Service", link: "/services/neck-joint" }, // Fix applied
    { name: "Background Remove", link: "/services/background-remove" },
    { name: "Photo Retouching", link: "/services/photo-retouching" },
    { name: "Image Masking", link: "/services/image-masking" },
    { name: "Color Correction", link: "/services/color-correction" },
    { name: "Image Reflection", link: "/services/image-reflection" },
    { name: "Image Shadowing", link: "/services/image-shadowing" },
    { name: "Image Cropping", link: "/services/image-cropping" },
    { name: "Photo Restoration", link: "/services/photo-restoration" },
    { name: "Car Image Editing", link: "/services/car-image-editing" },
    { name: "Raster to Vector Service", link: "/services/raster-to-vector" },
  ];

  return (
    <footer className="w-full bg-white text-black pt-5 pb-6 px-5 sm:px-8 md:px-12 lg:px-20 border-t border-gray-200">
      
      {/* ---------- Top Grid ---------- */}
      <div className="
        max-w-7xl mx-auto 
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        gap-10 md:gap-14 lg:gap-20
      ">
        
        {/* ---------- Left Section ---------- */}
        <div>
          <img src={logo} alt="logo" className="h-20 mb-4 w-auto" />
          
          <p className="text-sm md:text-[15px] leading-relaxed text-gray-600 mb-4">
            Graphics Amazon is a professional image editing agency providing high-quality, cost-effective photo editing solutions for your business, agency, or studio.
          </p>

          {/* Contact Info */}
          <div className="flex items-center gap-2 mb-2 text-gray-600">
            <FiMail className="text-blue-600" />
            <span className="text-sm md:text-[15px]">infocamazon2018@gmail.com</span>
          </div>

          <div className="flex items-center gap-2 mb-4 text-gray-600">
            <FiPhone className="text-blue-600" />
            <span className="text-sm md:text-[15px]">+8801788110628</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 text-white text-lg flex-wrap">
            <a
              href="https://x.com/graphicsamazon"
              target="_blank"
              className="bg-blue-600 p-2 rounded-full hover:scale-110 transition-transform duration-300"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.linkedin.com/company/108690991/admin/dashboard/"
              target="_blank"
              className="bg-blue-600 p-2 rounded-full hover:scale-110 transition-transform duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.facebook.com/graphicsamazonbd"
              target="_blank"
              className="bg-blue-600 p-2 rounded-full hover:scale-110 transition-transform duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/graphicsamazon/"
              target="_blank"
              className="bg-blue-600 p-2 rounded-full hover:scale-110 transition-transform duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* ---------- Useful Links ---------- */}
        <div className="text-left md:pl-10">
          <h3 className="font-semibold text-xl text-blue-600 mb-5">Useful Links</h3>
          <ul className="space-y-2 text-gray-700">
            {usefulLinks.map((link, i) => (
              <li key={i}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `transition-colors duration-300 
                    ${isActive 
                      ? "text-blue-600 font-semibold underline" 
                      : "text-gray-700 hover:text-blue-600"}`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- Our Services ---------- */}
        <div className="text-left">
          <h3 className="font-semibold text-xl text-blue-600 mb-5">Our Services</h3>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-700">
            {services.map((service, i) => (
              <li key={i}>
                <NavLink
                  to={service.link}
                  className={({ isActive }) =>
                    `transition-colors duration-300 
                    ${isActive 
                      ? "text-blue-600 font-semibold underline" 
                      : "text-gray-700 hover:text-blue-600"}`
                  }
                >
                  {service.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* ---------- Bottom ---------- */}
      <div className="max-w-7xl mx-auto mt-10 border-t border-gray-400 pt-4 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm gap-4">
        <p>© Graphics Amazon 2025 All Rights Reserved</p>

        <p className="text-gray-700">
          Developed by{" "}
          <a
            href="https://www.facebook.com/profile.php?id=61575431671174"
            target="_blank"
            className="text-blue-600 font-semibold hover:underline"
          >
            Hasnat Evan
          </a>
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <a href="#" className="hover:text-blue-600">Terms & Conditions</a>
          <a href="#" className="hover:text-blue-600">Privacy Policy</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
