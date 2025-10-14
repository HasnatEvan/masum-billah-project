import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const NumberSection = () => {
  return (
    <section className="flex justify-center items-center py-12 sm:py-16 px-4 bg-gradient-to-b from-white to-[#f8f9ff]">
      <div className="bg-gradient-to-r from-[#3b7ef1] to-[#281fb5] rounded-2xl shadow-[0_0_80px_rgba(63,81,181,0.3)] 
                      flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 py-12 sm:py-20 px-4 sm:px-8 md:px-16 w-full text-white">

        {/* Left Text with Animation */}
        <motion.div
          className="text-center md:text-left"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
            You have any projects in your mind? <br className="hidden sm:block" />
            Call us or send <span className="text-white font-bold">WhatsApp Message</span>
          </h2>
        </motion.div>

        {/* Right Section with Animation */}
        <motion.div
          className="flex items-center gap-4 sm:gap-6 bg-white/10 rounded-full px-4 sm:px-6 py-3 sm:py-4"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex justify-center items-center">
            <FaPhoneAlt className="text-[#18c0e6] text-xl sm:text-2xl" />
          </div>
          <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">+880 1788110628</h3>
        </motion.div>

      </div>
    </section>
  );
};

export default NumberSection;
