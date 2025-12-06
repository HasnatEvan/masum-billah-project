import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const PricingSection = () => {
    const plans = [
        {
            title: "STARTER PLAN",
            price: "€0.29",
            subtitle: "/ Starting Price per image",
            features: [
                "For your 50-150 images order",
                "Quality ensured",
                "Simply upload and send the files",
                "24/7 Support",
            ],
            color: "from-[#c53ff7] to-[#9d2df2]",
            light: "bg-[#f7e4ff]",
            button: "bg-[#c53ff7]",
            hover: "hover:bg-[#a024d0]",
        },
        {
            title: "PLUS PLAN",
            price: "€0.69",
            subtitle: "/ Starting Price per image",
            features: [
                "For your 100-150 images order",
                "Quality ensured",
                "Simply upload and send the files",
                "24/7 Support live support",
            ],
            color: "from-[#7b39f8] to-[#4b11f7]",
            light: "bg-[#efe5ff]",
            button: "bg-[#7b39f8]",
            hover: "hover:bg-[#5e21e4]",
        },
        {
            title: "ELITE PLAN",
            price: "€1.50",
            subtitle: "/ Starting Price per image",
            features: [
                "For more than 500 images order",
                "Super Quality ensured",
                "Simply upload and send the files",
                "24/7 hours live support",
            ],
            color: "from-[#f13e75] to-[#ec3e5f]",
            light: "bg-[#ffe6ee]",
            button: "bg-[#f13e75]",
            hover: "hover:bg-[#d92b62]",
        },
    ];

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-white text-center max-w-6xl mx-auto px-4">
            
            {/* Header */}
            <div className="mb-12">
                <h4 className="text-[#4b11f7] font-bold text-sm sm:text-base">Pricing Table</h4>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2">
                    Our Pricing Plans
                </h2>
            </div>

            {/* Pricing Cards */}
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-8">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`w-full sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px]
                        rounded-xl border-2 shadow-lg overflow-hidden flex flex-col
                        transition-transform transform hover:scale-103 duration-300`}
                        style={{
                            borderColor:
                                index === 0
                                    ? "#c53ff7"
                                    : index === 1
                                        ? "#7b39f8"
                                        : "#f13e75",
                        }}
                    >
                        
                        {/* Header */}
                        <div className={`bg-gradient-to-r ${plan.color} text-white py-4 sm:py-5 font-bold text-base sm:text-lg`}>
                            {plan.title}
                        </div>

                        {/* Price */}
                        <div className={`${plan.light} py-6 sm:py-8`}>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">{plan.price}</h3>
                            <p className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2 text-gray-700">
                                {plan.subtitle}
                            </p>
                        </div>

                        {/* Features */}
                        <ul className="flex-1 text-left px-6 sm:px-8 py-4 sm:py-6 space-y-3 sm:space-y-4">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-2 sm:gap-3 text-gray-800">
                                    <FaCheckCircle className="text-[#4b11f7] text-sm sm:text-base md:text-lg" />
                                    <span className="text-xs sm:text-sm md:text-base">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Button */}
                    <div className="pb-6 sm:pb-8">
    <Link to="/pricing">
        <button
            className={`${plan.button} ${plan.hover} text-white px-6 sm:px-8 py-2 sm:py-3 
            rounded-full font-medium transition duration-300 cursor-pointer`}
        >
            Details Pricing
        </button>
    </Link>
</div>


                    </div>
                ))}
            </div>
        </section>
    );
};

export default PricingSection;
