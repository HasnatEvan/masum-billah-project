import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import LazyImage from "../../../Components/LazyImage";

import LatestPostImage1 from "../../../../src/assets/Service/blog/blogimage (1).jpg";
import LatestPostImage2 from "../../../../src/assets/Service/blog/blogimage (2).jpg";
import LatestPostImage3 from "../../../../src/assets/Service/blog/blogimage (3).jpg";

const Section2 = () => {
    return (
        <section className="bg-white py-16 ">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                
                {/* Left Content */}
                <div className="lg:col-span-2">

                    {/* Quote Box */}
                    <div className="bg-[#EEF4FF] p-6 rounded-lg mb-6">
                        <p className="text-black font-semibold text-lg leading-snug mb-3">
                            <span className="text-4xl text-[#3B0EA6] font-serif mr-2">❝</span>
                            Producing Ideas Is The Main Way To Grow The Economy Life for Stay at Home Parents
                        </p>
                        <p className="text-gray-500 text-sm">— JHON SMITH</p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        Lorem ipsum dolor sit amet consec tetur adipisicing sed do eiusmod tempor incid idunt labore dolore magna
                        aliqua enim ad minim veniam. quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                        do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>

                    <hr className="border-gray-200 my-6" />

                    {/* Share Section */}
                    <div className="flex items-center gap-4 mb-8">
                        <span className="font-semibold text-gray-800">Share:</span>
                        <div className="flex items-center gap-3">
                            {[FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="border border-gray-300 rounded-full p-2 text-gray-600 hover:bg-[#3B0EA6] hover:text-white transition"
                                >
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>

                    <hr className="border-gray-200 mb-8" />

                    {/* Comment Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Leave A Comment</h3>
                        <div className="bg-white shadow-md rounded-xl p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                                <input
                                    type="text"
                                    placeholder="Your Name *"
                                    className="border-b border-gray-300 focus:outline-none pb-2 text-sm text-gray-700"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email *"
                                    className="border-b border-gray-300 focus:outline-none pb-2 text-sm text-gray-700"
                                />
                            </div>
                            <textarea
                                placeholder="Your Comment"
                                rows="5"
                                className="w-full border-b border-gray-300 focus:outline-none pb-2 text-sm text-gray-700 mb-4"
                            ></textarea>
                            <button className="bg-[#3B0EA6] text-white text-sm px-6 py-2 rounded-md uppercase tracking-wide hover:bg-[#270a73] transition">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="space-y-6">

                    {/* Latest Posts */}
                    <div className="bg-white shadow-md rounded-xl p-6">
                        <h3 className="text-xl font-semibold mb-5 border-l-4 border-blue-600 pl-3">
                            Latest Posts
                        </h3>

                        <div className="space-y-5">
                            {[LatestPostImage1, LatestPostImage2, LatestPostImage3].map((img, i) => (
                                <div key={i} className="flex gap-5 items-center">

                                    {/* Lazy Loaded Image */}
                                    <LazyImage
                                        src={img}
                                        alt={`Post ${i + 1}`}
                                        className="w-24 h-20 rounded-xl object-cover"
                                    />

                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">February 9, 2022</p>
                                        <p className="text-base font-semibold text-gray-800 hover:text-[#3B0EA6] cursor-pointer leading-snug">
                                            Survival Strategies To Ensure Business...
                                        </p>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="bg-white shadow-md rounded-xl p-6">
                        <h3 className="text-xl font-semibold mb-5 border-l-4 border-blue-600 pl-3">
                            Tags
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {["Business", "IT", "Post", "Technology", "Thumbnail"].map((tag, i) => (
                                <span
                                    key={i}
                                    className="text-base border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-[#3B0EA6] hover:text-white transition cursor-pointer"
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
