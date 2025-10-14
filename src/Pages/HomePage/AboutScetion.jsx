import { motion } from "framer-motion";
import image1 from "../../assets/Images/image (1).png";
import image2 from "../../assets/Images/image (2).png";
import mobileImage from '../../assets/Images/mobileImage.png'
import { Link } from "react-router-dom";

const AboutSection = () => {
  // Parent container animation
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.3, // children একের পর এক animation হবে
      },
    },
  };

  // Child animation (images/text)
  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section className="bg-white lg:py-28 lg:mt-16 py-4 px-6 md:px-12 lg:px-20">
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-between gap-10"
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
            {/* First Image */}
            <motion.div
              className="relative z-20 -translate-y-6 sm:-translate-y-10 md:-translate-y-16 lg:-translate-y-20"
              variants={childVariants}
            >
              <img
                src={image2}
                alt="photo editing workspace"
                className="rounded-2xl shadow-lg w-[220px] sm:w-[250px] md:w-[300px] lg:w-[340px] xl:w-[380px]"
              />
            </motion.div>

            {/* Second Image */}
            <motion.div
              className="relative z-10 translate-y-2 sm:translate-y-4 md:translate-y-8 lg:translate-y-12"
              variants={childVariants}
            >
              <img
                src={image1}
                alt="photo editing model"
                className="rounded-2xl shadow-lg w-[220px] sm:w-[250px] md:w-[300px] lg:w-[340px] xl:w-[380px]"
              />
            </motion.div>
          </div>

          {/* Mobile Image */}
          <div className="flex sm:hidden justify-center w-full">
            <motion.div variants={childVariants}>
              <img
                src={mobileImage}
                alt="mobile photo editing"
                className="w-64 sm:w-72"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Right Text */}
        <motion.div
          className="w-full lg:w-1/2 space-y-5 text-center lg:text-left"
          variants={childVariants}
        >
          <h4 className="text-sm font-bold text-[#4F46E5] uppercase">
            About Us
          </h4>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#4F1ACB] leading-snug">
            We’re your trusted partner in virtual photo editing & design studio
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Photo editing services for e-commerce businesses and photo studios,
            from product photographers to Amazon sellers to global brands.
          </p>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Because a quick product shoot can easily turn into a day or more of
            editing and formatting your images. Let us look after the edits, so
            you can get back to the work that needs you.
          </p>

          <Link to={'/about'}>
            <button className="mt-4 inline-flex items-center gap-2 px-6 py-3 border border-[#4F46E5] text-[#4F46E5] font-semibold rounded-full hover:bg-[#4F46E5] hover:text-white transition-all duration-300">
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
