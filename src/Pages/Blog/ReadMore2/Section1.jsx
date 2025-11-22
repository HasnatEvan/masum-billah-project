import LazyImage from "../../../Components/LazyImage";

import image1 from "../../../../src/assets/Service/blog/blogimage (2).jpg";
import image2 from "../../../../src/assets/Blog/photo (1).png";
import image3 from "../../../../src/assets/Blog/photo (2).png";
import Section2 from "./Section2";

const Section1 = () => {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* LEFT BLOG CONTENT */}
        <div className="lg:col-span-2 space-y-6">

          {/* MAIN BLOG IMAGE */}
          <LazyImage
            src={image1}
            alt="Image Masking Blog"
            width="100%"
            height="350"
            className="rounded-2xl w-full mb-4 object-cover"
          />

          <p className="text-xs uppercase tracking-wide text-blue-500 font-semibold">
            Photo Editing • Image Masking
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#3B0EA6] leading-snug">
            How Image Masking Transforms Your Photos into Perfection
          </h2>

          {/* ---- NEW BLOG CONTENT ---- */}

          <p className="text-gray-700">
            In the world of digital product photography, every detail matters. To make your images look flawless and natural, Image Masking Services play a vital role. Unlike simple clipping paths, masking is used for complex images especially those with hair, fur, or transparent edges. At Graphics Amazon, we provide high-quality image masking solutions that maintain fine details and deliver clean, realistic results for your eCommerce or advertising needs.
          </p>

          <h3 className="font-semibold text-xl text-gray-800">What is Image Masking?</h3>
          <p className="text-gray-700">
            Image masking is an advanced photo editing technique used to separate the subject from the background — especially when the edges are too soft or detailed for regular clipping paths. For example, hair, feathers, smoke, or glass cannot be cut precisely using normal selection tools. Masking preserves every fine detail while removing or changing the background perfectly.
          </p>

          <h3 className="font-semibold text-xl text-gray-800">Why Image Masking Matters for E-commerce</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Keep soft or transparent areas natural</li>
            <li>Replace or modify backgrounds smoothly</li>
            <li>Highlight products without harsh edges</li>
            <li>Make images marketplace-ready for Amazon, eBay, and Shopify</li>
          </ul>

          <p className="text-gray-700">
            When customers see neat, realistic images, they trust your brand more and are more likely to make a purchase.
          </p>

          <h3 className="font-semibold text-xl text-gray-800">Different Types of Image Masking</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><strong>Layer Masking:</strong> Smooth blending and controlled adjustments.</li>
            <li><strong>Alpha Channel Masking:</strong> For transparent/semi-transparent items.</li>
            <li><strong>Hair or Fur Masking:</strong> Best for models, animals, & fine-edge work.</li>
            <li><strong>Transparency Masking:</strong> For glass, plastic, or liquids.</li>
          </ul>

          <h3 className="font-semibold text-xl text-gray-800">Why Choose Graphics Amazon?</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Skilled editors with years of Photoshop experience</li>
            <li>Fast turnaround time with consistent quality</li>
            <li>Affordable pricing for bulk image processing</li>
            <li>100% satisfaction guarantee</li>
          </ul>

          <p className="text-gray-700">
            Image quality defines your brand identity — and we treat every project with care and precision.
          </p>

          <h3 className="font-semibold text-xl text-gray-800">Conclusion</h3>
          <p className="text-gray-700">
            Image Masking Services are essential for businesses that care about image perfection. Whether it's model photos, jewelry, or complex product visuals, masking brings out every detail — making your visuals stand out. At Graphics Amazon, we turn complex images into clean, professional, and market-ready visuals that enhance your brand appeal and boost online sales.
          </p>

          {/* SMALL IMAGES GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <LazyImage src={image2} alt="Blog 2" className="rounded-xl w-full object-cover" />
            <LazyImage src={image3} alt="Blog 3" className="rounded-xl w-full object-cover" />
          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">

          {/* Search */}
          <div className="bg-white shadow-lg rounded-2xl p-5">
            <h3 className="text-lg font-semibold mb-3 border-l-4 border-blue-600 pl-2">Search</h3>
            <input type="text" placeholder="Search..." className="w-full border border-gray-200 rounded-md p-2 mb-3" />
            <button className="bg-[#3B0EA6] text-white w-full py-2 rounded-md">Search</button>
          </div>

          {/* Recent Posts */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3">Recent Posts</h3>
            <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
              <li>Why Clipping Path Is Essential</li>
              <li>Top Photo Retouching Tips</li>
              <li>How Masking Boosts Quality</li>
            </ul>
          </div>

          {/* Categories */}
          <div className="bg-white shadow-lg rounded-2xl p-5">
            <h3 className="text-lg font-semibold mb-4 border-l-4 border-blue-600 pl-2">Categories</h3>
            <ul className="space-y-2 text-sm">
              {["Masking", "Photo Editing", "Clipping Path", "Retouching", "E-commerce Editing"].map((cat, i) => (
                <li key={i} className="border border-gray-200 px-3 py-1 rounded-lg hover:text-[#3B0EA6] cursor-pointer">
                  {cat}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* SECTION 2 */}
      <Section2 />
    </section>
  );
};

export default Section1;
