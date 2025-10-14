import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import image1 from '../../../../assets/SeviceImage/GhostMannequin/image (1).png';
import image2 from '../../../../assets/SeviceImage/GhostMannequin/image (2).png';
import image3 from '../../../../assets/SeviceImage/GhostMannequin/image (3).png';
import image4 from '../../../../assets/SeviceImage/GhostMannequin/image (4).png';

const GhostMannequinAfterBefore = () => {
  const containers = [useRef(null), useRef(null)];
  const [percents, setPercents] = useState([50, 50]);
  const draggingRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const onMove = (clientX, containerRef, index) => {
      const rect = containerRef.current.getBoundingClientRect();
      let x = clientX - rect.left;
      let p = (x / rect.width) * 100;
      if (p < 0) p = 0;
      if (p > 100) p = 100;
      setPercents((prev) => {
        const copy = [...prev];
        copy[index] = p;
        return copy;
      });
    };

    const pointerMove = (e) => {
      if (!draggingRef.current) return;
      e.preventDefault();
      const { containerRef, index } = draggingRef.current;
      const cx = e.touches ? e.touches[0].clientX : e.clientX;
      onMove(cx, containerRef, index);
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

  const startDrag = (e, containerRef, index) => {
    e.preventDefault();
    draggingRef.current = { containerRef, index };
    setIsDragging(true);
    document.body.style.userSelect = "none";
  };

  const onClickBar = (e, containerRef, index) => {
    e.preventDefault();
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const x = clientX - rect.left;
    const p = (x / rect.width) * 100;
    setPercents((prev) => {
      const copy = [...prev];
      copy[index] = Math.max(0, Math.min(100, p));
      return copy;
    });
    startDrag(e, containerRef, index);
  };

  const renderCard = (before, after, percent, index, containerRef) => {
    const showAfter = percent > 55;
    const showBefore = percent < 45;

    return (
      <motion.div
        key={index}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
        className="relative bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        {/* Image Slider */}
        <div
          ref={containerRef}
          className="relative w-full mt-10 h-[260px] sm:h-[360px] md:h-[420px] lg:h-[500px] select-none touch-none cursor-ew-resize"
          onMouseDown={(e) => onClickBar(e, containerRef, index)}
          onTouchStart={(e) => onClickBar(e, containerRef, index)}
        >
          <img
            src={before}
            alt="Before"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />

          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${percent}%` }}
          >
            <img
              src={after}
              alt="After"
              className="absolute left-0 top-0 h-full w-full object-cover transition-all duration-200"
              draggable={false}
            />
            <div
              className={`absolute inset-0 transition-opacity duration-300 ${
                isDragging ? "opacity-40 bg-black" : "opacity-0"
              }`}
            ></div>
          </div>

          {showBefore && (
            <div className="absolute top-1/2 left-4 sm:left-6 -translate-y-1/2 z-20 bg-black/60 text-white text-xs sm:text-sm md:text-base font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full">
              Before
            </div>
          )}
          {showAfter && (
            <div className="absolute top-1/2 right-4 sm:right-6 -translate-y-1/2 z-20 bg-black/60 text-white text-xs sm:text-sm md:text-base font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full">
              After
            </div>
          )}

          <div
            className="absolute top-0 bottom-0 w-px bg-white/70 z-30"
            style={{ left: `${percent}%`, transform: "translateX(-0.5px)" }}
          />

          <button
            onMouseDown={(e) => startDrag(e, containerRef, index)}
            onTouchStart={(e) => startDrag(e, containerRef, index)}
            aria-label="Adjust before/after"
            style={{ left: `${percent}%`, transform: "translate(-50%, -50%)" }}
            className="absolute z-40 -translate-y-1/2 top-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-lg border border-white"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-lg font-bold">
              ⇆
            </div>
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="bg-[#F3F6FF] py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-16 xl:px-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
        {renderCard(image1, image2, percents[0], 0, containers[0])}
        {renderCard(image3, image4, percents[1], 1, containers[1])}
      </div>
    </section>
  );
};

export default GhostMannequinAfterBefore;
