import { Helmet } from "react-helmet";
import AboutSection from "../HomePage/AboutScetion";
import ClientReview from "../HomePage/ClientReview";
import AboutHero from "./AboutHero";
import CardSection from "./CardSection";
import FunFactSection from "./FunFactSection";

const AboutPage = () => {
    return (
        <div>
            {/* ✅ SEO Helmet Section */}
            <Helmet>
                <title>About Us | Graphics Amazon</title>
                <meta 
                    name="description" 
                    content="Learn more about Graphics Amazon — a creative design agency providing professional graphic design, branding, and visual identity services for businesses worldwide." 
                />
                <meta 
                    name="keywords" 
                    content="about Graphics Amazon, design agency, creative studio, logo design team, branding experts, professional designers" 
                />
            </Helmet>

            {/* ✅ Page Sections */}
            <AboutHero />
            <AboutSection />
            <FunFactSection />
            <CardSection />
            <ClientReview />
        </div>
    );
};

export default AboutPage;
