import { Link } from "react-router-dom";
import LazyImage from "../../Components/LazyImage";

import image1 from "../../../src/assets/Service/blog/blogimage (1).jpg";
import image2 from "../../../src/assets/Service/blog/blogimage (3).jpg";

const BlogSection3 = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* ====== Blog Content Section ====== */}
            <div className="lg:col-span-2 space-y-8">

                {/* Blog Card 1 – Clipping Path Services */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="flex justify-center">
                        <LazyImage
                            src={image1}
                            alt="Clipping Path Services"
                            width="100%"
                            height="100%"
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
                            Clipping Path Services help remove backgrounds, enhance product presentation,
                            maintain branding consistency, and boost conversions. Clean visuals build trust
                            and increase sales in competitive eCommerce marketplaces…
                        </p>

                        <Link to={'/why-clipping-path-services-are-essential'}>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Blog Card 2 – Photo Retouching Services */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="flex justify-center">
                        <LazyImage
                            src={image2}
                            alt="Photo Retouching Services"
                            width="100%"
                            height="100%"
                            className="w-full md:w-[85%] h-64 md:h-80 object-cover rounded-lg mt-3"
                        />
                    </div>

                    <div className="p-4 md:p-5">
                        <p className="text-sm text-gray-500 mb-2">
                            By: <span className="font-medium">Graphics Amazon</span> | January 18, 2024
                        </p>

                        <h2 className="text-lg md:text-xl font-semibold mb-2 hover:text-blue-600 cursor-pointer">
                            How Professional Photo Retouching Boosts E-commerce Success
                        </h2>

                        <p className="text-gray-600 mb-4 text-sm md:text-base">
                            Professional photo retouching removes flaws, enhances lighting,
                            improves clarity, and builds customer trust—helping your brand
                            stand out and increasing eCommerce conversion rates…
                        </p>

                        <Link to={'/how-professional-photo-retouching-boosts-ecommerce-success'}>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>

            </div>

            {/* ====== Sidebar Section ====== */}
            <div className="space-y-6">
                {/* প্রয়োজন হলে এখানে sidebar later add করতে পারো */}
            </div>

        </div>
    );
};

export default BlogSection3;
