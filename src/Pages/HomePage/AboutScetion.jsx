import { motion } from "framer-motion";
import image1 from "../../assets/Images/abt1.png";
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
          {/* Desktop Image */}
          <div className="hidden sm:flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto">
            <motion.div
              className="relative z-10 translate-y-2 sm:translate-y-6 md:translate-y-10 lg:translate-y-14"
              variants={childVariants}
            >
              <img
                src={image1}
                alt="photo editing model"
                className="rounded-2xl w-[220px] sm:w-[280px] md:w-[340px] lg:w-[400px] xl:w-[460px] 2xl:w-[520px]"
              />
            </motion.div>
          </div>

          {/* Mobile Image */}
          <div className="flex sm:hidden justify-center w-full">
            <motion.div className="relative z-10" variants={childVariants}>
              <img
                src={image1}
                alt="photo editing model"
                className="rounded-2xl w-[240px] sm:w-[320px]"
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
            We're your trusted <br />
            partner in virtual photo <br />
            editing & design ‍studio
          </h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            We provide professional photo editing services for e-commerce businesses and photo studios—from product photographers and Amazon sellers to global brands.
          </p>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            A simple product shoot can often turn into hours—or even days—of editing and formatting. That’s where we come in. Let us handle the edits, so you can focus on growing your business.
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
