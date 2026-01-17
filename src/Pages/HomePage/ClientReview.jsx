import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import LazyImage from "../../Components/LazyImage";

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

  // ✅ Auto Slide (3 cards at a time)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalPages]);

  // ✅ Preload next page images
  useEffect(() => {
    const nextPage = (currentPage + 1) % totalPages;
    const nextImages = reviews.slice(
      nextPage * cardsPerPage,
      nextPage * cardsPerPage + cardsPerPage
    );

    nextImages.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, [currentPage]);

  const currentReviews = reviews.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage
  );

  return (
    <section className="bg-[#f9f9ff] py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-10 px-6">
          <h4 className="text-[#304ffe] font-semibold uppercase tracking-wide mb-2 text-sm sm:text-base">
            Clients Feedback
          </h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#333]">
            Explore Clients Review
          </h2>
        </div>

        {/* Slider */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage} // ⭐ important for 3-card slide
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -70 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="mx-auto flex flex-col sm:flex-row gap-6 px-4 sm:px-6 md:px-0"
          >
            {currentReviews.map((item) => (
              <div
                key={item.name}
                className="
                  flex-shrink-0 
                  w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.75rem)]
                  bg-white rounded-2xl shadow-md
                  flex flex-col justify-between
                  overflow-hidden
                  min-h-[230px] sm:min-h-[260px] md:min-h-[290px]
                "
              >
                {/* Review Content */}
                <div className="p-4 sm:p-6 text-left">
                  {/* Stars */}
                  <div className="flex text-[#FFC107] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-base" />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed">
                    {item.review}
                  </p>
                </div>

                {/* Bottom Section */}
                <div
                  className={`flex items-center gap-3 px-4 sm:px-6 py-3 bg-gradient-to-r ${item.gradient}`}
                >
                  <LazyImage
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                  />

                  <div>
                    <h5 className="font-bold text-[15px] text-[#000]">
                      {item.name}
                    </h5>
                    <p className="text-gray-500 text-[13px]">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        <div className="flex justify-center mt-8 gap-2 px-6">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentPage === i
                  ? "bg-blue-600 scale-110"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClientReview;
