import React from "react";
import { motion } from "framer-motion";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

// Import 2 sets of before & after images
import before1 from "../../../../../src/assets/Portfolio/Multiple Clipping/image (1).jpg";
import after1 from "../../../../../src/assets/Portfolio/Multiple Clipping/image (2).jpg";

import before2 from "../../../../../src/assets/Portfolio/Multiple Clipping/image (3).jpg";
import after2 from "../../../../../src/assets/Portfolio/Multiple Clipping/image (4).jpg";

const MultipleClippingAfterBefore = () => {
  const renderSlider = (before, after) => (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
      className="relative bg-white rounded-2xl shadow-xl overflow-hidden"
    >
      {/* Header Dots */}
      <div className="absolute top-0 left-0 right-0 h-10 flex items-center px-4 lg:px-8 bg-gradient-to-b from-white/90 to-white/70 border-b border-white/50 z-20">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
        </div>
      </div>

      {/* React Compare Slider */}
      <div className="mt-10 sm:mt-12 h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px] relative rounded-2xl overflow-hidden">
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src={after} alt="After" style={{ objectFit: "contain" }} />}
          itemTwo={<ReactCompareSliderImage src={before} alt="Before" style={{ objectFit: "contain" }} />}
          position={50}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </motion.div>
  );

  return (
    <section className="bg-[#F3F6FF] py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
        {renderSlider(before1, after1)}
        {renderSlider(before2, after2)}
      </div>
    </section>
  );
};

export default MultipleClippingAfterBefore;
