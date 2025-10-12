import ClientReview from "../HomePage/ClientReview";
import CardSection from "./CardSection";
import FunFactSection from "./FunFactSection";

const AboutPage = () => {
    return (
        <div className="max-w-[1600px] mx-auto" >
            <FunFactSection></FunFactSection>
            <CardSection></CardSection>
            <ClientReview></ClientReview>
        </div>
    );
};

export default AboutPage;