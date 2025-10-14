import { Award, Gem, Puzzle } from "lucide-react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const FunFactSection = () => {
  const stats = [
    {
      icon: <Award className="text-orange-500 w-10 h-10" />,
      bg: "bg-orange-100",
      number: 250,
      label: (
        <>
          Our Trusted <br /> Active Clients
        </>
      ),
      border: "border-orange-400",
      textColor: "text-orange-500",
    },
    {
      icon: <Gem className="text-blue-500 w-10 h-10" />,
      bg: "bg-blue-100",
      number: 20,
      label: (
        <>
          Our Experienced <br /> Members
        </>
      ),
      border: "border-blue-500",
      textColor: "text-blue-500",
    },
    {
      icon: <Puzzle className="text-green-500 w-10 h-10" />,
      bg: "bg-green-100",
      number: 12,
      label: (
        <>
          Years Providing <br /> Services
        </>
      ),
      border: "border-green-500",
      textColor: "text-green-500",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-200 to-purple-300 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 px-6 sm:px-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-indigo-700 font-semibold text-lg">Fun Fact</p>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-snug mt-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We're Serious About Helping <br /> Small Businesses
          </motion.h2>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-10 md:px-0">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`bg-white shadow-lg rounded-2xl flex items-center justify-between p-6 border-l-8 ${stat.border}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Icon + Label */}
              <div className="flex flex-col items-start">
                <div className={`${stat.bg} p-4 rounded-full mb-4`}>
                  {stat.icon}
                </div>
                <p className="text-gray-900 font-semibold text-sm sm:text-base md:text-base leading-snug">
                  {stat.label}
                </p>
              </div>

              {/* Number */}
              <p className={`${stat.textColor} text-2xl sm:text-3xl md:text-4xl font-bold`}>
                <CountUp end={stat.number} duration={2} />+
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFactSection;
