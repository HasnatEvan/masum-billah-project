import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../../assets/Hero/image (1).jpg";
import image2 from "../../assets/Hero/image (2).jpg";
import image3 from "../../assets/Hero/image (3).jpg";

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    cssEase: "ease-in-out",
    pauseOnHover: false,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {[image1, image2, image3].map((img, index) => (
          <div key={index} className="relative">
            <img
              src={img}
              alt={`Banner ${index + 1}`}
              className="w-full h-auto object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Left side text */}
            <div className="absolute inset-0 flex items-center px-4 sm:px-6 md:px-12 lg:px-20">
              <div className="text-black max-w-full sm:max-w-md md:max-w-lg space-y-3 sm:space-y-4 hidden sm:block">
                <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-snug">
                  High Quality Photo Retouching Service In Photoshop
                </h1>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base">
                  <li>• Glamour Retouch</li>
                  <li>• Product Photo Retouch</li>
                  <li>• Ecommerce Photo Retouch</li>
                  <li>• Photo Restoration</li>
                </ul>
                <button className="mt-2 sm:mt-3 md:mt-4 bg-[#FF9F00] hover:bg-[#e68a00] text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all text-xs sm:text-sm md:text-base">
                  FREE TRIAL
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
