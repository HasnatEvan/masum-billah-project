import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../../assets/Hero/image (1).jpg";
import image2 from "../../assets/Hero/image (2).jpg";
import image3 from "../../assets/Hero/image (3).jpg";
import { Link } from "react-router-dom";

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

  // Slide data (3 ta alada content)
  const slides = [
    {
      image: image1,
      title: (
        <>
          High Quality <br />
          Photo Retouching <br />
          Service In Photoshop
        </>
      ),
      details:
        "Glamour Retouch | Ecommerce Photo Retouch | Photo Restoration | Product Photo Retouch",
    },
    {
      image: image2,
      title: (
        <>
          Professional <br />
          Photo Masking <br />
          Service
        </>
      ),
      details:
        "Alpha Channel Masking | Complex Layer Masking | Object Masking | Transparency Masking",
    },
    {
      image: image3,
      title: (
        <>
          Professional Ghost Mannequin <br />
          Service for Apparel & <br />
          Fashion Photography
        </>
      ),
      details:
        "Neck Joint | Invisible Mannequin | 3D Apparel Retouch | Apparel Image Enhancement",
    },
  ];

  return (
    <div className="relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={`Banner ${index + 1}`}
              className="w-full h-auto object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex items-center px-4 sm:px-6 md:px-12 lg:px-20">
              <div className="text-black max-w-full sm:max-w-md md:max-w-lg space-y-3 sm:space-y-4 hidden sm:block">
                <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-snug">
                  {slide.title}
                </h1>
                <p className="text-xs sm:text-sm md:text-base">{slide.details}</p>

                <Link to="/free-trial">
                  <button className="mt-2 sm:mt-3 md:mt-4 bg-[#0046FF] hover:bg-[#0033cc] text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all text-xs sm:text-sm md:text-base">
                    FREE TRIAL
                  </button>
                </Link>

              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
