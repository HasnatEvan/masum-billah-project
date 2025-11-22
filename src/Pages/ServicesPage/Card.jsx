import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LazyImage from "../../Components/LazyImage";   // ✅ Lazy Image Import

import card1 from '../../assets/Service/SevicePage/clipping-path.jpg';
import card2 from '../../assets/Service/SevicePage/Multiple Clipping Path.jpg';
import card3 from '../../assets/Service/SevicePage/Ghost mannequin.jpg';
import card4 from '../../assets/Service/SevicePage/Background Remove.jpg';
import card5 from '../../assets/Service/SevicePage/Retouching Services.jpg';
import card6 from '../../assets/Service/SevicePage/masking.jpg';
import card7 from '../../assets/Service/SevicePage/Color Correction.jpg';
import card8 from '../../assets/Service/SevicePage/Image Reflection.jpg';
import card9 from '../../assets/Service/SevicePage/Image Shadowing.jpg';
import card10 from '../../assets/Service/SevicePage/Image Cropping.jpg';
import card11 from '../../assets/Service/SevicePage/Image restoration.jpg';
import card12 from '../../assets/Service/SevicePage/Raster to vector.jpg';
import card13 from '../../assets/Service/SevicePage/Car Image Editing.jpg';

const services = [
  { img: card1, title: "Clipping Path", desc: "Precisely separate objects from backgrounds to create clean, professional product images.", link: "/services/clipping" },
  { img: card2, title: "Multiple Clipping Path", desc: "Expertly manage complex designs by creating multiple paths with precision for advanced editing requirements.", link: "/services/multiple-clipping" },
  { img: card3, title: "Ghost Mannequin", desc: "Remove mannequins seamlessly to create a clean, professional 3D look for apparel images.", link: "/services/ghost-mannequin" },
  { img: card4, title: "Background Remove", desc: "Remove unwanted background & highlight your product with a clean or transparent background.", link: "/services/background-remove" },
  { img: card5, title: "Photo Retouching", desc: "Enhance images by removing flaws, adjusting colors, and polishing with a professional touch.", link: "/services/photo-retouching" },
  { img: card6, title: "Image Masking", desc: "Precisely handle intricate details such as hair and fur to deliver flawless editing results.", link: "/services/image-masking" },
  { img: card7, title: "Color Correction", desc: "Adjust and balance colors for consistency, add vibrancy, and enhance the overall visual appeal.", link: "/services/color-correction" },
  { img: card8, title: "Image Reflection", desc: "Add realistic reflections to create a polished, high-quality look for your product images.", link: "/services/image-reflection" },
  { img: card9, title: "Image Shadowing", desc: "Create natural shadows with precision, adding depth and dimension to your product images.", link: "/services/image-shadowing" },
  { img: card10, title: "Image Cropping", desc: "Perfectly crop and resize images to match your specific needs and industry standards.", link: "/services/image-cropping" },
  { img: card11, title: "Photo Restoration", desc: "Restore old or damaged photos, reviving original details, colors, and quality.", link: "/services/photo-restoration" },
  { img: card12, title: "Raster to Vector", desc: "Convert raster files into vector graphics, ensuring clean, scalable, and professional-quality results.", link: "/services/raster-to-vector" },
  { img: card13, title: "Car Image Editing", desc: "Enhance car photos by removing scratches, dust, or reflections for a flawless and polished look.", link: "/services/car-image-editing" }
];

const Card = () => {
  return (
    <section className="bg-[#f9fbff] py-12 sm:py-16 lg:py-20">
      <div className="px-4 sm:px-6 lg:px-0 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">

          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 md:p-8 flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >

              {/* 🔥 FAST LOADING IMAGE */}
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 flex justify-center items-center mb-4">
                <LazyImage
                  src={service.img}
                  alt={service.title}
                  width="240"
                  height="240"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col items-start text-left w-full">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-500 text-xs sm:text-sm md:text-base mb-4">
                  {service.desc}
                </p>

                <Link to={service.link}>
                  <button className="
  text-blue-600 
  hover:text-blue-900 
  font-medium flex items-center gap-2 
  hover:gap-3 transition-all duration-300 
  text-sm sm:text-base md:text-lg
">
                    More Details <FaArrowRight />
                  </button>

                </Link>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Card;
