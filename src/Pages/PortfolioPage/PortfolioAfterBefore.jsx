import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { motion } from "framer-motion";
import { useEffect } from "react";

// ====== Import all images (unchanged) ======
import ClippingPathImage1 from "../../../src/assets/Portfolio/Clipping Path/image (1).jpg";
import ClippingPathImage2 from "../../../src/assets/Portfolio/Clipping Path/image (2).jpg";
import ClippingPathImage3 from "../../../src/assets/Portfolio/Clipping Path/image (3).jpg";
import ClippingPathImage4 from "../../../src/assets/Portfolio/Clipping Path/image (4).jpg";
import ClippingPathImage5 from "../../../src/assets/Portfolio/Clipping Path/image (5).jpg";
import ClippingPathImage6 from "../../../src/assets/Portfolio/Clipping Path/image (6).jpg";

import MultipleClippingImage1 from "../../../src/assets/Portfolio/Multiple Clipping/image (1).jpg";
import MultipleClippingImage2 from "../../../src/assets/Portfolio/Multiple Clipping/image (2).jpg";
import MultipleClippingImage3 from "../../../src/assets/Portfolio/Multiple Clipping/image (3).jpg";
import MultipleClippingImage4 from "../../../src/assets/Portfolio/Multiple Clipping/image (4).jpg";
import MultipleClippingImage5 from "../../../src/assets/Portfolio/Multiple Clipping/image (5).jpg";
import MultipleClippingImage6 from "../../../src/assets/Portfolio/Multiple Clipping/image (6).jpg";


import GhostMannequinImage1 from "../../../src/assets/Portfolio/Ghost Mannequin/image (1).jpg";
import GhostMannequinImage2 from "../../../src/assets/Portfolio/Ghost Mannequin/image (2).jpg";
import GhostMannequinImage3 from "../../../src/assets/Portfolio/Ghost Mannequin/image (3).jpg";
import GhostMannequinImage4 from "../../../src/assets/Portfolio/Ghost Mannequin/image (4).jpg";
import GhostMannequinImage5 from "../../../src/assets/Portfolio/Ghost Mannequin/image (5).jpg";
import GhostMannequinImage6 from "../../../src/assets/Portfolio/Ghost Mannequin/image (6).jpg";

import BackgroundRemoveImage1 from "../../../src/assets/Portfolio/Background Remove/image (1).jpg";
import BackgroundRemoveImage2 from "../../../src/assets/Portfolio/Background Remove/image (2).jpg";
import BackgroundRemoveImage3 from "../../../src/assets/Portfolio/Background Remove/image (3).jpg";
import BackgroundRemoveImage4 from "../../../src/assets/Portfolio/Background Remove/image (4).jpg";
import BackgroundRemoveImage5 from "../../../src/assets/Portfolio/Background Remove/image (5).jpg";
import BackgroundRemoveImage6 from "../../../src/assets/Portfolio/Background Remove/image (6).jpg";


import PhotoRetouchingImage1 from "../../../src/assets/Portfolio/Photo Retouching/image (1).jpg";
import PhotoRetouchingImage2 from "../../../src/assets/Portfolio/Photo Retouching/image (2).jpg";
import PhotoRetouchingImage3 from "../../../src/assets/Portfolio/Photo Retouching/image (3).jpg";
import PhotoRetouchingImage4 from "../../../src/assets/Portfolio/Photo Retouching/image (4).jpg";
import PhotoRetouchingImage5 from "../../../src/assets/Portfolio/Photo Retouching/image (5).jpg";
import PhotoRetouchingImage6 from "../../../src/assets/Portfolio/Photo Retouching/image (6).jpg";

import ImageMaskingImage1 from "../../../src/assets/Portfolio/Image Masking/image (1).jpg";
import ImageMaskingImage2 from "../../../src/assets/Portfolio/Image Masking/image (2).jpg";
import ImageMaskingImage3 from "../../../src/assets/Portfolio/Image Masking/image (3).jpg";
import ImageMaskingImage4 from "../../../src/assets/Portfolio/Image Masking/image (4).jpg";
import ImageMaskingImage5 from "../../../src/assets/Portfolio/Image Masking/image (5).jpg";
import ImageMaskingImage6 from "../../../src/assets/Portfolio/Image Masking/image (6).jpg";


import ColorCorrectionImage1 from "../../../src/assets/Portfolio/Color Correction/Image (1).jpg";
import ColorCorrectionImage2 from "../../../src/assets/Portfolio/Color Correction/Image (2).jpg";
import ColorCorrectionImage3 from "../../../src/assets/Portfolio/Color Correction/Image (3).jpg";
import ColorCorrectionImage4 from "../../../src/assets/Portfolio/Color Correction/Image (4).jpg";
import ColorCorrectionImage5 from "../../../src/assets/Portfolio/Color Correction/Image (5).jpg";
import ColorCorrectionImage6 from "../../../src/assets/Portfolio/Color Correction/Image (6).jpg";

import ImageReflectionImage1 from "../../../src/assets/Portfolio/Image Reflection/image (1).jpg";
import ImageReflectionImage2 from "../../../src/assets/Portfolio/Image Reflection/image (2).jpg";
import ImageReflectionImage3 from "../../../src/assets/Portfolio/Image Reflection/image (3).jpg";
import ImageReflectionImage4 from "../../../src/assets/Portfolio/Image Reflection/image (4).jpg";
import ImageReflectionImage5 from "../../../src/assets/Portfolio/Image Reflection/image (5).jpg";
import ImageReflectionImage6 from "../../../src/assets/Portfolio/Image Reflection/image (6).jpg";


import ImageShadowingImage1 from "../../../src/assets/Portfolio/Image Shadowing/image (1).jpg";
import ImageShadowingImage2 from "../../../src/assets/Portfolio/Image Shadowing/image (2).jpg";
import ImageShadowingImage3 from "../../../src/assets/Portfolio/Image Shadowing/image (3).jpg";
import ImageShadowingImage4 from "../../../src/assets/Portfolio/Image Shadowing/image (4).jpg";
import ImageShadowingImage5 from "../../../src/assets/Portfolio/Image Shadowing/image (5).jpg";
import ImageShadowingImage6 from "../../../src/assets/Portfolio/Image Shadowing/image (6).jpg";

import ImageCleaningImage1 from "../../../src/assets/Portfolio/Image Cleaning/image (1).jpg";
import ImageCleaningImage2 from "../../../src/assets/Portfolio/Image Cleaning/image (2).jpg";
import ImageCleaningImage3 from "../../../src/assets/Portfolio/Image Cleaning/image (3).jpg";
import ImageCleaningImage4 from "../../../src/assets/Portfolio/Image Cleaning/image (4).jpg";
import ImageCleaningImage5 from "../../../src/assets/Portfolio/Image Cleaning/image (5).jpg";
import ImageCleaningImage6 from "../../../src/assets/Portfolio/Image Cleaning/image (6).jpg";

import ImagePhotoRestoration1 from "../../../src/assets/Portfolio/Photo Restoration/image (1).jpg";
import ImagePhotoRestoration2 from "../../../src/assets/Portfolio/Photo Restoration/image (2).jpg";
import ImagePhotoRestoration3 from "../../../src/assets/Portfolio/Photo Restoration/image (3).jpg";
import ImagePhotoRestoration4 from "../../../src/assets/Portfolio/Photo Restoration/image (4).jpg";
import ImagePhotoRestoration5 from "../../../src/assets/Portfolio/Photo Restoration/image (5).jpg";
import ImagePhotoRestoration6 from "../../../src/assets/Portfolio/Photo Restoration/image (6).jpg";

import CarImageEditing1 from "../../../src/assets/Portfolio/Car Image Editing/image (1).jpg";
import CarImageEditing2 from "../../../src/assets/Portfolio/Car Image Editing/image (2).jpg";
import CarImageEditing3 from "../../../src/assets/Portfolio/Car Image Editing/image (3).jpg";
import CarImageEditing4 from "../../../src/assets/Portfolio/Car Image Editing/image (4).jpg";
import CarImageEditing5 from "../../../src/assets/Portfolio/Car Image Editing/image (5).jpg";
import CarImageEditing6 from "../../../src/assets/Portfolio/Car Image Editing/image (6).jpg";


import RasterToVector1 from "../../../src/assets/Portfolio/Raster to Vector/image (1).jpg";
import RasterToVector2 from "../../../src/assets/Portfolio/Raster to Vector/image (2).jpg";
import RasterToVector3 from "../../../src/assets/Portfolio/Raster to Vector/image (3).jpg";
import RasterToVector4 from "../../../src/assets/Portfolio/Raster to Vector/image (4).jpg";
import RasterToVector5 from "../../../src/assets/Portfolio/Raster to Vector/image (5).jpg";
import RasterToVector6 from "../../../src/assets/Portfolio/Raster to Vector/image (6).jpg";

// … (তোমার existing imports same থাকবে)

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
    {
      name: "Photo Restoration Service",
      images: [
        [ImagePhotoRestoration1, ImagePhotoRestoration2],
        [ImagePhotoRestoration3, ImagePhotoRestoration4],
        [ImagePhotoRestoration5, ImagePhotoRestoration6],
      ],
    },

    {
      name: "Car Image Editing Service",
      images: [
        [CarImageEditing1, CarImageEditing2],
        [CarImageEditing3, CarImageEditing4],
        [CarImageEditing5, CarImageEditing6],
      ],
    },
    {
      name: "Raster to Vector Service",
      images: [
        [RasterToVector1, RasterToVector2],
        [RasterToVector3, RasterToVector4],
        [RasterToVector5, RasterToVector6],
      ],
    },

  ];

  // ⭐ PRELOAD NEXT IMAGE for smoother experience
  useEffect(() => {
    services.forEach((service) => {
      service.images.forEach(([before, after]) => {
        const img1 = new Image();
        img1.src = before;

        const img2 = new Image();
        img2.src = after;
      });
    });
  }, []);

  return (
    <section className="bg-[#F3F6FF] py-16 px-4 sm:px-6 lg:px-16 xl:px-24">
      <div className="max-w-6xl mx-auto space-y-16">

        {services.map((service, idx) => (
          <div key={idx}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-left lg:text-left">
              {service.name}
            </h2>

            {/* Grid */}
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
                  {/* Top Window Dots */}
                  <div className="absolute top-0 left-0 right-0 h-10 flex items-center px-4 
                                bg-gradient-to-b from-white/95 to-white/70 border-b border-white/50 z-20">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                    </div>
                  </div>

                  {/* 🔥 FAST LOAD COMPARE SLIDER */}
                 <div className="mt-10">
  <ReactCompareSlider
    itemOne={
      <ReactCompareSliderImage
        src={before}
        alt="Before"
        loading="lazy"
        decoding="async"
        fetchpriority="low"
        referrerPolicy="no-referrer"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",   // ⭐ FULL IMAGE দেখা যাবে
        }}
      />
    }
    itemTwo={
      <ReactCompareSliderImage
        src={after}
        alt="After"
        loading="lazy"
        decoding="async"
        fetchpriority="low"
        referrerPolicy="no-referrer"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",   // ⭐ FULL IMAGE দেখা যাবে
        }}
      />
    }
    position={50}
    style={{
      width: "100%",
      height: "auto",
    }}
    className="w-full 
               h-[220px]     /* ⭐ Mobile */
               sm:h-[260px]  /* ⭐ Small */
               md:h-[320px]  /* ⭐ Tablet */
               lg:h-[360px]  /* ⭐ Laptop */
               xl:h-[420px]  /* ⭐ Large Desktop */"
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
