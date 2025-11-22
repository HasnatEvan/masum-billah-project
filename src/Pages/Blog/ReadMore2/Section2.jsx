import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import LazyImage from "../../../Components/LazyImage";

import LatestPostImage1 from "../../../../src/assets/Service/blog/blogimage (1).jpg";
import LatestPostImage2 from "../../../../src/assets/Service/blog/blogimage (2).jpg";
import LatestPostImage3 from "../../../../src/assets/Service/blog/blogimage (3).jpg";

const Section2 = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT SUMMARY */}
        <div className="lg:col-span-2 space-y-6">

          {/* QUOTE */}
          <div className="bg-[#EEF4FF] p-6 rounded-xl">
            <p className="text-gray-800 text-lg font-semibold">
              <span className="text-4xl text-[#3B0EA6] mr-2">❝</span>
              Image masking keeps every tiny detail — from hair to transparency — perfectly natural.
            </p>
            <p className="text-gray-500 text-sm mt-2">— Graphics Amazon Team</p>
          </div>

          {/* SMALL DESCRIPTION */}
          <p className="text-gray-600 leading-relaxed">
            Image masking is essential for soft-edged, transparent, or complex images. It keeps visuals clean, natural, 
            and professional — especially for fashion, models, jewelry, and e-commerce product photos. At Graphics Amazon, 
            we ensure pixel-perfect masking for outstanding quality.
          </p>

          {/* SHARE */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Share:</h3>
            <div className="flex gap-3">
              {[FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn].map((Icon, i) => (
                <a 
                  key={i} 
                  className="border border-gray-300 p-2 rounded-full text-gray-700 hover:bg-[#3B0EA6] hover:text-white transition"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* COMMENTS */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Leave a Comment</h3>

            <div className="bg-white p-6 shadow-lg rounded-xl space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input placeholder="Your Name *" className="border-b border-gray-300 pb-2 text-sm" />
                <input placeholder="Your Email *" className="border-b border-gray-300 pb-2 text-sm" />
              </div>

              <textarea 
                placeholder="Your Comment..." 
                rows="5" 
                className="border-b border-gray-300 pb-2 w-full text-sm"
              ></textarea>

              <button className="bg-[#3B0EA6] text-white px-6 py-2 rounded-md uppercase text-sm">
                Send Message
              </button>
            </div>
          </div>

        </div>

        {/* RIGHT LATEST POSTS */}
        <div className="space-y-6">

          <div className="bg-white p-6 shadow-lg rounded-xl">
            <h3 className="text-xl font-semibold mb-5 border-l-4 border-blue-600 pl-3">
              Latest Posts
            </h3>

            <div className="space-y-6">

              {/* POST 1 */}
              <div className="flex items-start gap-4">
                <LazyImage
                  src={LatestPostImage1}
                  alt="Post 1"
                  width="120"
                  height="120"
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-contain p-1"
                />

                <div>
                  <p className="text-sm text-gray-400">February 9, 2022</p>
                  <p className="font-semibold text-gray-800 hover:text-[#3B0EA6] cursor-pointer leading-snug">
                    Why Clipping Path Services Are Essential for E-commerce Businesses
                  </p>
                </div>
              </div>

              {/* POST 2 */}
              <div className="flex items-start gap-4">
                <LazyImage
                  src={LatestPostImage2}
                  alt="Post 2"
                  width="120"
                  height="120"
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-contain  p-1"
                />

                <div>
                  <p className="text-sm text-gray-400">February 9, 2022</p>
                  <p className="font-semibold text-gray-800 hover:text-[#3B0EA6] cursor-pointer leading-snug">
                  How Image Masking Transforms Your Photos into Perfection
                  </p>
                </div>
              </div>

              {/* POST 3 */}
              <div className="flex items-start gap-4">
                <LazyImage
                  src={LatestPostImage3}
                  alt="Post 3"
                  width="120"
                  height="120"
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-contain  p-1"
                />

                <div>
                  <p className="text-sm text-gray-400">February 9, 2022</p>
                  <p className="font-semibold text-gray-800 hover:text-[#3B0EA6] cursor-pointer leading-snug">
                 How Professional Photo Retouching Boosts E-commerce Success
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* TAGS */}
          <div className="bg-white p-6 shadow-lg rounded-xl">
            <h3 className="text-xl font-semibold mb-4 border-l-4 border-blue-600 pl-3">Tags</h3>

            <div className="flex flex-wrap gap-3">
              {["Masking", "Clipping Path", "Retouching", "E-commerce Editing", "Product Photo"]
                .map((tag, i) => (
                  <span 
                    key={i} 
                    className="border px-4 py-2 rounded-lg text-gray-700 hover:bg-[#3B0EA6] hover:text-white cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Section2;
