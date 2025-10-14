import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import image1 from "../../assets/Service/image (1).png";
import image2 from "../../assets/Service/image (2).png";
import image3 from "../../assets/Service/image (3).png";
import image4 from "../../assets/Service/image (4).png";

const blogs = [
  { id: 1, img: image1, title: "Get ready for our recent plan for designer and" },
  { id: 2, img: image2, title: "Survival Strategies To Ensure Business Domination" },
  { id: 3, img: image3, title: "Top Design Trends That Will Dominate This Year" },
  { id: 4, img: image4, title: "How to Improve Your Product Presentation Skills" },
];

const LatestNews = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const handlePrev = () => setStartIndex((prev) => Math.max(prev - itemsPerPage, 0));
  const handleNext = () =>
    setStartIndex((prev) => Math.min(prev + itemsPerPage, blogs.length - itemsPerPage));

  const visibleBlogs = blogs.slice(startIndex, startIndex + itemsPerPage);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="bg-[#F4FAFF] py-16 sm:py-20 px-4 sm:px-6 lg:px-20"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        
        {/* Left Header */}
        <div className="lg:w-1/2">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#FF9F00] text-xl font-bold">||</span>
              <p className="text-[#FF9F00] text-lg font-bold uppercase tracking-wider">
                Latest News
              </p>
              <span className="text-[#FF9F00] text-xl font-bold">||</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#222] mb-4">
              Our Latest Blog Posts
            </h2>
            <p className="text-[#5B5B5B] text-base sm:text-lg leading-relaxed">
              Explore insightful articles, tips, and updates on photo editing, eCommerce trends, and design solutions to help grow your business and stay ahead in the competitive market.
            </p>
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E3F3FF] flex items-center justify-center hover:bg-[#d3ecff] transition disabled:opacity-50"
            >
              <FaArrowLeft className="text-[#3ABEF9] text-lg sm:text-xl" />
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex >= blogs.length - itemsPerPage}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E3F3FF] flex items-center justify-center hover:bg-[#d3ecff] transition disabled:opacity-50"
            >
              <FaArrowRight className="text-[#3ABEF9] text-lg sm:text-xl" />
            </button>
          </div>
        </div>

        {/* Right Blog Cards */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {visibleBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="w-full h-[300px] sm:h-[350px] md:h-[300px] lg:h-[180px] overflow-hidden">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-base">
                  {blog.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default LatestNews;
