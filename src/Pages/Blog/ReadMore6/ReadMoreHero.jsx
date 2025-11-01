import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import image from "../../../assets/Contact/top-banner.jpg";

const ReadMoreHero = () => {
  return (
    <div
      className="relative h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] flex flex-col items-center justify-center text-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      {/* Content */}
      <div className="relative z-10 px-3">
        {/* Title */}
        <h1 className="text-[#4F00C7] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-snug mb-3">
          Get ready for our recent plan for designer <br /> and developer                                
        </h1>

        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center justify-center gap-1 text-[13px] sm:text-[14px] md:text-sm lg:text-base font-semibold">
          <Link to="/" className="text-gray-500 hover:text-[#4F00C7] transition">
            Home
          </Link>
          <FaAngleRight className="text-gray-400" />
          <Link to="/blog" className="text-gray-500 hover:text-[#4F00C7] transition">
            Blog
          </Link>
          <FaAngleRight className="text-gray-400" />
          <Link to="/blog" className="text-gray-500 hover:text-[#4F00C7] transition">
            Posts
          </Link>
          <FaAngleRight className="text-gray-400" />
          <span className="text-[#438FF9]">
            Get ready for our recent plan for designer and developer                                
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReadMoreHero;
