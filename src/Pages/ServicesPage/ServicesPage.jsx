import { Helmet } from "react-helmet";
import ClientReview from "../HomePage/ClientReview";
import Card from "./Card";
import LatestNews from "./LatestNews";
import ServiceHero from "./ServiceHero";

const ServicesPage = () => {
    return (
        <div>
            {/* ✅ SEO Helmet Section */}
            <Helmet>
                <title>Services | Graphics Amazon</title>
                <meta 
                    name="description" 
                    content="Explore professional graphic design services at Graphics Amazon. We offer logo design, branding, social media graphics, and more — crafted to boost your brand identity." 
                />
                <meta 
                    name="keywords" 
                    content="graphics design services, logo design, branding, social media design, Graphics Amazon, creative agency" 
                />
            </Helmet>

            {/* ✅ Page Sections */}
            <ServiceHero />
            <Card />
            <LatestNews />
            <ClientReview />
        </div>
    );
};

export default ServicesPage;
