import image from '../../assets/Contact/ContectHero.png';
import { FaAngleRight } from "react-icons/fa";

const ContactHero = () => {
  return (
    <div
      className="relative h-[220px] sm:h-[260px] md:h-[300px] lg:h-[350px] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay (shadow কমানো হয়েছে) */}
      <div className="absolute inset-0 bg-black/5"></div>

      {/* Text Content */}
      <div className="relative text-center z-10 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 text-[#4F00C7]">
          Contact Us
        </h1>
        <p className="text-sm sm:text-base md:text-lg flex flex-wrap items-center justify-center gap-2 font-semibold">
          Home <FaAngleRight className="text-[#4F00C7]" /> 
          <span className="text-[#438FF9]">Contact</span>
        </p>
      </div>
    </div>
  );
};

export default ContactHero;
