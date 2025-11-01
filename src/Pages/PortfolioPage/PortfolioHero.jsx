import { Link } from "react-router-dom"; 
import image from '../../assets/Contact/top-banner.jpg';
import { FaAngleRight } from "react-icons/fa";

const PortfolioHero = () => {
    return (
        <div
            className="relative h-[220px] sm:h-[260px] md:h-[300px] lg:h-[350px] flex items-center justify-center text-white"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10"></div>

            {/* Text Content */}
            <div className="relative text-center z-10 px-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 text-[#4F00C7]">
                    Our Portfolio
                </h1>
                <p className="text-xs sm:text-sm md:text-base flex flex-wrap items-center justify-center gap-2 font-semibold text-gray-600">
                    <Link to="/" className="hover:underline text-gray-500">
                        Home
                    </Link>
                    <FaAngleRight className="text-[#4F00C7]" />
                    <span className="text-[#438FF9]">Our Portfolio</span>
                </p>
            </div>
        </div>
    );
};

export default PortfolioHero;
