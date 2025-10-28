import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Client Images
import clientImage1 from "../../assets/Review/Clara Susan.jpg";
import clientImage2 from "../../assets/Review/Sarah Joseph.jpg";
import clientImage3 from "../../assets/Review/Devid Brown.jpg";
import clientImage4 from "../../assets/Review/Daniel Wilson.jpg";
import clientImage5 from "../../assets/Review/Andaras Kovacs.jpg";
import clientImage6 from "../../assets/Review/Jeff Collins.jpg";

const ClientReview = () => {
  const reviews = [
    {
      name: "Jeff Collins",
      title: "Photo Studio Owner",
      image: clientImage6,
      review:
        "Exceptional service with perfectly executed clipping paths. The quick turnaround saved me valuable time, and the quality exceeded expectations. I’ll definitely use this service again and highly recommend it to my colleagues. Truly impressed with the results.",
      gradient: "from-[#E8FFF7] to-[#FFFFFF]",
    },
    {
      name: "Andaras Kovacs",
      title: "Photography Agency",
      image: clientImage5,
      review:
        "The team is professional and efficient, and their consistent, high-quality, detail-oriented work has greatly improved the overall look and feel of my online store. I couldn't be more pleased with their reliable, timely, friendly, and solution-focused service.",
      gradient: "from-[#FFF5EE] to-[#FFFFFF]",
    },
    {
      name: "Daniel Wilson",
      title: "E-commerce Specialist",
      image: clientImage4,
      review:
        "Graphics Amazon has significantly enhanced the visual quality of our brand. Their image editing and clipping path services are truly top-notch, demonstrating impressive precision and professionalism. We’re consistently delighted with the flawless results they deliver.",
      gradient: "from-[#E8F0FF] to-[#FFFFFF]",
    },
    {
      name: "Devid Brown",
      title: "Business Owner",
      image: clientImage3,
      review:
        "Graphics Amazon is always kind and professional — definitely worth considering. After years of retouching, background removal, ghost mannequin work, and color correction, I found this team. They've helped me shift focus to other areas of my photography business.",
      gradient: "from-[#FFF0F5] to-[#FFFFFF]",
    },
    {
      name: "Sarah Joseph",
      title: "Owner Photo Studio",
      image: clientImage2,
      review:
        "Truly professional and respectful in every interaction. Clear, timely communication made the process smooth and easy. Delivered expert-level service with genuine care and courtesy. I give my highest recommendation without hesitation.",
      gradient: "from-[#FFF5E1] to-[#FFFFFF]",
    },
    {
      name: "Clara Susan",
      title: "Photographer",
      image: clientImage1,
      review:
        "Professional and detail-oriented team. Their editing services allowed me to focus on capturing images while they handled post-production efficiently. Highly satisfied with the results.",
      gradient: "from-[#F0FFF0] to-[#FFFFFF]",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / cardsPerPage);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const currentReviews = reviews.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage
  );

  return (
    <section className="bg-[#f9f9ff] py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto ">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 px-6 md:px-0">
          <h4 className="text-[#304ffe] font-semibold uppercase tracking-wide mb-2 text-sm sm:text-base">
            Clients Feedback
          </h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#333]">
            Explore Clients Review
          </h2>
        </div>

        {/* Slider */}
        <div className="mx-auto flex flex-col sm:flex-row gap-6 sm:gap-4 md:gap-6 px-4 sm:px-6 md:px-0 overflow-hidden relative">
          <AnimatePresence initial={false}>
            {currentReviews.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="flex-shrink-0 w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.75rem)] bg-white rounded-2xl shadow-md flex flex-col justify-between overflow-hidden"
              >
                <div className="p-4 sm:p-6 text-left">
                  <div className="flex text-[#FFC107] mb-2 sm:mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-sm sm:text-base" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm md:text-[15px] leading-relaxed">
                    {item.review}
                  </p>
                </div>

                <div
                  className={`flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r ${item.gradient}`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div>
                    <h5 className="font-bold text-[13px] sm:text-[15px] text-[#000]">
                      {item.name}
                    </h5>
                    <p className="text-gray-500 text-[11px] sm:text-[13px]">{item.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-4 sm:mt-6 md:mt-8 gap-2 px-6 md:px-0">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                currentPage === i
                  ? "bg-blue-600 scale-110"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
