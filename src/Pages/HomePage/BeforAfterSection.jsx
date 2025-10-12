import React, { useRef, useState, useEffect } from "react";
import beforeImage from "../../assets/Images/beforImage.png";
import afterImage from "../../assets/Images/afterImage.jpg";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion"; // ✨ Animation
import { Link } from "react-router-dom";

const BeforAfterSection = () => {
    const containerRef = useRef(null);
    const handleRef = useRef(null);
    const [percent, setPercent] = useState(50);
    const draggingRef = useRef(false);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        const onMove = (clientX) => {
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
            const cx = e.touches ? e.touches[0].clientX : e.clientX;
            onMove(cx);
        };

        const stopDrag = () => {
            draggingRef.current = false;
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

    const startDrag = () => {
        draggingRef.current = true;
        setIsDragging(true);
        document.body.style.userSelect = "none";
    };

    const onClickBar = (e) => {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const p = (x / rect.width) * 100;
        setPercent(Math.max(0, Math.min(100, p)));
    };

    const onKey = (e) => {
        if (e.key === "ArrowLeft") setPercent((s) => Math.max(0, s - 2));
        else if (e.key === "ArrowRight") setPercent((s) => Math.min(100, s + 2));
        else if (e.key === "Home") setPercent(0);
        else if (e.key === "End") setPercent(100);
    };

    const showAfter = percent > 55;
    const showBefore = percent < 45;

    return (
        <section className="bg-[#F3F6FF] py-12 sm:py-16 md:py-20 overflow-hidden">
            <div className="px-4 sm:px-6 lg:px-16 xl:px-24 flex flex-col lg:flex-row items-center gap-12">

                {/* LEFT: Before After Slider */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false }} // 🔹 animate every time
                    className="w-full lg:w-1/2"
                >
                    <div className="relative">
                        <div className="relative rounded-2xl bg-white shadow-xl overflow-hidden">
                            {/* Window header dots */}
                            <div className="absolute top-0 left-0 right-0 h-10 sm:h-12 flex items-center px-4 bg-gradient-to-b from-white/90 to-white/70 border-b border-white/50 z-20">
                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-300"></span>
                                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-300"></span>
                                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-300"></span>
                                </div>
                            </div>

                            {/* Slider container */}
                            <div
                                ref={containerRef}
                                className="relative w-full mt-10 sm:mt-12 h-[320px] sm:h-[420px] md:h-[480px] lg:h-[500px] xl:h-[540px] select-none touch-none"
                                onMouseDown={onClickBar}
                            >
                                <img
                                    src={beforeImage}
                                    alt="Before"
                                    className="absolute inset-0 w-full h-full object-cover"
                                    draggable={false}
                                />

                                <div
                                    className="absolute inset-0 overflow-hidden"
                                    style={{ width: `${percent}%` }}
                                >
                                    <img
                                        src={afterImage}
                                        alt="After"
                                        className="absolute left-0 top-0 h-full w-full object-cover transition-all duration-200"
                                        draggable={false}
                                    />
                                    <div
                                        className={`absolute inset-0 transition-opacity duration-300 ${isDragging ? "opacity-40 bg-black" : "opacity-0"
                                            }`}
                                    ></div>
                                </div>

                                {showBefore && (
                                    <div className="absolute top-1/2 left-4 sm:left-8 -translate-y-1/2 z-20 bg-black/60 text-white text-sm sm:text-base md:text-lg font-semibold px-4 sm:px-5 py-1.5 sm:py-2 rounded-full transition-opacity duration-300">
                                        Before
                                    </div>
                                )}
                                {showAfter && (
                                    <div className="absolute top-1/2 right-4 sm:right-8 -translate-y-1/2 z-20 bg-black/60 text-white text-sm sm:text-base md:text-lg font-semibold px-4 sm:px-5 py-1.5 sm:py-2 rounded-full transition-opacity duration-300">
                                        After
                                    </div>
                                )}

                                <div
                                    className="absolute top-0 bottom-0 w-px bg-white/70 z-30"
                                    style={{ left: `${percent}%`, transform: "translateX(-0.5px)" }}
                                />

                                <button
                                    ref={handleRef}
                                    onMouseDown={startDrag}
                                    onKeyDown={onKey}
                                    aria-label="Adjust before/after"
                                    style={{ left: `${percent}%`, transform: "translate(-50%, -50%)" }}
                                    className="absolute z-40 -translate-y-1/2 top-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-lg border border-white focus:outline-none"
                                >
                                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm font-bold">
                                        ⇆
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT: Text Section */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false }} // 🔹 animate every time
                    className="w-full lg:w-1/2 text-center lg:text-left"
                >
                    <p className="text-sm text-purple-600 font-semibold mb-3">Before & After</p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3B0EA6] leading-tight mb-6">
                        Our most exclusive <br className="hidden sm:block" /> Photo-editing services
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base">
                        Clipping Amazon has been delivering top-notch Photoshop editing services for
                        over 10 years to eCommerce businesses, agencies, and studios. With a focus on
                        quality and efficiency, we offer cost-effective solutions with a quick turnaround
                        time. Place your order today and enjoy significant savings on bulk orders.
                    </p>

                    <Link to={'/services'}> {/* replace "/services" with your target path */}
                        <button className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border-2 border-purple-600 text-purple-700 font-medium hover:bg-purple-600 hover:text-white transition text-sm sm:text-base">
                            View All Services <FaArrowRight />
                        </button>
                    </Link>
                </motion.div>

            </div>
        </section>
    );
};

export default BeforAfterSection;
