import React, { useRef, useState, useEffect } from "react";

// Clipping Path Images
import ClippingPathImage1 from '../../../src/assets/Portfolio/Clipping Path/image (1).png'
import ClippingPathImage2 from '../../../src/assets/Portfolio/Clipping Path/image (2).png'
import ClippingPathImage3 from '../../../src/assets/Portfolio/Clipping Path/image (3).png'
import ClippingPathImage4 from '../../../src/assets/Portfolio/Clipping Path/image (4).png'
import ClippingPathImage5 from '../../../src/assets/Portfolio/Clipping Path/image (5).png'
import ClippingPathImage6 from '../../../src/assets/Portfolio/Clipping Path/image (6).png'

// Multiple Clipping Images
import MultipleClippingImage1 from '../../../src/assets/Portfolio/Multiple Clipping/image (1).png'
import MultipleClippingImage2 from '../../../src/assets/Portfolio/Multiple Clipping/image (2).png'
import MultipleClippingImage3 from '../../../src/assets/Portfolio/Multiple Clipping/image (3).png'
import MultipleClippingImage4 from '../../../src/assets/Portfolio/Multiple Clipping/image (4).png'
import MultipleClippingImage5 from '../../../src/assets/Portfolio/Multiple Clipping/image (5).png'
import MultipleClippingImage6 from '../../../src/assets/Portfolio/Multiple Clipping/image (6).png'

// Ghost Mannequin Images
import GhostMannequinImage1 from '../../../src/assets/Portfolio/Ghost Mannequin/image (1).png'
import GhostMannequinImage2 from '../../../src/assets/Portfolio/Ghost Mannequin/image (2).png'
import GhostMannequinImage3 from '../../../src/assets/Portfolio/Ghost Mannequin/image (3).png'
import GhostMannequinImage4 from '../../../src/assets/Portfolio/Ghost Mannequin/image (4).png'
import GhostMannequinImage5 from '../../../src/assets/Portfolio/Ghost Mannequin/image (5).png'
import GhostMannequinImage6 from '../../../src/assets/Portfolio/Ghost Mannequin/image (6).png'

// Background Remove Images
import BackgroundRemoveImage1 from  '../../../src/assets/Portfolio/Background Remove/image (1).png'
import BackgroundRemoveImage2 from  '../../../src/assets/Portfolio/Background Remove/image (2).png'
import BackgroundRemoveImage3 from  '../../../src/assets/Portfolio/Background Remove/image (3).png'
import BackgroundRemoveImage4 from  '../../../src/assets/Portfolio/Background Remove/image (4).png'
import BackgroundRemoveImage5 from  '../../../src/assets/Portfolio/Background Remove/image (5).png'
import BackgroundRemoveImage6 from  '../../../src/assets/Portfolio/Background Remove/image (6).png'

import PhotoRetouchingImage1 from '../../../src/assets/Portfolio/Photo Retouching/image (1).png';
import PhotoRetouchingImage2 from '../../../src/assets/Portfolio/Photo Retouching/image (2).png';
import PhotoRetouchingImage3 from '../../../src/assets/Portfolio/Photo Retouching/image (3).png';
import PhotoRetouchingImage4 from '../../../src/assets/Portfolio/Photo Retouching/image (4).png';
import PhotoRetouchingImage5 from '../../../src/assets/Portfolio/Photo Retouching/image (5).png';
import PhotoRetouchingImage6 from '../../../src/assets/Portfolio/Photo Retouching/image (6).png';

import ImageMaskingImage1 from '../../../src/assets/Portfolio/Image Masking/image (1).png';
import ImageMaskingImage2 from '../../../src/assets/Portfolio/Image Masking/image (2).png';
import ImageMaskingImage3 from '../../../src/assets/Portfolio/Image Masking/image (3).png';
import ImageMaskingImage4 from '../../../src/assets/Portfolio/Image Masking/image (4).png';
import ImageMaskingImage5 from '../../../src/assets/Portfolio/Image Masking/image (5).png';
import ImageMaskingImage6 from '../../../src/assets/Portfolio/Image Masking/image (6).png';


import ColorCorrectionImage1 from '../../../src/assets/Portfolio/Color Correction/Image (1).png';
import ColorCorrectionImage2 from '../../../src/assets/Portfolio/Color Correction/Image (2).png';
import ColorCorrectionImage3 from '../../../src/assets/Portfolio/Color Correction/Image (3).png';
import ColorCorrectionImage4 from '../../../src/assets/Portfolio/Color Correction/Image (4).png';
import ColorCorrectionImage5 from '../../../src/assets/Portfolio/Color Correction/Image (5).png';
import ColorCorrectionImage6 from '../../../src/assets/Portfolio/Color Correction/Image (6).png';


import ImageReflectionImage1 from '../../../src/assets/Portfolio/Image Reflection/image (1).png';
import ImageReflectionImage2 from '../../../src/assets/Portfolio/Image Reflection/image (2).png';
import ImageReflectionImage3 from '../../../src/assets/Portfolio/Image Reflection/image (3).png';
import ImageReflectionImage4 from '../../../src/assets/Portfolio/Image Reflection/image (4).png';
import ImageReflectionImage5 from '../../../src/assets/Portfolio/Image Reflection/image (5).png';
import ImageReflectionImage6 from '../../../src/assets/Portfolio/Image Reflection/image (6).png';




import { motion } from "framer-motion";

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
];




  const containerRefs = useRef(services.flatMap(s => s.images.map(() => React.createRef())));
  const [percents, setPercents] = useState(services.flatMap(s => s.images.map(() => 50)));
  const draggingRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const onMove = (clientX, containerRef, setPercent) => {
      const rect = containerRef.current.getBoundingClientRect();
      let x = clientX - rect.left;
      let p = (x / rect.width) * 100;
      if (p < 0) p = 0;
      if (p > 100) p = 100;
      setPercent(p);
    };

    const pointerMove = (e) => {
      if (!draggingRef.current) return;
      e.preventDefault();
      const { containerRef, setPercent } = draggingRef.current;
      const cx = e.touches ? e.touches[0].clientX : e.clientX;
      onMove(cx, containerRef, setPercent);
    };

    const stopDrag = () => {
      draggingRef.current = null;
      setIsDragging(false);
      document.body.style.userSelect = "";
    };

    window.addEventListener("mousemove", pointerMove);
    window.addEventListener("touchmove", pointerMove, { passive: false });
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchend", stopDrag);

    return () => {
      window.removeEventListener("mousemove", pointerMove);
      window.removeEventListener("touchmove", pointerMove);
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchend", stopDrag);
    };
  }, []);

  const startDrag = (e, containerRef, idx) => {
    e.preventDefault();
    draggingRef.current = {
      containerRef,
      setPercent: (p) => setPercents(prev => prev.map((val, i) => i === idx ? p : val))
    };
    setIsDragging(true);
    document.body.style.userSelect = "none";
  };

  const onClickBar = (e, containerRef, idx) => {
    e.preventDefault();
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const x = clientX - rect.left;
    const p = (x / rect.width) * 100;
    const clamped = Math.max(0, Math.min(100, p));
    setPercents(prev => prev.map((val, i) => i === idx ? clamped : val));
    startDrag(e, containerRef, idx);
  };

  const renderCard = (before, after, percent, idx) => {
    const showAfter = percent > 55;
    const showBefore = percent < 45;

    return (
      <motion.div
        key={idx}
        initial={{ y:50, opacity:0 }}
        whileInView={{ y:0, opacity:1 }}
        transition={{ duration:0.8, ease:"easeOut" }}
        viewport={{ once:false }}
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

        <div
          ref={containerRefs.current[idx]}
          className="relative w-full mt-6 h-[180px] sm:h-[220px] md:h-[250px] lg:h-[280px] select-none touch-none cursor-ew-resize"
          onMouseDown={e => onClickBar(e, containerRefs.current[idx], idx)}
          onTouchStart={e => onClickBar(e, containerRefs.current[idx], idx)}
        >
          <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover" draggable={false}/>
          <div className="absolute inset-0 overflow-hidden" style={{ width:`${percent}%` }}>
            <img src={after} alt="After" className="absolute left-0 top-0 w-full h-full object-cover transition-all duration-200" draggable={false}/>
            <div className={`absolute inset-0 transition-opacity duration-300 ${isDragging ? "opacity-40 bg-black" : "opacity-0"}`}></div>
          </div>

          {showBefore && <div className="absolute top-1/2 left-4 -translate-y-1/2 z-20 bg-black/60 text-white text-xs font-semibold px-2 py-1 rounded-full">Before</div>}
          {showAfter && <div className="absolute top-1/2 right-4 -translate-y-1/2 z-20 bg-black/60 text-white text-xs font-semibold px-2 py-1 rounded-full">After</div>}

          <div className="absolute top-0 bottom-0 w-px bg-white/70 z-30" style={{ left:`${percent}%`, transform:"translateX(-0.5px)"}}/>

          <button
            onMouseDown={e => startDrag(e, containerRefs.current[idx], idx)}
            onTouchStart={e => startDrag(e, containerRefs.current[idx], idx)}
            style={{ left:`${percent}%`, transform:"translate(-50%, -50%)" }}
            className="absolute z-40 -translate-y-1/2 top-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-lg border border-white"
          >
            <div className="w-7 h-7 rounded-full bg-purple-600 text-white flex items-center justify-center text-lg font-bold">⇆</div>
          </button>
        </div>
      </motion.div>
    );
  };

  const renderServiceBlock = (service, startIdx) => {
    return (
      <div key={service.name}>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">{service.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.images.map((pair, i) => renderCard(pair[0], pair[1], percents[startIdx+i], startIdx+i))}
        </div>
      </div>
    );
  };

  return (
    <section className="bg-[#F3F6FF] py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-16 xl:px-24 space-y-16">
        {services.map((service, idx) => renderServiceBlock(service, idx*3))}
      </div>
    </section>
  );
};

export default PortfolioAfterBefore;
