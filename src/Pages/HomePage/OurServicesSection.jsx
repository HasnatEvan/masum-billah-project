import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import image1 from "../../../src/assets/OurSevice/CardImage (1).png";
import image2 from "../../../src/assets/OurSevice/CardImage (2).png";
import image3 from "../../../src/assets/OurSevice/CardImage (3).png";
import image4 from "../../../src/assets/OurSevice/CardImage (4).png";
import image5 from "../../../src/assets/OurSevice/CardImage (5).png";
import image6 from "../../../src/assets/OurSevice/CardImage (6).png";
import image7 from "../../../src/assets/OurSevice/CardImage (7).png";
import image8 from "../../../src/assets/OurSevice/CardImage (8).png";
import image9 from "../../../src/assets/OurSevice/CardImage (9).png";
import image10 from "../../../src/assets/OurSevice/CardImage (10).png";
import image11 from "../../../src/assets/OurSevice/CardImage (11).png";
import image12 from "../../../src/assets/OurSevice/CardImage (12).png";
import image13 from "../../../src/assets/OurSevice/CardImage (13).png";

const OurServicesSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const cardWidth = container.offsetWidth * 0.8 + 24; // 80% width + gap
    if (direction === "left") {
      container.scrollBy({ left: -cardWidth, behavior: "smooth" });
    } else {
      container.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  const services = [
    { img: image1, title: "Clipping Path", price: "€0.29", bg: "bg-[#FFF59D]", link: "/services/clipping" },
    { img: image2, title: "Multiple Clipping Path", price: "€0.99", bg: "bg-[#FFF59D]", link: "/services/multiple-clipping" },
    { img: image3, title: "Ghost Mannequin", price: "€0.69", bg: "bg-[#B9FF9F]", link: "/services/ghost-mannequin" },
    { img: image4, title: "Background Remove", price: "€0.35", bg: "bg-[#74E2FF]", link: "/services/background-remove" },
    { img: image5, title: "Photo Retouching", price: "€0.45", bg: "bg-[#B39DDB]", link: "/services/photo-retouching" },
    { img: image6, title: "Image Masking", price: "€0.89", bg: "bg-[#80CBC4]", link: "/services/image-masking" },
    { img: image7, title: "Color Correction", price: "€0.39", bg: "bg-[#E6EE9C]", link: "/services/color-correction" },
    { img: image8, title: "Image Reflection", price: "€0.55", bg: "bg-[#F8BBD0]", link: "/services/image-reflection" },
    { img: image9, title: "Image Shadowing", price: "€0.49", bg: "bg-[#FFD180]", link: "/services/image-shadowing" },
    { img: image10, title: "Image Cleaning", price: "€0.35", bg: "bg-[#B3E5FC]", link: "/services/image-cleaning" },
    { img: image11, title: "Image Cropping", price: "€0.25", bg: "bg-[#DCEDC8]", link: "/services/image-cropping" },
    { img: image12, title: "Photo Restoration", price: "€0.55", bg: "bg-[#FFAB91]", link: "/services/photo-restoration" },
    { img: image13, title: "Raster to Vector", price: "€1.99", bg: "bg-[#F48FB1]", link: "/services/raster-to-vector" },
  ];

  return (
    <section className="bg-gradient-to-b from-[#E8F0FE] to-[#F5F9FF] py-8 sm:py-12 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4 md:gap-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center md:text-left">
            Our most popular <br />
            <span className="text-gray-900">photo editing services</span>
          </h2>

          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 transition"
            >
              <FaArrowLeft className="text-[#5A8BFF]" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 transition"
            >
              <FaArrowRight className="text-[#5A8BFF]" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
        >
          {services.map((service, i) => (
            <a
              key={i}
              href={service.link}
              className={`snap-start flex-shrink-0 w-full sm:w-[240px] md:w-[280px] lg:w-[320px] bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300`}
            >

              <div className={`h-48 flex items-center justify-center ${service.bg}`}>
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-36 object-contain"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm">
                  Starting at{" "}
                  <span className="text-[#FF9800] font-semibold">{service.price}</span>{" "}
                  per image
                </p>
                <button className="mt-5 w-10 h-10 rounded-full bg-[#5A8BFF] flex items-center justify-center text-white mx-auto hover:bg-[#4A7BE0] transition">
                  <FaArrowRight />
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
