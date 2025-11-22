import { useRef, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import LazyImage from "../../Components/LazyImage";

import card1 from '../../assets/Service/clipping path service.jpg';
import card2 from '../../assets/Service/multiple-clipping-path-services.jpg';
import card3 from '../../assets/Service/ghost-mannequin-services.jpg';
import card4 from '../../assets/Service/background-remove-services.jpg';
import card5 from '../../assets/Service/photo retouching service.jpg';
import card6 from '../../assets/Service/image-masking service.jpg';
import card7 from '../../assets/Service/color correction service.jpg';
import card8 from '../../assets/Service/image reflection service.jpg';
import card9 from '../../assets/Service/image shadowing services.jpg';
import card10 from '../../assets/Service/image cropping service.jpg';
import card11 from '../../assets/Service/photo restoration service.jpg';
import card12 from '../../assets/Service/raster-to-vector.jpg';
import card13 from '../../assets/Service/car-image-editing.jpg';

const OurServicesSection = () => {
  const scrollRef = useRef(null);

  // ⭐ PRELOAD IMAGES FOR INSTANT LOADING WHEN SLIDING
  useEffect(() => {
    const allImages = [
      card1, card2, card3, card4, card5, card6,
      card7, card8, card9, card10, card11, card12, card13
    ];

    allImages.forEach(img => {
      const preload = new Image();
      preload.src = img;
    });
  }, []);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const cardWidth = container.offsetWidth * 0.8 + 24;
    container.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth"
    });
  };

  const services = [
    { img: card1, title: "Clipping Path Service", price: "$0.29", link: "/services/clipping" },
    { img: card2, title: "Multiple Clipping Path Service", price: "$0.89", link: "/services/multiple-clipping" },
    { img: card3, title: "Ghost Mannequin or Neck Joint Service", price: "$0.49", link: "/services/ghost-mannequin" },
    { img: card4, title: "Background Remove or Transparent Background", price: "$0.29", link: "/services/background-remove" },
    { img: card5, title: "Photo Retouching Services", price: "$0.39", link: "/services/photo-retouching" },
    { img: card6, title: "Image Masking Service", price: "$0.39", link: "/services/image-masking" },
    { img: card7, title: "Color Correction Service", price: "$0.49", link: "/services/color-correction" },
    { img: card8, title: "Image Reflection Service", price: "$0.59", link: "/services/image-reflection" },
    { img: card9, title: "Image Shadowing Service", price: "$0.49", link: "/services/image-shadowing" },
    { img: card10, title: "Image Cropping Service", price: "$0.29", link: "/services/image-cropping" },
    { img: card11, title: "Photo Restoration Service", price: "$3.99", link: "/services/photo-restoration" },
    { img: card12, title: "Raster to Vector Service", price: "$1.99", link: "/services/raster-to-vector" },
    { img: card13, title: "Car Image Editing Service", price: "$0.39", link: "/services/car-image-editing" },
  ];

  return (
    <section className="bg-gradient-to-b from-[#E8F0FE] to-[#F5F9FF] py-12 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center md:text-left leading-snug">
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

        {/* CARD SCROLLER */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
          style={{ willChange: "transform" }} // 🚀 GPU BOOST
        >
          {services.map((service, i) => (
            <a
              key={i}
              href={service.link}
              className="snap-center flex-shrink-0 w-[80%] sm:w-[240px] md:w-[280px] lg:w-[320px] rounded-md shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 "
            >
              {/* IMAGE FIXED HEIGHT = NO LAYOUT SHIFT */}
              <div className="w-full h-56 sm:h-60 md:h-64 lg:h-72 bg-white flex items-center justify-center">
                <LazyImage
                  src={service.img}
                  alt={service.title}
                  width="100%"
                  height="100%"
                  className="w-full h-auto object-contain"
                />
              </div>


              {/* CONTENT */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-1 leading-snug">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  Starting at{" "}
                  <span className="text-[#FF9800] font-semibold">
                    {service.price}
                  </span>{" "}
                  per image
                </p>

                <button className="mt-3 w-10 h-10 rounded-full bg-[#5A8BFF] flex items-center justify-center text-white mx-auto hover:bg-[#4A7BE0] transition">
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
