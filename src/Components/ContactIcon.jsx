import { useState, useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ContactIcon = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleWhatsapp = () => {
    window.open("https://wa.me/966543692111", "_blank");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setIsVisible(false), 3000);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end space-y-2">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="bg-white rounded-2xl shadow-2xl w-[90vw] sm:w-[320px] max-w-sm overflow-hidden border border-gray-200 mb-3"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                {/* Header */}
                <div className="bg-[#075E54] text-white flex justify-between items-center p-3">
                  <div>
                    <h3 className="font-semibold text-base sm:text-sm">graphicsamazon.com</h3>
                    <p className="text-xs sm:text-[10px] text-gray-200">Typically replies within minutes</p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white text-xl font-bold leading-none"
                  >
                    &times;
                  </button>
                </div>

                {/* Message area */}
                <div
                  className="bg-[url('https://i.ibb.co.com/1G7Pnk9r/Screenshot-2025-10-15-001728.png')] bg-cover bg-center p-4"
                  style={{ backgroundColor: '#ECE5DD' }}
                >
                  <div className="bg-green-100 inline-block p-2.5 rounded-lg text-gray-800 shadow-sm text-sm sm:text-xs">
                    Hi 👋 Any questions related to our service?
                  </div>
                </div>

                {/* Footer Button */}
                <div className="p-3 text-center border-t border-gray-300">
                  <button
                    onClick={handleWhatsapp}
                    className="bg-[#25D366] text-white font-semibold px-4 py-2 rounded-full flex items-center justify-center mx-auto gap-2 hover:bg-[#1ebe5d] transition text-sm sm:text-xs"
                  >
                    <FaWhatsapp className="w-4 h-4 sm:w-3 sm:h-3" /> WhatsApp Us
                  </button>
                  <p className="text-gray-600 text-xs mt-1 sm:text-[10px]">
                    <span className="text-green-600">● Online</span> | Privacy policy
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating WhatsApp Button */}
          <div
            className="bg-[#25D366] text-white p-4 sm:p-3 rounded-full shadow-lg cursor-pointer relative hover:scale-105 transition-transform duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaWhatsapp className="w-6 h-6 sm:w-5 sm:h-5" />
            {!isOpen && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full sm:w-4 sm:h-4 sm:text-[10px]">
                1
              </span>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ContactIcon;
