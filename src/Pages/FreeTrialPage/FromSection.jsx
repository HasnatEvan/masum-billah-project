import { motion } from "framer-motion";

const FormSection = () => {
    return (
        <section className="bg-white py-16 px-6 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-2">
                        Let’s Get a Free Trial.
                    </h2>
                    <h3 className="text-2xl font-bold text-sky-500 mb-4 border-b-4 border-sky-500 inline-block">
                        It's completely free of charge!
                    </h3>

                    <p className="text-gray-700 leading-relaxed">
                        Discover our professional image editing services with a FREE TRIAL.
                        Upload your images, share your requirements, and experience our
                        precision, quality, and fast turnaround firsthand.
                    </p>
                </motion.div>

                {/* Right Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="border-2 border-purple-500 rounded-xl p-6 shadow-sm"
                >
                    <form className="space-y-4">
                        {/* Name & Phone */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    placeholder="+123456789"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                            />
                        </div>

                        {/* Website */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Website
                            </label>
                            <input
                                type="url"
                                placeholder="https://"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                            />
                        </div>

                        {/* Service Select */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Select required Service
                            </label>
                            <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition">
                                <option>Clipping Path</option>
                                <option>Image Masking</option>
                                <option>Photo Retouching</option>
                                <option>Ghost Mannequin</option>
                                <option>Color Correction</option>
                            </select>
                        </div>

                        {/* Shared File Link */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Your Shared File link (If you have any link of your files to share)
                            </label>
                            <input
                                type="url"
                                placeholder="https://"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                            />
                        </div>

                        {/* File Upload */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Upload your image
                            </label>
                            <input
                                type="file"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Message
                            </label>
                            <textarea
                                rows="4"
                                placeholder="Message"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-md transition transform hover:scale-105"
                        >
                            GET A FREE TRIAL!
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default FormSection;
