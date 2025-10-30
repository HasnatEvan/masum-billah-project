import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const FormSection = () => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        let imageUrl = "";

        if (file) {
            const formData = new FormData();
            formData.append("image", file);

            try {
                const res = await axios.post(
                    "https://api.imgbb.com/1/upload?key=101ede0781ca7c074dde77b4bb72768e",
                    formData
                );
                imageUrl = res.data.data.url;
            } catch (error) {
                console.error("ImgBB upload error:", error);
                toast.error("❌ Image upload failed!");
                setLoading(false);
                return;
            }
        }

        // EmailJS template parameters
        const templateParams = {
            name: e.target.name.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
            website: e.target.website.value,
            service: e.target.service.value,
            file_link: e.target.fileLink.value,
            message: e.target.message.value,
            image_url: imageUrl || "",
            time: new Date().toLocaleString(),
        };

        try {
            await emailjs.send(
                "service_af2enb6",
                "template_fg572dd",
                templateParams,
                "YRedqVNiURYrAPWpb"
            );
            toast.success("Message sent successfully!");
            e.target.reset();
            setFile(null);
        } catch (error) {
            console.error("EmailJS error:", error);
            toast.error("❌ Failed to send email!");
        }

        setLoading(false);
    };

    return (
        <section className="bg-white py-16 px-4 max-w-6xl mx-auto">
            <Toaster position="top-center" reverseOrder={false} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                {/* Left Section */}
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
                        Simply upload your images, share your requirements,
                        and see the difference firsthand with our precision, quality, and fast turnaround.
                    </p>
                </motion.div>

                {/* Right Form Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="border-2 border-purple-500 rounded-xl p-6 shadow-sm"
                >
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name & Phone */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="+8801XXXXXXXXX"
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
                                name="email"
                                placeholder="you@example.com"
                                required
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
                                name="website"
                                placeholder="https://yourwebsite.com"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                            />
                        </div>

                        {/* Service Select */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Select required Service
                            </label>
                            <select
                                name="service"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                            >
                                <option value="">Select a service</option>
                                <option>Clipping Path</option>
                                <option>Multi Clipping Path</option>
                                <option>Ghost Mannequin</option>
                                <option>Background Remove</option>
                                <option>Image Retouching</option>
                                <option>Image Masking</option>
                                <option>Color Correction</option>
                                <option>Image Reflection</option>
                                <option>Image Shadowing</option>
                                <option>Image Cleaning</option>
                                <option>Image Cropping</option>
                                <option>Photo Restoration</option>
                                <option>Raster to Vector</option>
                            </select>
                        </div>

                        {/* File Link */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Your Shared File Link
                            </label>
                            <input
                                type="url"
                                name="fileLink"
                                placeholder="https://yourfiles.com"
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
                                name="image"
                                onChange={handleFileChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Message
                            </label>
                            <textarea
                                name="message"
                                rows="4"
                                placeholder="Write your message..."
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-md transition transform hover:scale-105"
                        >
                            {loading ? "Sending..." : "GET A FREE TRIAL!"}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default FormSection;
