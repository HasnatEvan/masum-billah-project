import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <section className="bg-white py-20 px-6 sm:px-10 md:px-24 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2E008B]">
            Have a project in mind?{" "}
            <span className="text-[#5D00FF]">Let’s talk.</span>
          </h2>
          <p className="text-gray-600 mt-4 mb-8 leading-relaxed">
            Get in touch with us to discuss your project needs. Our team will
            offer personalized solutions and ensure efficient, high-quality
            service every step of the way.
          </p>

          {/* Office Info Card */}
          <div className="bg-[#fafbff] shadow-md rounded-xl p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-[#FF9B00] mb-4">
              Our Office
            </h3>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#5D00FF]" />
                <span>I-H,2/7 Mirpur, Dhaka, Bangladesh.</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#5D00FF]" />
                <span>infocamazon2018@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#5D00FF]" />
                <span>+8801788110628</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Right Section - Form */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="bg-white shadow-xl rounded-xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-center text-[#5D00FF] mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-5">
              {/* Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md w-full px-4 py-2 focus:outline-none focus:border-[#5D00FF]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md w-full px-4 py-2 focus:outline-none focus:border-[#5D00FF]"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="border border-gray-300 rounded-md w-full px-4 py-2 focus:outline-none focus:border-[#5D00FF]"
                />
              </div>

              {/* Website */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Website
                </label>
                <input
                  type="url"
                  className="border border-gray-300 rounded-md w-full px-4 py-2 focus:outline-none focus:border-[#5D00FF]"
                />
              </div>

              {/* Service Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service
                </label>
                <select className="border border-gray-300 rounded-md w-full px-4 py-2 focus:outline-none focus:border-[#5D00FF]">
                  <option>Clipping Path</option>
                  <option>Multi Clipping Path</option>
                  <option>Ghost Mannequin</option>
                  <option>Background Remove</option>
                  <option>Image Retouching</option>
                  <option>Image Masking</option>
                  <option>Color Correction</option>
                  <option>Image Reflection</option>
                  <option>Image Shadowing</option>
                  <option>Image Cleaning</option>
                  <option>Image Cropping</option>
                  <option>Photo Restoration</option>
                  <option>Raster to Vector</option>
                </select>
              </div>

              {/* Shared File link */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Shared File Link
                </label>
                <input
                  type="url"
                  className="border border-gray-300 rounded-md w-full px-4 py-2 focus:outline-none focus:border-[#5D00FF]"
                />
              </div>

              {/* Upload Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Image
                </label>
                <input
                  type="file"
                  className="border border-gray-300 rounded-md w-full px-4 py-2 text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#5D00FF] file:text-white hover:file:bg-[#4A00CC]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="border border-gray-300 rounded-md w-full px-4 py-2 focus:outline-none focus:border-[#5D00FF]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#5D00FF] hover:bg-[#4A00CC] text-white font-semibold w-full py-3 rounded-md transition-all duration-300"
              >
                SEND
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
