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
    { name: "Clipping Path Service", link: "/services/clipping" },
    { name: "Multiple Clipping Service", link: "/services/multiple-clipping" },
    { name: "Ghost Mannequin Service", link: "/services/ghost-mannequin" },
    { name: "Photo Retouching Service", link: "/services/photo-retouching" },
    { name: "Image Masking Service", link: "/services/image-masking" },
    { name: "Color Correction Service", link: "/services/color-correction" },
    { name: "Image Reflection Service", link: "/services/image-reflection" },
    { name: "Image Shadowing Service", link: "/services/image-shadowing" },
    { name: "Image Cropping Service", link: "/services/image-cropping" },
    { name: "Photo Restoration Service", link: "/services/photo-restoration" },
    { name: "Raster to Vector Service", link: "/services/raster-to-vector" },
    { name: "Car Image Editing Service", link: "/services/car-image-editing" },
    { name: "Background Remove Service", link: "/services/background-remove" },
  ];

  return (
    <footer className="w-full bg-white text-black pt-16 pb-6 px-5 sm:px-8 md:px-12 lg:px-20 border-t border-gray-200">
      
      {/* ---------- Top Grid ---------- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        
        {/* ---------- Left Section ---------- */}
        <div>
          <img src={logo} alt="logo" className="h-20 mb-4 w-auto" />
          
          <p className="text-sm md:text-[15px] leading-relaxed text-gray-600 mb-4">
            Graphics Amazon is a professional image editing agency providing high-quality, cost-effective photo editing solutions for your business, agency, or studio.
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

          {/* ---------- Social Icons (ONLY YOUR 4 LINKS) ---------- */}
          <div className="flex gap-3 text-white text-lg flex-wrap">
            
            {/* Twitter */}
            <a
              href="https://x.com/graphicsamazon"
              target="_blank"
              className="bg-[#6c2bd9] p-2 rounded-full hover:scale-110 transition-transform duration-300"
            >
              <FaTwitter />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/108690991/admin/dashboard/"
              target="_blank"
              className="bg-[#6c2bd9] p-2 rounded-full hover:scale-110 transition-transform duration-300"
            >
              <FaLinkedin />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/graphicsamazonbd"
              target="_blank"
              className="bg-[#6c2bd9] p-2 rounded-full hover:scale-110 transition-transform duration-300"
            >
              <FaFacebookF />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/graphicsamazon/"
              target="_blank"
              className="bg-[#6c2bd9] p-2 rounded-full hover:scale-110 transition-transform duration-300"
            >
              <FaInstagram />
            </a>

          </div>
        </div>

        {/* ---------- Useful Links ---------- */}
        <div className="text-left">
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

        {/* ---------- Services ---------- */}
        <div className="text-left">
          <h3 className="font-semibold text-xl text-[#6c2bd9] mb-5">Our Services</h3>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-700">
            {services.map((service, i) => (
              <li key={i}>
                <NavLink to={service.link} className="hover:text-[#6c2bd9] cursor-pointer transition-colors duration-300">
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
            className="text-[#6c2bd9] font-semibold hover:underline"
          >
            Hasnat Evan
          </a>
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <a href="#" className="hover:text-[#6c2bd9]">Terms & Conditions</a>
          <a href="#" className="hover:text-[#6c2bd9]">Privacy Policy</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
