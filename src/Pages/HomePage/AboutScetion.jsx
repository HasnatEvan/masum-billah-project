import { motion } from "framer-motion";
import image1 from "../../assets/Images/image (1).png";
import image2 from "../../assets/Images/image (2).png";
import mobileImage from "../../assets/Images/mobileImage.png";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-10 px-4 max-w-6xl mx-auto">
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Images */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-1/2 relative"
          variants={childVariants}
        >
          {/* Desktop Images */}
          <div className="hidden sm:flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto">
            {/* Image 2 */}
            <motion.div
              className="relative z-20 -translate-y-4 sm:-translate-y-8 md:-translate-y-12 lg:-translate-y-16"
              variants={childVariants}
            >
              <img
                src={image2}
                alt="photo editing workspace"
                className="rounded-2xl shadow-lg w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] xl:w-[340px] 2xl:w-[380px]"
              />
            </motion.div>

            {/* Image 1 */}
            <motion.div
              className="relative z-10 translate-y-2 sm:translate-y-6 md:translate-y-10 lg:translate-y-14"
              variants={childVariants}
            >
              <img
                src={image1}
                alt="photo editing model"
                className="rounded-2xl shadow-lg w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] xl:w-[340px] 2xl:w-[380px]"
              />
            </motion.div>
          </div>

          {/* Mobile Image */}
          <div className="flex sm:hidden justify-center w-full">
            <motion.div variants={childVariants}>
              <img
                src={mobileImage}
                alt="mobile photo editing"
                className="w-60 sm:w-72 md:w-80 lg:w-96"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Right Text */}
        <motion.div
          className="w-full lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left"
          variants={childVariants}
        >
          <h4 className="text-xs sm:text-sm font-bold text-[#4F46E5] uppercase tracking-wide">
            About Us
          </h4>

          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#4F1ACB] leading-snug">
            We’re your trusted partner in virtual photo editing & design studio
          </h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Photo editing services for e-commerce businesses and photo studios,
            from product photographers to Amazon sellers to global brands.
          </p>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Because a quick product shoot can easily turn into a day or more of
            editing and formatting your images. Let us look after the edits, so
            you can get back to the work that needs you.
          </p>

          <Link to={"/about"}>
            <button className="mt-4 inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-[#4F46E5] text-[#4F46E5] font-semibold rounded-full hover:bg-[#4F46E5] hover:text-white transition-all duration-300">
              Learn More
              <span className="text-lg">→</span>
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
