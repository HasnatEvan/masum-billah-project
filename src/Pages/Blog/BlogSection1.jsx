import { Link } from "react-router-dom";
import image1 from "../../../src/assets/Service/blog/blogimage (1).jpg";
import image2 from "../../../src/assets/Service/blog/blogimage (2).jpg";

const BlogSection1 = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

      {/* ====== Blog Content Section ====== */}
      <div className="lg:col-span-2 space-y-8">

        {/* === Blog Card 1 (Clipping Path Services) === */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center">
            <img
              src={image1}
              alt="Clipping Path Services"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              width="800"
              height="500"
              className="w-full md:w-[85%] h-64 md:h-80 object-cover rounded-lg mt-3"
            />
          </div>

          <div className="p-4 md:p-5">
            <p className="text-sm text-gray-500 mb-2">
              By: <span className="font-medium">Graphics Amazon</span> | January 12, 2024
            </p>

            <h2 className="text-lg md:text-xl font-semibold mb-2 hover:text-blue-600 cursor-pointer">
              Why Clipping Path Services Are Essential for E-commerce Businesses
            </h2>

            <p className="text-gray-600 mb-4 text-sm md:text-base">
              High-quality visuals are the foundation of eCommerce success. Clipping Path Services
              help remove backgrounds, enhance product appeal, ensure brand consistency,
              and build customer trust—leading to higher conversions...
            </p>

            <Link to={"/why-clipping-path-services-are-essential"}>
              <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
                Read More
              </button>
            </Link>
          </div>
        </div>

        {/* === Blog Card 2 (Image Masking Services) === */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center">
            <img
              src={image2}
              alt="Image Masking Services"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              width="800"
              height="500"
              className="w-full md:w-[85%] h-64 md:h-80 object-cover rounded-lg mt-3"
            />
          </div>

          <div className="p-4 md:p-5">
            <p className="text-sm text-gray-500 mb-2">
              By: <span className="font-medium">Graphics Amazon</span> | January 20, 2024
            </p>

            <h2 className="text-lg md:text-xl font-semibold mb-2 hover:text-blue-600 cursor-pointer">
              How Image Masking Transforms Your Photos into Perfection
            </h2>

            <p className="text-gray-600 mb-4 text-sm md:text-base">
              Image masking is essential for complex subjects like hair, fur, or transparent
              objects. It ensures natural edges, smooth background removal, and flawless
              presentation—making your eCommerce visuals clean, realistic, and high-quality...
            </p>

            <Link to={"/how-image-masking-transforms-your-photos"}>
              <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
                Read More
              </button>
            </Link>
          </div>
        </div>

      </div>

      {/* ====== Sidebar Section ====== */}
      <div className="space-y-6 lg:space-y-6">

        {/* Search */}
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Search</h3>
          <div className="flex">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 border px-3 py-2 rounded-l focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700">
              Search
            </button>
          </div>
        </div>

        {/* Recent Posts */}
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Recent Posts</h3>
          <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
            <li className="hover:text-blue-600 cursor-pointer">Why Clipping Path Services Are Essential</li>
            <li className="hover:text-blue-600 cursor-pointer">How Image Masking Transforms Photos</li>
            <li className="hover:text-blue-600 cursor-pointer">E-commerce Branding Strategies</li>
            <li className="hover:text-blue-600 cursor-pointer">Optimized Product Image Techniques</li>
            <li className="hover:text-blue-600 cursor-pointer">Business Growth Strategies</li>
          </ul>
        </div>

        {/* Recent Comments */}
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Recent Comments</h3>
          <p className="text-sm text-gray-600">No comments to show.</p>
        </div>

        {/* Categories */}
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-blue-600 cursor-pointer border-b pb-2">Business</li>
            <li className="hover:text-blue-600 cursor-pointer border-b pb-2">Graphics Design</li>
            <li className="hover:text-blue-600 cursor-pointer border-b pb-2">E-commerce</li>
            <li className="hover:text-blue-600 cursor-pointer border-b pb-2">Photography</li>
            <li className="hover:text-blue-600 cursor-pointer border-b pb-2">Technology</li>
            <li className="hover:text-blue-600 cursor-pointer border-b pb-2">Marketing</li>
          </ul>
        </div>

      </div>

    </div>
  );
};

export default BlogSection1;
