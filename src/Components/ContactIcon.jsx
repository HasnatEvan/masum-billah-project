import { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaHeadset } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ContactIcon = () => {
  const [open, setOpen] = useState(false);

  const handleWhatsapp = () => {
    window.open("https://wa.me/966543692111", "_blank");
  };

  const handleEmail = () => {
    window.location.href = "mailto:info@graphicsamazon.com";
  };

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end">

      {/* Floating Icons — WhatsApp + Email */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="flex flex-col items-end space-y-3 mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
          >
            
            {/* WhatsApp Icon with Notification Badge */}
            <div
              onClick={handleWhatsapp}
              className="
                relative
                bg-[#25D366] text-white 
                p-3 sm:p-4 
                rounded-full shadow-lg cursor-pointer 
                hover:scale-105 transition-transform duration-200
              "
            >
              <FaWhatsapp className="text-xl sm:text-2xl" />

              {/* Notification Badge */}
              <span
                className="
                  absolute -top-1 -right-1 
                  bg-red-600 text-white 
                  text-[10px] sm:text-xs 
                  w-4 h-4 sm:w-5 sm:h-5 
                  flex items-center justify-center 
                  rounded-full font-bold
                "
              >
                1
              </span>
            </div>

            {/* Email Icon */}
            <div
              onClick={handleEmail}
              className="
                bg-[#1D4ED8] text-white 
                p-3 sm:p-4 
                rounded-full shadow-lg cursor-pointer 
                hover:bg-[#1E40AF] 
                hover:scale-105 transition-transform duration-200
              "
            >
              <FaEnvelope className="text-xl sm:text-2xl" />
            </div>

          </motion.div>
        )}
      </AnimatePresence>


      {/* Contact Us Button — Responsive */}
      <button
        onClick={() => setOpen(!open)}
        className="
          bg-gradient-to-r from-blue-600 to-blue-500
          text-white font-semibold
          px-3 py-2 sm:px-5 sm:py-2.5
          rounded-full shadow-lg 
          flex items-center gap-2
          hover:from-blue-700 hover:to-blue-600
          transition-all duration-300
          text-sm sm:text-base
          animate-pulse
        "
      >

        {/* Mobile: Only icon */}
        <FaHeadset className="text-xl sm:hidden" />

        {/* Tablet/Desktop: Icon + Text */}
        <FaHeadset className="hidden sm:block text-xl" />
        <span className="hidden sm:block">Contact Us</span>

      </button>

    </div>
  );
};

export default ContactIcon;
