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
        <div className="max-w-[1600px] mx-auto">
            <HeroSection></HeroSection>
            <AboutScetion></AboutScetion>
            <OurServicesSection></OurServicesSection>
            <WorkSection />
            <BeforAfterSection></BeforAfterSection>
            <NumberSection></NumberSection>
            <YoutubeSectiion></YoutubeSectiion>
            <PricingSection />
            <ClientReview></ClientReview>
            <LatestNews></LatestNews>
        </div>
    );
};

export default Home;
