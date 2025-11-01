import { Link } from "react-router-dom";
import image1 from "../../../src/assets/Service/blog/blogimage (1).jpg";
import image2 from "../../../src/assets/Service/blog/blogimage (2).jpg";

const BlogSection1 = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* ====== Blog Content Section ====== */}
            <div className="lg:col-span-2 space-y-8">
                {/* Single Blog Card */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="flex justify-center">
                        <img
                            src={image1}
                            alt="Blog 1"
                            className="w-full md:w-[85%] h-64 md:h-80 object-cover rounded-lg mt-3"
                        />
                    </div>
                    <div className="p-4 md:p-5">
                        <p className="text-sm text-gray-500 mb-2">
                            By: <span className="font-medium">TT Tasker</span> | February 8, 2022
                        </p>
                        <h2 className="text-lg md:text-xl font-semibold mb-2 hover:text-blue-600 cursor-pointer">
                            Survival Strategies To Ensure Business Domination
                        </h2>
                        <p className="text-gray-600 mb-4 text-sm md:text-base">
                            Producing ideas is The Main Way To Grow, Producing ideas Is The Main Way To Grow Lorem ipsum dolor sit amet...
                        </p>
                        <Link to={'/employee-interest-in-the-successful-achievement-6'}>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Second Blog Card */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="flex justify-center">
                        <img
                            src={image2}
                            alt="Blog 2"
                            className="w-full md:w-[85%] h-64 md:h-80 object-cover rounded-lg mt-3"
                        />
                    </div>
                    <div className="p-4 md:p-5">
                        <p className="text-sm text-gray-500 mb-2">
                            By: <span className="font-medium">TT Tasker</span> | February 8, 2022
                        </p>
                        <h2 className="text-lg md:text-xl font-semibold mb-2 hover:text-blue-600 cursor-pointer">
                            Survival Strategies To Ensure Business Domination
                        </h2>
                        <p className="text-gray-600 mb-4 text-sm md:text-base">
                            Producing ideas is The Main Way To Grow, Producing ideas Is The Main Way To Grow Lorem ipsum dolor sit amet...
                        </p>
                        <Link to={'/employee-interest-in-the-successful-achievement-5'}>
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
                        <li className="hover:text-blue-600 cursor-pointer">Survival Strategies To Ensure Business Domination</li>
                        <li className="hover:text-blue-600 cursor-pointer">Survival Strategies To Ensure Business Domination</li>
                        <li className="hover:text-blue-600 cursor-pointer">Survival Strategies To Ensure Business Domination</li>
                        <li className="hover:text-blue-600 cursor-pointer">Employee interest in the successful achievement.</li>
                        <li className="hover:text-blue-600 cursor-pointer">Employee interest in the successful achievement.</li>
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
                        <li className="hover:text-blue-600 cursor-pointer border-b border-gray-300 pb-2">Business</li>
                        <li className="hover:text-blue-600 cursor-pointer border-b border-gray-300 pb-2">Gallery</li>
                        <li className="hover:text-blue-600 cursor-pointer border-b border-gray-300 pb-2">IT</li>
                        <li className="hover:text-blue-600 cursor-pointer border-b border-gray-300 pb-2">Post</li>
                        <li className="hover:text-blue-600 cursor-pointer border-b border-gray-300 pb-2">Robotech</li>
                        <li className="hover:text-blue-600 cursor-pointer border-b border-gray-300 pb-2">Standard</li>
                        <li className="hover:text-blue-600 cursor-pointer border-b border-gray-300 pb-2">Technology</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogSection1;
