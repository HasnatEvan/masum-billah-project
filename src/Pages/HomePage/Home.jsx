import { Helmet } from "react-helmet";
import LatestNews from "../ServicesPage/LatestNews";
import AboutScetion from "./AboutScetion";
import BeforAfterSection from "./BeforAfterSection";
import ClientReview from "./ClientReview";
import HeroSection from "./HeroSection";
import NumberSection from "./NumberSection";
import OurServicesSection from "./OurServicesSection";
import PricingSection from "./PricingSection";
import WorkSection from "./WorkSection";
import YoutubeSectiion from "./YoutubeSectiion";

const Home = () => {
    return (
        <div>
            {/* ✅ SEO Helmet Section */}
            <Helmet>
                <title>Home | Graphics Amazon</title>
                <meta name="description" content="Welcome to our homepage — explore our services, client reviews, and the latest news!" />
                <meta name="keywords" content="services, reviews, pricing, latest news, before after" />
            </Helmet>

            {/* ✅ Page Sections */}
            <HeroSection />
            <AboutScetion />
            <OurServicesSection />
            <WorkSection />
            <BeforAfterSection />
            <NumberSection />
            <YoutubeSectiion />
            <PricingSection />
            <ClientReview />
            <LatestNews />
        </div>
    );
};

export default Home;
