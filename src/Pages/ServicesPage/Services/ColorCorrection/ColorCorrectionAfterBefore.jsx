import React, { useRef, useState, useEffect } from "react";
import image1 from "../../../../assets/SeviceImage/Color Correction/image (1).png";
import image2 from "../../../../assets/SeviceImage/Color Correction/image (2).png";
import image3 from "../../../../assets/SeviceImage/Color Correction/image (3).png";
import image4 from "../../../../assets/SeviceImage/Color Correction/image (4).png";
import { motion } from "framer-motion";

const ColorCorrectionAfterBefore = () => {
  const container1 = useRef(null);
  const container2 = useRef(null);
  const [percent1, setPercent1] = useState(50);
  const [percent2, setPercent2] = useState(50);
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

  const startDrag = (e, containerRef, setPercent) => {
    e.preventDefault();
    draggingRef.current = { containerRef, setPercent };
    setIsDragging(true);
    document.body.style.userSelect = "none";
  };

  const onClickBar = (e, containerRef, setPercent) => {
    e.preventDefault();
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const x = clientX - rect.left;
    const p = (x / rect.width) * 100;
    setPercent(Math.max(0, Math.min(100, p)));
    startDrag(e, containerRef, setPercent);
  };

  const renderCard = (before, after, percent, setPercent, containerRef) => {
    const showAfter = percent > 55;
    const showBefore = percent < 45;

    return (
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

        {/* Image Slider */}
        <div
          ref={containerRef}
          className="relative w-full mt-10 h-[260px] sm:h-[360px] md:h-[420px] lg:h-[500px] select-none touch-none cursor-ew-resize"
          onMouseDown={(e) => onClickBar(e, containerRef, setPercent)}
          onTouchStart={(e) => onClickBar(e, containerRef, setPercent)}
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
            onMouseDown={(e) => startDrag(e, containerRef, setPercent)}
            onTouchStart={(e) => startDrag(e, containerRef, setPercent)}
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
        {renderCard(image1, image2, percent1, setPercent1, container1)}
        {renderCard(image3, image4, percent2, setPercent2, container2)}
      </div>
    </section>
  );
};

export default ColorCorrectionAfterBefore;
