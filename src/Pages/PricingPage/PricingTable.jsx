import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const plans = [
  {
    title: "STARTER PLAN",
    price: "$0.29",
    subtitle: "/ Starting Price Per Image",
    color: "from-purple-600 to-purple-500",
    borderColor: "border-purple-500",
    light: "bg-purple-100",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
    features: [
      "$0.29 Simple Clipping Path",
      "$0.89 Simple multi Clipping Path",
      "$0.49 Simple Ghost mannequin",
      "$0.29 Simple Background remove",
      "$0.39 Simple Image Retouching",
      "$0.39 Simple Image Masking",
      "$0.49 Simple Color Correction",
      "$0.59 Simple Image Reflection",
      "$0.49 Simple Image Shadowing",
      "$0.29 Simple Image Cropping",
      "$3.99 Simple Photo Restoration",
      "$1.99 Simple Raster to Vector",
      "$0.39 Simple Car Image Editing",
      "For orders of 50–150 images",
      "Quality Guaranteed",
      "Just upload and send your files",
      "24/7 Live Support",
    ],
  },
  {
    title: "PLUS PLAN",
    price: "$0.59",
    subtitle: "/ Starting Price Per Image",
    color: "from-indigo-600 to-indigo-500",
    borderColor: "border-indigo-500",
    light: "bg-indigo-100",
    buttonColor: "bg-indigo-600 hover:bg-indigo-700",
    features: [
      "$0.59 Medium Clipping Path",
      "$1.29 Medium multi Clipping Path",
      "$0.99 Medium Ghost mannequin",
      "$0.59 Medium Background remove",
      "$0.89 Medium Image Retouching",
      "$0.89 Medium Image Masking",
      "$0.99 Medium Color Correction",
      "$0.89 Medium Image Reflection",
      "$0.69 Medium Image Shadowing",
      "$0.59 Medium Image Cropping",
      "$6.99 Medium Photo Restoration",
      "$4.99 Medium Raster to Vector",
      "$0.89 Medium Car Image Editing",
      "For orders of 100–150 images",
      "Quality Guaranteed",
      "Just upload and send your files",
      "24/7 Live Support",
    ],
  },
  {
    title: "ELITE PLAN",
    price: "$1.49",
    subtitle: "/ Starting Price Per Image",
    color: "from-pink-600 to-pink-500",
    borderColor: "border-pink-500",
    light: "bg-pink-100",
    buttonColor: "bg-pink-600 hover:bg-pink-700",
    features: [
      "$1.49 Complex Clipping Path",
      "$4.99 Complex multi Clipping Path",
      "$1.99 Complex Ghost mannequin",
      "$1.49 Complex Background remove",
      "$2.89 Complex Image Retouching",
      "$1.99 Complex Image Masking",
      "$2.49 Complex Color Correction",
      "$1.49 Complex Image Reflection",
      "$1.69 Complex Image Shadowing",
      "$1.49 Complex Image Cropping",
      "$15.99 Complex Photo Restoration",
      "$10.99 Complex Raster to Vector",
      "$1.99 Complex Car Image Editing",
      "For orders of 100–150 images",
      "Quality Guaranteed",
      "Just upload and send your files",
      "24/7 Live Support",
    ],
  },
];

const PricingTable = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
      {/* Header */}
   <div className="mb-10 sm:mb-12 md:mb-16 px-2 md:px-0">
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
    Pricing Table
  </h2>

  <p className="text-gray-700 mt-2 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
    Our detailed pricing plans depend on the complexity of your images.
  </p>

  <p className="text-gray-700 mt-2 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
    Send us your RAW images for a free trial, and we'll provide you with the exact pricing.
  </p>
</div>


      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`w-full md:w-[300px] lg:w-[360px] xl:w-[380px] rounded-xl border-2 ${plan.borderColor} shadow-lg overflow-hidden flex flex-col`}
          >

            {/* Header */}
            <div
              className={`bg-gradient-to-r ${plan.color} text-white py-4 sm:py-5 md:py-6 font-bold text-base sm:text-lg md:text-xl`}
            >
              {plan.title}
            </div>

            {/* Price */}
            <div className={`${plan.light} py-6 sm:py-8 md:py-10`}>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">{plan.price}</h3>
              <p className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2 text-gray-700">{plan.subtitle}</p>
            </div>

            {/* Features */}
            <ul className="flex-1 text-left px-4 sm:px-6 md:px-8 py-4 sm:py-6 space-y-2 sm:space-y-3 md:space-y-4">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3 text-gray-800">
                  <FaCheckCircle className="text-sm sm:text-base md:text-lg mt-1 sm:mt-0" />
                  <span className="text-xs sm:text-sm md:text-base">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <div className="pb-6 sm:pb-8 md:pb-10">
              <Link to={'/free-trial'}>
              <button
  className={`${plan.buttonColor} cursor-pointer text-white px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 rounded-full font-medium transition duration-300`}
>
  Start A Free Trial
</button>


              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bulk Discount Section */}
      <div className="mt-12 sm:mt-16 bg-gray-50 rounded-2xl p-8 sm:p-12 text-center shadow-md">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Special Discount for Bulk Images!
        </h3>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          We offer 100% handmade photo editing services using Photoshop, ensuring exceptional quality in every image. Our team is committed to delivering your orders within 24 hours or even less, maintaining both speed and perfection.
        </p>
        <Link to="/contact">
          <button className="mt-6 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PricingTable;
