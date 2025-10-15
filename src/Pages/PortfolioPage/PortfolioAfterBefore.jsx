import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { motion } from "framer-motion";

// ====== Import all your images ======
import ClippingPathImage1 from "../../../src/assets/Portfolio/Clipping Path/image (1).png";
import ClippingPathImage2 from "../../../src/assets/Portfolio/Clipping Path/image (2).png";
import ClippingPathImage3 from "../../../src/assets/Portfolio/Clipping Path/image (3).png";
import ClippingPathImage4 from "../../../src/assets/Portfolio/Clipping Path/image (4).png";
import ClippingPathImage5 from "../../../src/assets/Portfolio/Clipping Path/image (5).png";
import ClippingPathImage6 from "../../../src/assets/Portfolio/Clipping Path/image (6).png";

import MultipleClippingImage1 from "../../../src/assets/Portfolio/Multiple Clipping/image (1).png";
import MultipleClippingImage2 from "../../../src/assets/Portfolio/Multiple Clipping/image (2).png";
import MultipleClippingImage3 from "../../../src/assets/Portfolio/Multiple Clipping/image (3).png";
import MultipleClippingImage4 from "../../../src/assets/Portfolio/Multiple Clipping/image (4).png";
import MultipleClippingImage5 from "../../../src/assets/Portfolio/Multiple Clipping/image (5).png";
import MultipleClippingImage6 from "../../../src/assets/Portfolio/Multiple Clipping/image (6).png";

import GhostMannequinImage1 from "../../../src/assets/Portfolio/Ghost Mannequin/image (1).png";
import GhostMannequinImage2 from "../../../src/assets/Portfolio/Ghost Mannequin/image (2).png";
import GhostMannequinImage3 from "../../../src/assets/Portfolio/Ghost Mannequin/image (3).png";
import GhostMannequinImage4 from "../../../src/assets/Portfolio/Ghost Mannequin/image (4).png";
import GhostMannequinImage5 from "../../../src/assets/Portfolio/Ghost Mannequin/image (5).png";
import GhostMannequinImage6 from "../../../src/assets/Portfolio/Ghost Mannequin/image (6).png";

import BackgroundRemoveImage1 from "../../../src/assets/Portfolio/Background Remove/image (1).png";
import BackgroundRemoveImage2 from "../../../src/assets/Portfolio/Background Remove/image (2).png";
import BackgroundRemoveImage3 from "../../../src/assets/Portfolio/Background Remove/image (3).png";
import BackgroundRemoveImage4 from "../../../src/assets/Portfolio/Background Remove/image (4).png";
import BackgroundRemoveImage5 from "../../../src/assets/Portfolio/Background Remove/image (5).png";
import BackgroundRemoveImage6 from "../../../src/assets/Portfolio/Background Remove/image (6).png";

import PhotoRetouchingImage1 from "../../../src/assets/Portfolio/Photo Retouching/image (1).png";
import PhotoRetouchingImage2 from "../../../src/assets/Portfolio/Photo Retouching/image (2).png";
import PhotoRetouchingImage3 from "../../../src/assets/Portfolio/Photo Retouching/image (3).png";
import PhotoRetouchingImage4 from "../../../src/assets/Portfolio/Photo Retouching/image (4).png";
import PhotoRetouchingImage5 from "../../../src/assets/Portfolio/Photo Retouching/image (5).png";
import PhotoRetouchingImage6 from "../../../src/assets/Portfolio/Photo Retouching/image (6).png";

import ImageMaskingImage1 from "../../../src/assets/Portfolio/Image Masking/image (1).png";
import ImageMaskingImage2 from "../../../src/assets/Portfolio/Image Masking/image (2).png";
import ImageMaskingImage3 from "../../../src/assets/Portfolio/Image Masking/image (3).png";
import ImageMaskingImage4 from "../../../src/assets/Portfolio/Image Masking/image (4).png";
import ImageMaskingImage5 from "../../../src/assets/Portfolio/Image Masking/image (5).png";
import ImageMaskingImage6 from "../../../src/assets/Portfolio/Image Masking/image (6).png";

import ColorCorrectionImage1 from "../../../src/assets/Portfolio/Color Correction/Image (1).png";
import ColorCorrectionImage2 from "../../../src/assets/Portfolio/Color Correction/Image (2).png";
import ColorCorrectionImage3 from "../../../src/assets/Portfolio/Color Correction/Image (3).png";
import ColorCorrectionImage4 from "../../../src/assets/Portfolio/Color Correction/Image (4).png";
import ColorCorrectionImage5 from "../../../src/assets/Portfolio/Color Correction/Image (5).png";
import ColorCorrectionImage6 from "../../../src/assets/Portfolio/Color Correction/Image (6).png";

import ImageReflectionImage1 from "../../../src/assets/Portfolio/Image Reflection/image (1).png";
import ImageReflectionImage2 from "../../../src/assets/Portfolio/Image Reflection/image (2).png";
import ImageReflectionImage3 from "../../../src/assets/Portfolio/Image Reflection/image (3).png";
import ImageReflectionImage4 from "../../../src/assets/Portfolio/Image Reflection/image (4).png";
import ImageReflectionImage5 from "../../../src/assets/Portfolio/Image Reflection/image (5).png";
import ImageReflectionImage6 from "../../../src/assets/Portfolio/Image Reflection/image (6).png";


import ImageShadowingImage1 from "../../../src/assets/Portfolio/Image Shadowing/image (1).png";
import ImageShadowingImage2 from "../../../src/assets/Portfolio/Image Shadowing/image (2).png";
import ImageShadowingImage3 from "../../../src/assets/Portfolio/Image Shadowing/image (3).png";
import ImageShadowingImage4 from "../../../src/assets/Portfolio/Image Shadowing/image (4).png";
import ImageShadowingImage5 from "../../../src/assets/Portfolio/Image Shadowing/image (5).png";
import ImageShadowingImage6 from "../../../src/assets/Portfolio/Image Shadowing/image (6).png";

import ImageCleaningImage1 from "../../../src/assets/Portfolio/Image Cleaning/image (1).png";
import ImageCleaningImage2 from "../../../src/assets/Portfolio/Image Cleaning/image (2).png";
import ImageCleaningImage3 from "../../../src/assets/Portfolio/Image Cleaning/image (3).png";
import ImageCleaningImage4 from "../../../src/assets/Portfolio/Image Cleaning/image (4).png";
import ImageCleaningImage5 from "../../../src/assets/Portfolio/Image Cleaning/image (5).png";
import ImageCleaningImage6 from "../../../src/assets/Portfolio/Image Cleaning/image (6).png";


// (আপনি চাইলে অন্য সব service-এর images একইভাবে import করতে পারেন)

const PortfolioAfterBefore = () => {
  const services = [
    {
      name: "Clipping Path Service",
      images: [
        [ClippingPathImage1, ClippingPathImage2],
        [ClippingPathImage3, ClippingPathImage4],
        [ClippingPathImage5, ClippingPathImage6],
      ],
    },
    {
      name: "Multiple Clipping Service",
      images: [
        [MultipleClippingImage1, MultipleClippingImage2],
        [MultipleClippingImage3, MultipleClippingImage4],
        [MultipleClippingImage5, MultipleClippingImage6],
      ],
    },
    {
      name: "Ghost Mannequin Service",
      images: [
        [GhostMannequinImage1, GhostMannequinImage2],
        [GhostMannequinImage3, GhostMannequinImage4],
        [GhostMannequinImage5, GhostMannequinImage6],
      ],
    },
    {
      name: "Background Remove Service",
      images: [
        [BackgroundRemoveImage1, BackgroundRemoveImage2],
        [BackgroundRemoveImage3, BackgroundRemoveImage4],
        [BackgroundRemoveImage5, BackgroundRemoveImage6],
      ],
    },
    {
      name: "Photo Retouching Service",
      images: [
        [PhotoRetouchingImage1, PhotoRetouchingImage2],
        [PhotoRetouchingImage3, PhotoRetouchingImage4],
        [PhotoRetouchingImage5, PhotoRetouchingImage6],
      ],
    },
    {
      name: "Image Masking Service",
      images: [
        [ImageMaskingImage1, ImageMaskingImage2],
        [ImageMaskingImage3, ImageMaskingImage4],
        [ImageMaskingImage5, ImageMaskingImage6],
      ],
    },
    {
      name: "Color Correction Service",
      images: [
        [ColorCorrectionImage1, ColorCorrectionImage2],
        [ColorCorrectionImage3, ColorCorrectionImage4],
        [ColorCorrectionImage5, ColorCorrectionImage6],
      ],
    },
    {
      name: "Image Reflection Service",
      images: [
        [ImageReflectionImage1, ImageReflectionImage2],
        [ImageReflectionImage3, ImageReflectionImage4],
        [ImageReflectionImage5, ImageReflectionImage6],
      ],
    },
  {
  name: "Image Shadowing Service",
  images: [
    [ImageShadowingImage1, ImageShadowingImage2],
    [ImageShadowingImage3, ImageShadowingImage4],
    [ImageShadowingImage5, ImageShadowingImage6],
  ],
},
{
  name: "Image Cleaning Service",
  images: [
    [ImageCleaningImage1, ImageCleaningImage2],
    [ImageCleaningImage3, ImageCleaningImage4],
    [ImageCleaningImage5, ImageCleaningImage6],
  ],
},


  ];
  return (
    <section className="bg-[#F3F6FF] py-16 px-4 sm:px-6 lg:px-16 xl:px-24">
      <div className="max-w-6xl mx-auto space-y-16">
        {services.map((service, idx) => (
          <div key={idx}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center lg:text-left">
              {service.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.images.map(([before, after], i) => (
                <motion.div
                  key={i}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  {/* ✅ Top window dots */}
                  <div className="absolute top-0 left-0 right-0 h-10 flex items-center px-4 bg-gradient-to-b from-white/90 to-white/70 border-b border-white/50 z-20">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                    </div>
                  </div>

                  {/* ✅ Image Compare Slider */}
                  <div className="mt-10">
                    <ReactCompareSlider
                      itemOne={<ReactCompareSliderImage src={before} alt="Before" />}
                      itemTwo={<ReactCompareSliderImage src={after} alt="After" />}
                      position={50}
                      style={{ width: "100%", height: "260px" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioAfterBefore;
