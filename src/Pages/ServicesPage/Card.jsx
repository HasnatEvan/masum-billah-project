import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

import card1 from '../../assets/Service/CardImage (1).png';
import card2 from '../../assets/Service/CardImage (2).png';
import card3 from '../../assets/Service/CardImage (3).png';
import card4 from '../../assets/Service/CardImage (4).png';
import card5 from '../../assets/Service/CardImage (5).png';
import card6 from '../../assets/Service/CardImage (6).png';
import card7 from '../../assets/Service/CardImage (7).png';
import card8 from '../../assets/Service/CardImage (8).png';
import card9 from '../../assets/Service/CardImage (9).png';
import card10 from '../../assets/Service/CardImage (10).png';
import card11 from '../../assets/Service/CardImage (11).png';
import card12 from '../../assets/Service/CardImage (12).png';
import card13 from '../../assets/Service/CardImage (13).png';

const services = [
  { img: card1, title: "Clipping Path", desc: "Precisely isolate objects from backgrounds for clean, professional product images.", link: "/services/clipping" },
  { img: card2, title: "Multiple Clipping Path", desc: "Handle intricate designs with precision, creating multiple paths for complex editing needs.", link: "/services/multiple-clipping" },
  { img: card3, title: "Ghost Mannequin", desc: "Remove mannequins to create a seamless, professional 3D look for apparel images.", link: "/services/ghost-mannequin" },
  { img: card4, title: "Background Remove", desc: "Eliminate unwanted background & highlighting your product with clean or transparent background.", link: "/services/background-remove" },
  { img: card5, title: "Photo Retouching", desc: "Enhance images by removing imperfections, adjusting colors & polishing with professional touch", link: "/services/photo-retouching" },
  { img: card6, title: "Image Masking", desc: "Handle detailed subjects like hair and fur with precision, delivering flawless editing results.", link: "/services/image-masking" },
  { img: card7, title: "Color Correction", desc: "Adjust & enhance color for consistency, vibrancy & improved visual appeal of images.", link: "/services/color-correction" },
  { img: card8, title: "Image Reflection", desc: "Add realistic reflections to create a polished, high-quality look for your product images.", link: "/services/image-reflection" },
  { img: card9, title: "Image Shadowing", desc: "Create natural shadows to add depth & dimension improving the overall look of products.", link: "/services/image-shadowing" },
  { img: card10, title: "Image Cleaning", desc: "Remove unwanted spots, dust, distractions for clean professional-quality images.", link: "/services/image-cleaning" },
  { img: card11, title: "Image Cropping", desc: "Perfectly crop and resize images to meet your specific needs and industry standards.", link: "/services/image-cropping" },
  { img: card12, title: "Photo Restoration", desc: "Revive old or damaged photos by restoring details, colors and quality to their original glory.", link: "/services/photo-restoration" },
  { img: card13, title: "Raster to Vector", desc: "Convert raster images to clean, scalable vector files for professional use.", link: "/services/raster-to-vector" }
];

const Card = () => {
  return (
    <section className="bg-[#f9fbff] py-16">
      <div className="px-6 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}          // নিচ থেকে শুরু
            whileInView={{ opacity: 1, y: 0 }}      // scroll করার সময় উঠবে
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }} // staggered effect
          >
            <div className="w-40 h-40 flex justify-center items-center mb-4">
              <img src={service.img} alt={service.title} className="w-full h-full object-contain" />
            </div>

            <div className="flex flex-col items-start text-left w-full">
              <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{service.desc}</p>
              <Link to={service.link}>
                <button className="text-blue-600 font-medium flex items-center gap-2 hover:gap-3 transition-all duration-300">
                  More Details <FaArrowRight />
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Card;
