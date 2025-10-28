import { motion } from "framer-motion";

const CardSection = () => {
  const cards = [
    {
      title: "Who We Serve:",
      border: "border-purple-500",
      bg: "bg-purple-600",
      content: [
        "Comprehensive Photo Editing & Retouching Services",
        "E-commerce Site Management Firms",
        "Product and Fashion Photographers",
        "Graphics Design Agencies and Studios",
        "Advertising Agencies (Web & Print)",
        "Multimedia Advertising Agencies",
        "News Publication and Magazine Firms",
        "Web Designers and Developers",
      ],
    },
    {
      title: "Our Capacity:",
      border: "border-pink-500",
      bg: "bg-pink-500",
      content: [
        "At Graphics Amazon (GA), we are committed to providing world-class design and image editing services.",
        "Our core expertise includes:",
        "Professional Photo Retouching and Ghost Mannequin Service",
        "Clipping Path, Image Masking, Photo Restoration",
        "Color Correction, Logo Design, Raster-to-Vector Conversion",
        "Comprehensive Image Editing and other innovative design solutions",
      ],
    },
    {
      title: "Image Processing Capacity:",
      border: "border-sky-500",
      bg: "bg-sky-500",
      content: [
        "Clipping - 1000 images/day",
        "Masking - 700 images/day",
        "Retouch - 700 images/day",
        "Neck Joint/GHOST MANNEQUIN - 1000 images/day",
      ],
    },
    {
      title: "Human Resources:",
      border: "border-emerald-500",
      bg: "bg-emerald-500",
      content: [
        "40 Junior Graphics Designers",
        "30 Senior Graphics Designers (Supervisors)",
        "12 Quality Assurance Professionals",
        "2 Production Management",
      ],
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className={`border-2 ${card.border} rounded-2xl overflow-hidden shadow-md flex flex-col`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div
              className={`text-white text-center py-3 md:py-4 font-bold text-lg sm:text-lg md:text-xl ${card.bg}`}
            >
              {card.title}
            </div>
            <div className="p-4 md:p-6 text-gray-800 text-sm sm:text-base flex-1 flex flex-col justify-center space-y-2 text-center">
              {card.content.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CardSection;
