import { FaUser, FaHourglassHalf, FaImage, FaDownload, FaCreditCard, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import image from "../../assets/Images/workImage.png";

const WorkSection = () => {
  const steps = [
    { id: "01", title: "PLACE WORK ORDER", desc: "Upload images, add instructions, and submit easily for fast, reliable editing services.", icon: <FaUser />, color: "bg-[#f94079]" },
    { id: "02", title: "QUICK RESPONSE", desc: "Receive timely updates and answers to your queries with our dedicated support team.", icon: <FaHourglassHalf />, color: "bg-[#3dc6ff]" },
    { id: "03", title: "IMAGE FILES", desc: "Transfer your files effortlessly via ZIP upload or any file-sharing platform of your choice.", icon: <FaImage />, color: "bg-[#b84df9]" },
    { id: "04", title: "DOWNLOAD IMAGE", desc: "Access completed project files securely via trusted file transfer platforms for seamless delivery.", icon: <FaDownload />, color: "bg-[#ffb432]" },
    { id: "05", title: "MADE PAYMENT", desc: "Complete your payment securely and efficiently to initiate project work and ensure timely delivery.", icon: <FaCreditCard />, color: "bg-[#2dd19e]" },
    { id: "06", title: "GIVE US REVIEW", desc: "Share your feedback and experience to help us improve and provide better services.", icon: <FaHeart />, color: "bg-[#a43df8]" },
  ];

  return (
    <section className="py-10 lg:py-20 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h4 className="text-[#4b11f7] font-bold text-sm sm:text-base">How it works</h4>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-700 mt-2">
          How Clipping Amazon works
        </h2>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full lg:w-2/3">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center sm:items-start gap-4 text-center sm:text-left">
              {/* Icon */}
              <div className={`${step.color} text-white w-16 h-16 flex items-center justify-center rounded-full text-2xl shadow-md flex-shrink-0`}>
                {step.icon}
              </div>

              {/* Step Content */}
              <div>
                <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">
                  {step.id}. {step.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Image with slide-in animation */}
        <motion.div
          className="w-full lg:w-1/3 flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={image}
            alt="Work Process Illustration"
            className="w-64 sm:w-80 md:w-96 lg:w-[500px] object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;
