import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const plans = [
    {
        title: "STARTER PLAN",
        price: "€0.29",
        subtitle: "/ Starting Price per image",
        color: "from-purple-600 to-purple-500",
        borderColor: "border-purple-500",
        light: "bg-purple-100",
        buttonColor: "bg-purple-600 hover:bg-purple-700",
        features: [
            "€0.29 Simple Clipping Path",
            "€0.99 Simple multi Clipping Path",
            "€0.69 Simple Ghost mannequin",
            "€0.35 Simple Background remove",
            "€0.60 Simple Image Retouching",
            "€0.59 Simple Image Masking",
            "€0.70 Simple Color Correction",
            "€0.60 Simple Image Reflection",
            "€0.49 Simple Image shadowing",
            "€0.59 Simple Image Cleaning",
            "€0.29 Simple Image Cropping",
            "€5.00 Simple Photo Restoration",
            "€3.00 Simple Raster to Vector",
            "For your 50-150 image order",
            "Quality ensured",
            "Simply upload and send the files",
            "24/7 Support live support",
        ],
    },
    {
        title: "PLUS PLAN",
        price: "€0.69",
        subtitle: "/ Starting Price per image",
        color: "from-indigo-600 to-indigo-500",
        borderColor: "border-indigo-500",
        light: "bg-indigo-100",
        buttonColor: "bg-indigo-600 hover:bg-indigo-700",
        features: [
            "€0.69 Medium Clipping Path",
            "€1.49 Medium multi Clipping Path",
            "€1.00 Medium Ghost mannequin",
            "€0.69 Medium Background remove",
            "€1.00 Medium Image Retouching",
            "€0.99 Medium Image Masking",
            "€0.99 Medium Color Correction",
            "€0.99 Medium Image Reflection",
            "€0.79 Medium Image shadowing",
            "€0.89 Medium Image Cleaning",
            "€0.69 Medium Image Cropping",
            "€10.00 Medium Photo Restoration",
            "€5.00 Medium Raster to Vector",
            "For your 100-150 images order",
            "Quality ensured",
            "Simply upload and send the files",
            "24/7 Support live support",
        ],
    },
    {
        title: "ELITE PLAN",
        price: "€1.50",
        subtitle: "/ Starting Price per image",
        color: "from-pink-600 to-pink-500",
        borderColor: "border-pink-500",
        light: "bg-pink-100",
        buttonColor: "bg-pink-600 hover:bg-pink-700",
        features: [
            "€1.50 Complex Clipping Path",
            "€6.00 Complex multi Clipping Path",
            "€2.49 Complex Ghost mannequin",
            "€1.50 Complex Background remove",
            "€3.00 Complex Image Retouching",
            "€2.50 Complex Image Masking",
            "€2.50 Complex Color Correction",
            "€1.50 Complex Image Reflection",
            "€1.59 Complex Image shadowing",
            "€1.59 Complex Image Cleaning",
            "€1.50 Complex Image Cropping",
            "€20.00 Complex Photo Restoration",
            "€15.00 Complex Raster to Vector",
            "For your 50-150 image order",
            "Quality ensured",
            "Simply upload and send the files",
            "24/7 Support live support",
        ],
    },
];

const PricingTable = () => {
    return (
        <section className="py-16 bg-white text-center">
            {/* Header */}
            <div className="mb-12 px-4 md:px-0">
                <h4 className="text-[#4b11f7] font-bold text-lg md:text-xl">Pricing Table</h4>
                <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
                    Our Detailed Pricing Plans
                </h2>
                <p className="text-gray-700 mt-2 text-sm md:text-base max-w-2xl mx-auto">
                    Depending on the complexity of your images. Send us your RAW Images as a Free Trial so that we can send you the exact pricing.
                </p>
            </div>

            {/* Pricing Cards */}
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 px-6 md:px-0">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`w-full md:w-[380px] lg:w-[420px] rounded-xl border-2 ${plan.borderColor} shadow-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105 duration-300`}
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
                                    <FaCheckCircle className=" md:text-lg" />
                                    <span className="text-sm md:text-base">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Button */}
                        <div className="pb-8">
                            <button
                                className={`${plan.buttonColor} text-white px-8 py-3 rounded-full font-medium transition duration-300`}
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

export default PricingTable;
