import image1 from "../../../../src/assets/Service/blog/blogimage (1).jpg";
import image2 from "../../../../src/assets/Blog/photo (1).png";
import image3 from "../../../../src/assets/Blog/photo (2).png";
import Section2 from "./Section2";

const Section1 = () => {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left Blog Content */}
        <div className="lg:col-span-2 space-y-6">
          <img src={image1} alt="Blog" className="rounded-2xl w-full mb-4 object-cover" />
          
          <p className="text-xs uppercase tracking-wide text-blue-500 font-semibold mb-2">Uncategorized</p>
          
          <h2 className="text-xl sm:text-2xl font-bold text-[#3B0EA6] leading-snug mb-4">
            Producing Ideas Is The Main Way To Grow
          </h2>
          
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing sed do eiusmod tempor incid idunt labore dolore magna aliqua...
          </p>

          <ul className="space-y-2 mb-6 text-sm sm:text-base">
            {[
              "Free Download Instagram Logo",
              "Illustrator from Instagram Logo & Vectors SVG collection",
              "Vectors SVG illustration graphic art design format",
              "Following vectors are from same pack as this vector also",
              "Instagram Logo SVG Vector is a part of Social Websites"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2"><span>✔️</span>{item}</li>
            ))}
          </ul>

          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt labore dolore magna aliqua...
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <img src={image2} alt="Blog 2" className="rounded-xl w-full" />
            <img src={image3} alt="Blog 3" className="rounded-xl w-full" />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Search */}
          <div className="bg-white shadow-lg rounded-2xl p-5">
            <h3 className="text-lg font-semibold mb-3 border-l-4 border-blue-600 pl-2">Search</h3>
            <input type="text" placeholder="Search..." className="w-full border border-gray-200 rounded-md p-2 mb-3 focus:outline-none" />
            <button className="bg-[#3B0EA6] text-white w-full py-2 rounded-md">Search</button>
          </div>

          {/* Recent Posts */}
   <div className="bg-white p-4 shadow-md rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">Recent Posts</h3>
                    <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
                        <li className="hover:text-blue-600 cursor-pointer">Survival Strategies To Ensure Business Domination</li>
                        <li className="hover:text-blue-600 cursor-pointer">Survival Strategies To Ensure Business Domination</li>
                        <li className="hover:text-blue-600 cursor-pointer">Survival Strategies To Ensure Business Domination</li>
                        <li className="hover:text-blue-600 cursor-pointer">Employee interest in the successful achievement.</li>
                        <li className="hover:text-blue-600 cursor-pointer">Employee interest in the successful achievement.</li>
                    </ul>
                </div>

          {/* Recent Comments */}
          <div className="bg-white shadow-lg rounded-2xl p-5">
            <h3 className="text-lg font-semibold mb-4 border-l-4 border-blue-600 pl-2">Recent Comments</h3>
            <p className="text-sm text-gray-500">No comments to show.</p>
          </div>

          {/* Categories */}
       <div className="bg-white shadow-lg rounded-2xl p-5">
  <h3 className="text-lg font-semibold mb-4 border-l-4 border-blue-600 pl-2">Categories</h3>
  <ul className="space-y-2 text-sm text-gray-700">
    {["Business", "Gallery", "IT", "Post", "Retouch", "Standard","Technogy","Uncategorized"].map((cat, i) => (
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

      {/* Section2 */}
      <div className="max-w-6xl mx-auto ">
        <Section2 />
      </div>
    </section>
  );
};

export default Section1;
