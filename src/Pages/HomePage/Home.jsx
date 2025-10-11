import ClientReview from "./ClientReview";
import PricingSection from "./PricingSection";
import WorkSection from "./WorkSection";
import YoutubeSectiion from "./YoutubeSectiion";

const Home = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
            <WorkSection />
            <YoutubeSectiion></YoutubeSectiion>
            <PricingSection />
            <ClientReview></ClientReview>
        </div>
    );
};

export default Home;
