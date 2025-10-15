import { Link } from "react-router-dom";
import image1 from "../../../src/assets/Blog/image (1).png";
import image2 from "../../../src/assets/Blog/image (4).png";


const BlogSection3 = () => {
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
                            Employee interest in the successful achievement.

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
                            Get ready for our recent plan for designer and developer

                        </h2>
                        <p className="text-gray-600 mb-4 text-sm md:text-base">
                            Producing ideas is The Main Way To Grow, Producing ideas Is The Main Way To Grow Lorem ipsum dolor sit amet...
                        </p>
                        <Link to={'/get-ready-for-our-upcoming-awesome-plan-for-designer-developer'}>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* ====== Sidebar Section ====== */}
            <div className="space-y-6">
                {/* Search */}





            </div>
        </div>
    );
};

export default BlogSection3;