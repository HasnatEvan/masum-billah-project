import LatestPostImage1 from "../../../src/assets/Blog/image (1).png";
import LatestPostImage2 from "../../../src/assets/Blog/image (2).png";
import LatestPostImage3 from "../../../src/assets/Blog/image (3).png";

import Cardimage1 from "../../../src/assets/Blog/image (3).png";
import Cardimage2 from "../../../src/assets/Blog/image (2).png";
import { Link } from "react-router-dom";

const BlogSection2 = () => {
    return (
        <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side - Blog Cards */}
            <div className="lg:col-span-2 space-y-10">
                {/* Card 1 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="flex justify-center">
                        <img
                            src={Cardimage1}
                            alt="Blog 1"
                            className="w-full md:w-[85%] h-64 md:h-80 object-cover rounded-lg mt-3"
                        />
                    </div>
                    <div className="p-4 md:p-5">
                        <p className="text-gray-500 text-sm mb-2">
                            By: <span className="font-medium">FT Toshlar</span> | February 9, 2022
                        </p>
                        <h2 className="text-lg md:text-xl font-semibold mb-2 hover:text-blue-600 cursor-pointer">
                            Survival Strategies To Ensure Business Domination
                        </h2>
                        <p className="text-gray-600 text-sm md:text-base mb-4">
                            Producing Ideas Is The Main Way To Grow, Producing Ideas Is The Main Way To Grow Lorem ipsum dolor sit […]
                        </p>
                      <Link to={'/employee-interest-in-the-successful-achievement-4'}>
                        <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded-md hover:bg-blue-700 transition">
                            Read More
                        </button>
                      </Link>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="flex justify-center">
                        <img
                            src={Cardimage2}
                            alt="Blog 2"
                            className="w-full md:w-[85%] h-64 md:h-80 object-cover rounded-lg mt-3"
                        />
                    </div>
                    <div className="p-4 md:p-5">
                        <p className="text-gray-500 text-sm mb-2">
                            By: <span className="font-medium">FT Toshlar</span> | February 9, 2022
                        </p>
                        <h2 className="text-lg md:text-xl font-semibold mb-2 hover:text-blue-600 cursor-pointer">
                            Employee interest in the successful achievement.
                        </h2>
                        <p className="text-gray-600 text-sm md:text-base mb-4">
                            Producing Ideas Is The Main Way To Grow, Producing Ideas Is The Main Way To Grow Lorem ipsum dolor sit […]
                        </p>
                      <Link to={'/employee-interest-in-the-successful-achievement-5'}>
                        <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded-md hover:bg-blue-700 transition">
                            Read More
                        </button>
                      </Link>
                    </div>
                </div>
            </div>

            {/* Right Side - Sidebar */}
            <div className="space-y-8 lg:space-y-10 mt-10 lg:mt-0">
                {/* Latest Posts */}
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                    <h3 className="text-xl md:text-2xl font-semibold mb-6 border-l-4 border-blue-600 pl-3">Latest Posts</h3>
                    <div className="space-y-6">
                        {[LatestPostImage1, LatestPostImage2, LatestPostImage3].map((img, index) => (
                            <div key={index} className="flex items-center gap-4 cursor-pointer hover:text-blue-600">
                                <img src={img} alt={`Latest ${index+1}`} className="w-20 h-20 rounded-md object-cover" />
                                <div>
                                    <p className="text-sm text-gray-500 mb-2">February 9, 2022</p>
                                    <p className="text-base md:text-sm font-medium leading-snug">
                                        Survival Strategies To Ensure Business...
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tags */}
                <div className="bg-white p-4 md:p-6 shadow-lg rounded-xl mt-10 md:mt-20">
                    <h3 className="text-xl md:text-2xl font-semibold mb-5 border-l-4 border-blue-600 pl-3">Tags</h3>
                    <div className="flex flex-wrap gap-3">
                        {["Business", "IT", "Post", "Technology", "Thumbnail"].map((tag, idx) => (
                            <span
                                key={idx}
                                className="px-4 py-2 text-base border rounded-md cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSection2;
