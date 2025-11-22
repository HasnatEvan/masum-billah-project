import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LazyImage from "../../Components/LazyImage";
import image from "../../../src/assets/Price/price.png";

const DiscountSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="bg-gradient-to-r from-[#c5e2ff] to-[#dbe7ff] py-12 sm:py-16 md:py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 px-4 sm:px-6 md:px-8 lg:px-0 max-w-6xl mx-auto">

        {/* ===== Left Side Text ===== */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B0B0B] leading-snug sm:leading-tight mb-4 sm:mb-6 md:mb-8">
            Special Discount For <br /> Bulk Images!
          </h2>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0">
            We provide 100% handmade photo editing services using Photoshop.
            Get high-quality services delivered within 24 hours or less.
          </p>

          <Link to="/contact">
            <button className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full border border-[#4a4aff] text-[#4a4aff] font-semibold flex items-center justify-center gap-2 mx-auto lg:mx-0 hover:bg-[#4a4aff] hover:text-white transition-all duration-300">
              Contact Us <span className="text-lg">→</span>
            </button>
          </Link>
        </motion.div>

        {/* ===== Right Side Image - SUPER FAST LOADING ===== */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Link to="/about">
            <div className="cursor-pointer hover:scale-105 transition-transform duration-300 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-full">

              <LazyImage
                src={image}
                alt="Discount"
                width="500"
                height="500"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
                className="w-full h-auto rounded-xl object-contain"
              />

            </div>
          </Link>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default DiscountSection;
