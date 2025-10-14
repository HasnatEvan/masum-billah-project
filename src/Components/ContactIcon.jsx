import { useState, useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ContactIcon = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  // ✅ Open WhatsApp link
  const handleWhatsapp = () => {
    window.open("https://wa.me/966543692111", "_blank");
  };

  // ✅ Show the modal automatically when user first visits
  useEffect(() => {
    // Open automatically after small delay (for smooth entry)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500); // open after 1.5s

    return () => clearTimeout(timer);
  }, []);

  // ✅ Hide the button after inactivity (optional)
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      {/* ✅ Floating WhatsApp Icon & Modal */}
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
          {/* ✅ WhatsApp Chat Modal */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="bg-white rounded-2xl shadow-2xl w-[320px] overflow-hidden border border-gray-200 mb-3"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                {/* Header */}
                <div className="bg-[#075E54] text-white flex justify-between items-center p-3">
                  <div>
                    <h3 className="font-semibold text-base">clippingamazon.com</h3>
                    <p className="text-xs text-gray-200">Typically replies within minutes</p>
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
                  className="bg-[url('https://i.ibb.co/6Hq6L2N/whatsapp-bg.png')] bg-cover bg-center p-4"
                  style={{ backgroundColor: '#ECE5DD' }}
                >
                  <div className="bg-green-100 inline-block p-2.5 rounded-lg text-gray-800 shadow-sm text-sm">
                    Hi 👋  
                    Any questions related to our service?
                  </div>
                </div>

                {/* Footer Button */}
                <div className="p-3 text-center border-t">
                  <button
                    onClick={handleWhatsapp}
                    className="bg-[#25D366] text-white font-semibold px-4 py-2 rounded-full flex items-center justify-center mx-auto gap-2 hover:bg-[#1ebe5d] transition text-sm"
                  >
                    <FaWhatsapp className="w-4 h-4" /> WhatsApp Us
                  </button>
                  <p className="text-gray-600 text-xs mt-1">
                    <span className="text-green-600">● Online</span> | Privacy policy
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ✅ Floating WhatsApp Button */}
          <div
            className="bg-[#25D366] text-white p-4 rounded-full shadow-lg cursor-pointer relative hover:scale-105 transition-transform duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaWhatsapp className="w-6 h-6" />
            {!isOpen && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
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
