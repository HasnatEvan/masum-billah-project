import ClientReview from "../HomePage/ClientReview";
import FreeTrialHero from "./FreeTrialHero";
import FromSection from "./FromSection";


const FreeTrialPage = () => {
    return (
        <div  className="max-w-[1600px] mx-auto">
            <FreeTrialHero></FreeTrialHero>
            <FromSection></FromSection>
            <ClientReview></ClientReview>
        </div>
    );
};

export default FreeTrialPage;