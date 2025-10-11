import { FaCheckCircle } from "react-icons/fa";

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
            iconColor: "#c53ff7",
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
            iconColor: "#7b39f8",
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
            iconColor: "#f13e75",
        },
    ];

    return (
        <section className="py-16 bg-white text-center">
            {/* Header */}
            <div className="mb-12">
                <h4 className="text-[#4b11f7] font-bold">Pricing Table</h4>
                <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
                    Our Pricing Plans
                </h2>
            </div>

            {/* Pricing Cards */}
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 px-6 md:px-0">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`w-full md:w-[380px] lg:w-[420px] rounded-xl border-2 shadow-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105 duration-300`}
                        style={{
                            borderColor:
                                index === 0
                                    ? "#c53ff7"
                                    : index === 1
                                        ? "#7b39f8"
                                        : "#f13e75", // তৃতীয় কার্ডের জন্য
                        }}
                    >
                        {/* Header */}
                        <div
                            className={`bg-gradient-to-r ${plan.color} text-white py-5 font-bold text-lg`}
                        >
                            {plan.title}
                        </div>

                        {/* Price */}
                        <div className={`${plan.light} py-8`}>
                            <h3 className="text-4xl md:text-5xl font-extrabold">{plan.price}</h3>
                            <p className="text-sm md:text-base mt-2 text-gray-700">{plan.subtitle}</p>
                        </div>

                        {/* Features */}
                        <ul className="flex-1 text-left px-8 py-6 space-y-4">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-800">
                                    <FaCheckCircle className="text-[#4b11f7] md:text-lg" />
                                    <span className="text-sm md:text-base">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Button */}
                        <div className="pb-8">
                            <button
                                className={`${plan.button} text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition duration-300`}
                                style={{
                                    borderColor:
                                        index === 0
                                            ? "#c53ff7"
                                            : index === 1
                                                ? "#7b39f8"
                                                : "#f13e75",
                                }}
                            >
                                Details Pricing
                            </button>
                        </div>
                    </div>

                ))}
            </div>
        </section>
    );
};

export default PricingSection;
