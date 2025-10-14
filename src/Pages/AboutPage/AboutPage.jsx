import AboutSection from "../HomePage/AboutScetion";
import ClientReview from "../HomePage/ClientReview";
import AboutHero from "./AboutHero";
import CardSection from "./CardSection";
import FunFactSection from "./FunFactSection";

const AboutPage = () => {
    return (
        <div className="max-w-[1600px] mx-auto" >
            <AboutHero></AboutHero>
            <AboutSection></AboutSection>
            <FunFactSection></FunFactSection>
            <CardSection></CardSection>
            <ClientReview></ClientReview>
        </div>
    );
};

export default AboutPage;