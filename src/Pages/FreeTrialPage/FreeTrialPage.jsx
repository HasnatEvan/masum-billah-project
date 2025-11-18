import { Helmet } from "react-helmet";
import ClientReview from "../HomePage/ClientReview";
import FreeTrialHero from "./FreeTrialHero";
import FromSection from "./FromSection";

const FreeTrialPage = () => {
    return (
        <div>
            {/* ✅ SEO Helmet Section */}
            <Helmet>
                <title>Free Trial | Graphics Amazon</title>
                <meta 
                    name="description" 
                    content="Get a free trial at Graphics Amazon and experience our premium graphic design services before you buy. Perfect for logos, branding, and digital creatives!" 
                />
                <meta 
                    name="keywords" 
                    content="free trial, graphics design trial, logo design test, Graphics Amazon, design preview, creative design services" 
                />
            </Helmet>

            {/* ✅ Page Sections */}
            <FreeTrialHero />
            <FromSection />
            <ClientReview />
        </div>
    );
};

export default FreeTrialPage;
