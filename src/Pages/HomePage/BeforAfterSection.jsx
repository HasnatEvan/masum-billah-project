import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

import imageBefore from "../../assets/Images/popular before.jpg";
import imageAfter from "../../assets/Images/popular after.jpg";

const BeforAfterSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <p className="text-sm text-purple-600 font-semibold mb-3">
            Before & After
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3B0EA6] leading-tight mb-6">
            Our Most Exclusive <br className="hidden sm:block" /> Photo-Editing Services
          </h2>

          <p className="text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base">
            For over 5 years, Graphics Amazon has been providing premium photo-editing services to eCommerce businesses, agencies, and studios. Committed to both quality and efficiency, we deliver cost-effective solutions with fast turnaround times. Place your order today and take advantage of remarkable savings, especially on bulk projects. Don’t miss the chance to benefit from exclusive discounts on large-scale orders!
          </p>

          <Link to="/services">
            <button className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border-2 border-purple-600 text-purple-700 font-medium hover:bg-purple-600 hover:text-white transition text-sm sm:text-base">
              View All Services <FaArrowRight />
            </button>
          </Link>
        </motion.div>

        {/* Right Image Compare Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center"
        >
          <div className="relative w-[300px] sm:w-[400px] lg:w-[500px] rounded-2xl bg-white shadow-xl overflow-hidden">
            
            {/* Top Dots */}
            <div className="absolute top-0 left-0 right-0 h-10 sm:h-12 flex items-center px-4 bg-gradient-to-b from-white/90 to-white/70 border-b border-white/50 z-20">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
              </div>
            </div>

            {/* Image Compare */}
            <div className="mt-10 sm:mt-12 h-[300px] sm:h-[400px] lg:h-[500px] relative">
              <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={imageBefore} alt="Before" />}
                itemTwo={<ReactCompareSliderImage src={imageAfter} alt="After" />}
                position={50}
                style={{ width: "100%", height: "100%" }}
              />

              {/* Before Label */}
              <div className="absolute top-1/2 right-4 -translate-y-1/2 bg-purple-700 text-white px-2 py-1 rounded-md text-xs sm:text-sm">
                Before
              </div>

              {/* After Label */}
              <div className="absolute top-1/2 left-4 -translate-y-1/2 bg-purple-700 text-white px-2 py-1 rounded-md text-xs sm:text-sm">
                After
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforAfterSection;
