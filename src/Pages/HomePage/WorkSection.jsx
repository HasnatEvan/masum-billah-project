import { FaUser, FaHourglassHalf, FaImage, FaDownload, FaCreditCard, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import LazyImage from "../../Components/LazyImage"; // ⭐ fast loading
import image from "../../assets/Images/workImage.png";

const WorkSection = () => {
  const steps = [
    {
      id: "01",
      title: "Place Work Order",
      desc: "Easily upload your images, add specific instructions, and submit for fast and reliable editing services.",
      icon: <FaUser />,
      color: "bg-[#f94079]",
    },
    {
      id: "02",
      title: "Quick Response",
      desc: "Get timely updates and prompt answers to your queries through our dedicated support team.",
      icon: <FaHourglassHalf />,
      color: "bg-[#3dc6ff]",
    },
    {
      id: "03",
      title: "Image Files",
      desc: "Transfer your files effortlessly via ZIP upload or any file-sharing platform of your choice.",
      icon: <FaImage />,
      color: "bg-[#b84df9]",
    },
    {
      id: "04",
      title: "Download Image",
      desc: "Securely access your completed project files through trusted file transfer platforms for smooth delivery.",
      icon: <FaDownload />,
      color: "bg-[#ffb432]",
    },
    {
      id: "05",
      title: "Make Payment",
      desc: "Complete your payment securely and conveniently to confirm your order and ensure on-time delivery.",
      icon: <FaCreditCard />,
      color: "bg-[#2dd19e]",
    },
    {
      id: "06",
      title: "Give Us Review",
      desc: "Share your valuable feedback and experience to help us improve and deliver even better service.",
      icon: <FaHeart />,
      color: "bg-[#a43df8]",
    },
  ];

  const stepVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section className="py-10 lg:py-20 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">

      {/* Section Header */}
      <div className="text-center mb-12">
        <h4 className="text-[#4b11f7] font-bold text-sm sm:text-base">How it works</h4>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-700 mt-2">
          How Graphics Amazon Works
        </h2>
      </div>

      {/* Layout */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full lg:w-2/3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stepVariants}
              className="flex flex-col items-center sm:items-start gap-4 text-center sm:text-left"
            >
              <div className={`${step.color} text-white w-16 h-16 flex items-center justify-center rounded-full text-2xl shadow-md flex-shrink-0`}>
                {step.icon}
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">
                  {step.id}. {step.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RIGHT IMAGE — FAST LOADING */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <LazyImage
            src={image}
            alt="Work Process Illustration"
            width="500"
            height="500"
            loading="lazy"
            decoding="async"
            fetchpriority="low"
            className="w-64 sm:w-80 md:w-96 lg:w-[500px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
