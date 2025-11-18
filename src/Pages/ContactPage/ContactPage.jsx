import { Helmet } from "react-helmet";
import ClientReview from "../HomePage/ClientReview";
import ContactFrom from "./ContactFrom";
import ContactHero from "./ContactHero";
import GoogleMap from "./GoogleMap";

const ContactPage = () => {
    return (
        <div>
            {/* ✅ SEO Helmet Section */}
            <Helmet>
                <title>Contact Us | Graphics Amazon</title>
                <meta 
                    name="description" 
                    content="Get in touch with Graphics Amazon today! Have questions about our design services, pricing, or custom projects? We're here to help you create your brand's perfect look." 
                />
                <meta 
                    name="keywords" 
                    content="contact Graphics Amazon, get in touch, design help, support, graphics design inquiry, logo design contact" 
                />
            </Helmet>

            {/* ✅ Page Sections */}
            <ContactHero />
            <ContactFrom />
            <GoogleMap />
            <ClientReview />
        </div>
    );
};

export default ContactPage;
