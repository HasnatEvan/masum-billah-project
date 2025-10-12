import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import clientLogo from "../../assets/Logo/logo.png";

const ClientReview = () => {
   const reviews = [
    {
      name: "Jerry Fletcher",
      title: "Ecommerce Manager",
      image: clientLogo,
      review:
        "Clipping Amazon has provided me excellent Ghost Menique service. Their team is fast, professional, and ensures that every image is perfectly edited for my e-commerce listings. The quality and attention to detail are exceptional, and I will continue to use their services for all my projects.",
      gradient: "from-[#E8FFF7] to-[#FFFFFF]",
    },
    {
      name: "Christina Maldonado",
      title: "Manager Real Estate Photography",
      image: clientLogo,
      review:
        "Professional and efficient team. They pay attention to details and ensure every photo is polished and ready for publication. Their workflow is smooth, communication is clear, and I always receive edits well before the deadline. Highly recommended for real estate photography.",
      gradient: "from-[#FFF5EE] to-[#FFFFFF]",
    },
    {
      name: "Andy Grinaker",
      title: "CEO, E-commerce business",
      image: clientLogo,
      review:
        "Quick turnaround and exceptional virtual tour editing. The team understands exactly what I need and delivers results that exceed expectations. Their expertise in e-commerce imagery and virtual tours has significantly improved my business presentation and customer engagement.",
      gradient: "from-[#E8FFF7] to-[#FFFFFF]",
    },
    {
      name: "Samantha Lee",
      title: "Fashion Photographer",
      image: clientLogo,
      review:
        "A review is an evaluation of a publication, product, service, or company. The Clipping Amazon team goes above and beyond, providing meticulous attention to detail, ensuring colors, lighting, and background edits are flawless. Their service allows me to focus on shooting while they handle post-production efficiently.",
      gradient: "from-[#FFF0F5] to-[#FFFFFF]",
    },
    {
      name: "Michael Johnson",
      title: "Marketing Head",
      image: clientLogo,
      review:
        "Excellent service, always prompt and professional. They understand the marketing requirements and deliver images and edits that are perfect for campaigns. The team is reliable, communicative, and consistently produces high-quality results that align with our brand standards.",
      gradient: "from-[#E0F7FA] to-[#FFFFFF]",
    },
    {
      name: "Emily Davis",
      title: "Product Manager",
      image: clientLogo,
      review:
        "Reliable and skilled editors. They transformed our product images into high-quality visuals that increased customer engagement and sales. Each project is handled carefully, and their turnaround times are fast without compromising on quality. I recommend them to anyone looking for professional image editing.",
      gradient: "from-[#FFF5E1] to-[#FFFFFF]",
    },
    {
      name: "Robert Wilson",
      title: "Startup Founder",
      image: clientLogo,
      review:
        "Outstanding service and very detail-oriented. The team is excellent at understanding requirements, providing edits exactly as requested, and even offering suggestions to improve the overall quality. Their professionalism and dedication have made them an essential partner for our startup.",
      gradient: "from-[#F0FFF0] to-[#FFFFFF]",
    },
    {
      name: "Olivia Brown",
      title: "Content Creator",
      image: clientLogo,
      review:
        "Creative edits, fast delivery, and excellent communication. Their team understands the needs of content creators and ensures that every image meets high standards of quality. Their service helps me maintain a consistent and professional online presence.",
      gradient: "from-[#FFF0F0] to-[#FFFFFF]",
    },
    {
      name: "David Miller",
      title: "E-commerce Consultant",
      image: clientLogo,
      review:
        "High-quality image editing with attention to every detail. They consistently deliver work that enhances the product visuals and presentation, helping businesses like mine succeed online. Their expertise, responsiveness, and dedication make them highly reliable partners for e-commerce projects.",
      gradient: "from-[#E8F0FF] to-[#FFFFFF]",
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
      <div className=" mx-auto flex flex-col sm:flex-row gap-8 px-6 md:px-20 overflow-hidden relative">
        <AnimatePresence initial={false}>
          {currentReviews.map((item) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="flex-shrink-0 w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(33.333%-0.75rem)] bg-white rounded-2xl shadow-md flex flex-col justify-between overflow-hidden"
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
    </section>
  );
};

export default ClientReview;
