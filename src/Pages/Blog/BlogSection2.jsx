import LatestPostImage1 from "../../../src/assets/Service/blog/blogimage (1).jpg";
import LatestPostImage2 from "../../../src/assets/Service/blog/blogimage (2).jpg";
import LatestPostImage3 from "../../../src/assets/Service/blog/blogimage (3).jpg";

import Cardimage1 from "../../../src/assets/Service/blog/blogimage (3).jpg";
import Cardimage2 from "../../../src/assets/Service/blog/blogimage (2).jpg";

import LazyImage from "../../Components/LazyImage"; 
import { Link } from "react-router-dom";

const BlogSection2 = () => {
    return (
        <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* LEFT SIDE - BLOG CARDS */}
            <div className="lg:col-span-2 space-y-10">

                {/* CARD 1 – Photo Retouching */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300">
                    <div className="flex justify-center">
                        <LazyImage
                            src={Cardimage1}
                            alt="Photo Retouching"
                            width="100%"
                            height="320"
                            className="w-full md:w-[85%] h-64 md:h-80 object-cover rounded-lg mt-3 hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    <div className="p-4 md:p-5">
                        <p className="text-gray-500 text-sm mb-2">
                            By: <span className="font-medium">Graphics Amazon</span> | January 18, 2024
                        </p>

                        <h2 className="text-lg md:text-xl font-semibold mb-2 hover:text-blue-600 cursor-pointer">
                            How Professional Photo Retouching Boosts E-commerce Success
                        </h2>

                        <p className="text-gray-600 text-sm md:text-base mb-4">
                            High-quality, flawless product photos help customers trust your brand.
                            Retouching removes dust, fixes lighting, enhances clarity, and keeps
                            your product gallery consistent—leading to more sales and better brand identity…
                        </p>

                        <Link to={'/how-professional-photo-retouching-boosts-ecommerce-success'}>
                            <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded-md hover:bg-blue-700 transition">
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>

                {/* CARD 2 – Image Masking */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300">
                    <div className="flex justify-center">
                        <LazyImage
                            src={Cardimage2}
                            alt="Image Masking"
                            width="100%"
                            height="320"
                            className="w-full md:w-[85%] h-64 md:h-80 object-cover rounded-lg mt-3 hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    <div className="p-4 md:p-5">
                        <p className="text-gray-500 text-sm mb-2">
                            By: <span className="font-medium">Graphics Amazon</span> | January 22, 2024
                        </p>

                        <h2 className="text-lg md:text-xl font-semibold mb-2 hover:text-blue-600 cursor-pointer">
                            How Image Masking Transforms Your Photos into Perfection
                        </h2>

                        <p className="text-gray-600 text-sm md:text-base mb-4">
                            Image masking is crucial for complex images such as hair, fur, and transparent objects.
                            It preserves fine details, keeps soft edges natural, and creates clean,
                            professional visuals perfect for e-commerce and advertising…
                        </p>

                        <Link to={'/how-image-masking-transforms-your-photos'}>
                            <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded-md hover:bg-blue-700 transition">
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE - SIDEBAR */}
            <div className="space-y-8 lg:space-y-10 mt-10 lg:mt-0">

                {/* LATEST POSTS */}
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                    <h3 className="text-xl md:text-2xl font-semibold mb-6 border-l-4 border-blue-600 pl-3">
                        Latest Posts
                    </h3>

                    <div className="space-y-6">
                        {[LatestPostImage1, LatestPostImage2, LatestPostImage3].map((img, index) => (
                            <div key={index} className="flex items-center gap-4 cursor-pointer hover:text-blue-600 transition-all">
                                <LazyImage
                                    src={img}
                                    alt={`Latest ${index + 1}`}
                                    width="80"
                                    height="80"
                                    className="w-20 h-20 rounded-md object-cover"
                                />
                                <div>
                                    <p className="text-sm text-gray-500 mb-2">February 9, 2022</p>
                                    <p className="text-sm md:text-base font-medium leading-snug">
                                        Survival Strategies To Ensure Business...
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* TAGS */}
                <div className="bg-white p-4 md:p-6 shadow-lg rounded-xl">
                    <h3 className="text-xl md:text-2xl font-semibold mb-5 border-l-4 border-blue-600 pl-3">
                        Tags
                    </h3>

                    <div className="flex flex-wrap gap-3">
                        {["Business", "E-commerce", "Design", "Photography", "Technology"].map((tag, idx) => (
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
