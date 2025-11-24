import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import image from "../../assets/Contact/top-banner.jpg";

const ReadMoreHero = () => {
  return (
    <div
      className="relative 
      h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] xl:h-[340px] 
      flex flex-col items-center justify-center text-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60"></div>

      {/* Content */}
      <div className="relative z-10 px-3 sm:px-4 md:px-6">

        {/* Title */}
<h1
  className="
  text-[#4F00C7]
  text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
  font-extrabold leading-snug mb-2
  "
>
  Survival Strategies To Ensure Business
  <br className="hidden sm:block" />
  Domination
</h1>


        {/* Breadcrumb */}
        <div
          className="
          flex flex-wrap items-center justify-center 
          gap-1 sm:gap-1.5 md:gap-2 
          text-[11px] sm:text-[13px] md:text-sm lg:text-base 
          font-semibold
          "
        >
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

          <span className="text-[#438FF9] text-[12px] sm:text-[14px] md:text-sm lg:text-base">
            Survival Strategies To Ensure Business Domination
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReadMoreHero;
