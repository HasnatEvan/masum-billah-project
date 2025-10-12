import { motion } from "framer-motion";

const CardSection = () => {
  const cards = [
    {
      title: "Who We Serve:",
      border: "border-purple-500",
      bg: "bg-purple-600",
      content: [
        "All kinds of photo editing and retouching services",
        "E-commerce Site Management Firms",
        "Product and Fashion Photographers",
        "Graphic Design Agencies and Firms",
        "Advertising Agencies (both Web and Print)",
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
        "Clipping Amazon (CA), commits global Class service in design development. Our principal activity is Photoshop PROFESSIONAL PHOTO RETOUCHING AND GHOST MANNEQUIN SERVICE, Clipping Path, Image Masking, Photo Retouching, Photo Restoration, Color Correction, Logo Design, Raster 2 Vector works image editing and other innovative design solutions.",
      ],
    },
    {
      title: "Image Processing Capacity:",
      border: "border-sky-500",
      bg: "bg-sky-500",
      content: [
        "Clipping – 1600 images/day",
        "Masking – 1000 images/day",
        "Retouch – 1000 images/day",
        "Neck Joint/GHOST MANNEQUIN – 1500 images/day",
      ],
    },
    {
      title: "Human Resources:",
      border: "border-emerald-500",
      bg: "bg-emerald-500",
      content: [
        "60 Junior Graphic Designers",
        "50 Senior Graphic Designers (Supervisors)",
        "15 Quality Assurance Professionals",
        "3 Production Management",
      ],
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8 px-4 sm:px-6 lg:px-20">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className={`border-2 ${card.border} rounded-2xl overflow-hidden shadow-sm`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className={`text-white text-center py-3 font-bold text-lg md:text-xl ${card.bg}`}>
              {card.title}
            </div>
            <div className="p-4 md:p-6 text-center text-gray-800 text-sm sm:text-base">
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
