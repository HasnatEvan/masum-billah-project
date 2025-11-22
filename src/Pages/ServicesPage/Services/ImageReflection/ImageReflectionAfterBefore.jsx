import React, { memo } from "react";
import { motion } from "framer-motion";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

// Import all 4 images
import image1 from '../../../../../src/assets/Service/SevicePage/SeviceDeatils/Image Reflection/image (1).jpg';
import image2 from '../../../../../src/assets/Service/SevicePage/SeviceDeatils/Image Reflection/image (2).jpg';
import image3 from '../../../../../src/assets/Service/SevicePage/SeviceDeatils/Image Reflection/image (3).jpg';
import image4 from '../../../../../src/assets/Service/SevicePage/SeviceDeatils/Image Reflection/image (4).jpg';


// 🔥 Memoized Fast Slider Component
const FastSlider = memo(({ before, after }) => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true }}  // One-time animation = faster scroll
    className="relative bg-white rounded-2xl shadow-xl overflow-hidden"
  >
    {/* Header Dots */}
    <div className="absolute top-0 left-0 right-0 h-10 
        flex items-center px-4 lg:px-8 
        bg-gradient-to-b from-white/90 to-white/70 
        border-b border-white/50 z-20">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
      </div>
    </div>

    {/* Slider */}
    <div className="mt-10 sm:mt-12 
        h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px] 
        relative overflow-hidden">

      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src={after}
            alt="After"
            loading="lazy"  // 🚀 Lazy load added
            style={{ objectFit: "contain" }}
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={before}
            alt="Before"
            loading="lazy"
            style={{ objectFit: "contain" }}
          />
        }
        position={50}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  </motion.div>
));


const ImageReflectionAfterBefore = () => {
  return (
    <section className="bg-[#F3F6FF] py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 
          grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">

        <FastSlider before={image1} after={image2} />
        <FastSlider before={image3} after={image4} />

      </div>
    </section>
  );
};

export default ImageReflectionAfterBefore;
