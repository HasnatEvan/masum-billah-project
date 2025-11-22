import image1 from "../../../../src/assets/Service/blog/blogimage (1).jpg";
import image2 from "../../../../src/assets/Blog/photo (1).png";
import image3 from "../../../../src/assets/Blog/photo (2).png";
import Section2 from "./Section2";

const Section1 = () => {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT BLOG CONTENT */}
        <div className="lg:col-span-2 space-y-6">

          {/* Main Blog Image */}
          <img
            src={image1}
            alt="Blog"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            width="1200"
            height="600"
            className="rounded-2xl w-full mb-4 object-cover"
          />

          {/* Category */}
          <p className="text-xs uppercase tracking-wide text-blue-500 font-semibold mb-2">
            Clipping Path
          </p>

          {/* Blog Title */}
          <h2 className="text-xl sm:text-3xl font-bold text-[#3B0EA6] leading-snug mb-4">
            Why Clipping Path Services Are Essential for E-commerce Businesses
          </h2>

          {/* Blog Content */}
          <p className="text-gray-600 mb-4">
            In the fast-growing world of eCommerce, high-quality product images are the heart of online sales. Since customers cannot physically touch or see products, visuals become the most powerful way to build trust and encourage purchases. This is where Clipping Path Services play a vital role. At Graphics Amazon, we provide professional clipping path solutions that make your product photos look clean, attractive, and ready for any marketplace.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-4">Enhanced Product Presentation</h3>
          <p className="text-gray-600 mb-4">
            A clipping path allows you to remove or change backgrounds with precision, keeping the product edges sharp and natural. Clean, distraction-free backgrounds make your product the main focus. Whether it’s for Amazon, eBay, Shopify, or your own online store — professionally edited images always grab attention and drive engagement.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-4">Consistent Branding</h3>
          <p className="text-gray-600 mb-4">
            Consistency is key in visual marketing. Using the same background style and image tone helps create a strong brand identity. Our clipping path experts at Graphics Amazon ensure that every product image matches your brand’s look and feel — helping you maintain professionalism across all platforms.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-4">Better Conversion Rates</h3>
          <p className="text-gray-600 mb-4">
            Professional, clean, and uniform product images help build buyer confidence. When customers see high-quality visuals, they perceive the brand as trustworthy and premium. This directly leads to higher conversion rates and more sales for your online business.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-4">Cost-Effective Outsourcing</h3>
          <p className="text-gray-600 mb-6">
            Outsourcing clipping path services to experts like Graphics Amazon saves both time and money. You don’t need an in-house editing team or expensive software. Our skilled editors handle everything efficiently, delivering flawless results at a competitive price — allowing you to focus on growing your business.
          </p>

          <h3 className="text-lg font-semibold text-gray-800">Conclusion</h3>
          <p className="text-gray-600 mb-8">
            Investing in a reliable Clipping Path Service is not just about image editing — it’s about creating a strong visual identity that sells. At Graphics Amazon, we help eCommerce brands enhance their product presentation, maintain consistency, and boost sales through professional photo editing solutions.
          </p>

          {/* Blog Inner Images */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <img
              src={image2}
              alt="Blog 2"
              loading="lazy"
              decoding="async"
              width="300"
              height="200"
              className="rounded-xl w-full"
            />
            <img
              src={image3}
              alt="Blog 3"
              loading="lazy"
              decoding="async"
              width="300"
              height="200"
              className="rounded-xl w-full"
            />
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">

          {/* Search */}
          <div className="bg-white shadow-lg rounded-2xl p-5">
            <h3 className="text-lg font-semibold mb-3 border-l-4 border-blue-600 pl-2">Search</h3>
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-200 rounded-md p-2 mb-3"
            />
            <button className="bg-[#3B0EA6] text-white w-full py-2 rounded-md">
              Search
            </button>
          </div>

          {/* Recent Posts */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Recent Posts</h3>
            <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
              <li className="hover:text-blue-600 cursor-pointer">Why Clipping Path Services Are Must</li>
              <li className="hover:text-blue-600 cursor-pointer">Product Retouching Tips</li>
              <li className="hover:text-blue-600 cursor-pointer">Best Editing Tools</li>
            </ul>
          </div>

          {/* Recent Comments */}
          <div className="bg-white shadow-lg rounded-2xl p-5">
            <h3 className="text-lg font-semibold mb-4 border-l-4 border-blue-600 pl-2">
              Recent Comments
            </h3>
            <p className="text-sm text-gray-500">No comments to show.</p>
          </div>

          {/* Categories */}
          <div className="bg-white shadow-lg rounded-2xl p-5">
            <h3 className="text-lg font-semibold mb-4 border-l-4 border-blue-600 pl-2">
              Categories
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                "Clipping Path",
                "Image Editing",
                "Retouching",
                "Product Photos",
                "E-commerce Tips",
                "Branding",
                "Uncategorized",
              ].map((cat, i) => (
                <li
                  key={i}
                  className="border border-gray-200 rounded-lg px-3 py-1 hover:text-[#3B0EA6] cursor-pointer transition"
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="max-w-6xl mx-auto">
        <Section2 />
      </div>
    </section>
  );
};

export default Section1;
