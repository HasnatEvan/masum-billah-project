import image1 from "../../../../src/assets/Service/blog/blogimage (3).jpg";
import image2 from "../../../../src/assets/Blog/photo (1).png";
import image3 from "../../../../src/assets/Blog/photo (2).png";
import Section2 from "./Section2";
import LazyImage from "../../../Components/LazyImage";

const Section1 = () => {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT BLOG */}
        <div className="lg:col-span-2 space-y-6">

          {/* MAIN IMAGE */}
          <LazyImage
            src={image1}
            alt="Blog Main"
            className="rounded-2xl w-full mb-4 object-cover"
          />

          <p className="text-xs uppercase tracking-wide text-blue-500 font-semibold mb-2">
            Photo Editing • Retouching
          </p>

          {/* Title stays same as you requested */}
          <h2 className="text-xl sm:text-2xl font-bold text-[#3B0EA6] leading-snug mb-4">
            Producing Ideas Is The Main Way To Grow
          </h2>

          {/* 🔥 NEW FULL CONTENT YOU PROVIDED */}

          <h3 className="text-xl font-semibold text-gray-800">How Professional Photo Retouching Boosts E-commerce Success</h3>

          <p className="text-gray-700">
            In online business, your product photos speak louder than words. Customers decide within seconds whether they’ll buy or skip — 
            and that decision often depends on how your images look. This is why Photo Retouching Services have become an essential part 
            of every successful e-commerce strategy. At Graphics Amazon, we help transform ordinary product photos into stunning visuals 
            that build trust, attract customers, and increase sales.
          </p>

          <h3 className="font-semibold text-lg text-gray-800">Perfecting Product Appearance</h3>
          <p className="text-gray-700">
            Even a good product photo may contain unwanted dust, scratches, or lighting issues. With professional photo retouching, 
            these flaws are carefully removed to make the product look clean and appealing. Our experts adjust color balance, brightness, 
            and sharpness so every item looks perfect — without losing its natural look.
          </p>

          <h3 className="font-semibold text-lg text-gray-800">Creating a Consistent Brand Image</h3>
          <p className="text-gray-700">
            Uniform lighting, tone, and texture across all your images help establish a strong brand identity. At Graphics Amazon, 
            we ensure your entire product gallery maintains the same professional standard — whether it’s fashion, jewelry, electronics, 
            or furniture. This consistency helps customers recognize your brand instantly.
          </p>

          <h3 className="font-semibold text-lg text-gray-800">Increasing Customer Trust</h3>
          <p className="text-gray-700">
            When customers see clear, high-quality, and realistic photos, they trust your brand more. Photo retouching builds that 
            confidence by making products look professional yet genuine. Realistic visuals always drive higher engagement and conversion.
          </p>

          <h3 className="font-semibold text-lg text-gray-800">Optimizing Images for Online Platforms</h3>
          <p className="text-gray-700">
            Every e-commerce platform — like Amazon, eBay, or Shopify — has its own image guidelines. Our retouching team ensures your 
            images meet those standards, load fast, and look amazing on any device. Optimized photos improve user experience and boost SEO.
          </p>

          <h3 className="font-semibold text-lg text-gray-800">Conclusion</h3>
          <p className="text-gray-700">
            Professional Photo Retouching Services are not just about making images beautiful — they’re about making your brand credible, 
            consistent, and conversion-focused. At Graphics Amazon, we combine skill, precision, and creativity to deliver flawless product 
            photos that attract buyers and boost your business growth.
          </p>

          {/* GRID IMAGES */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <LazyImage src={image2} alt="Blog 2" className="rounded-xl w-full" />
            <LazyImage src={image3} alt="Blog 3" className="rounded-xl w-full" />
          </div>

        </div>

        {/* SIDEBAR */}
        <div className="space-y-6">

          {/* Search */}
          <div className="bg-white shadow-lg rounded-2xl p-5">
            <h3 className="text-lg font-semibold mb-3 border-l-4 border-blue-600 pl-2">Search</h3>
            <input type="text" placeholder="Search..." className="w-full border border-gray-200 rounded-md p-2 mb-3" />
            <button className="bg-[#3B0EA6] text-white w-full py-2 rounded-md">Search</button>
          </div>

          {/* Recent Posts */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Recent Posts</h3>
            <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
              <li>How Clipping Path Improves Product Quality</li>
              <li>How Image Masking Keeps Details Clean</li>
              <li>Why Retouching Boosts E-commerce Sales</li>
            </ul>
          </div>

          {/* Categories */}
          <div className="bg-white shadow-lg rounded-2xl p-5">
            <h3 className="text-lg font-semibold mb-4 border-l-4 border-blue-600 pl-2">Categories</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {["Retouching", "Clipping Path", "Masking", "Product Editing", "Branding", "E-commerce Graphics"]
                .map((cat, i) => (
                  <li key={i} className="border border-gray-200 rounded-lg px-3 py-1 hover:text-[#3B0EA6] cursor-pointer transition">
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
