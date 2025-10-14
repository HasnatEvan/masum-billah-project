import ClientReview from "../../../HomePage/ClientReview";
import ServiceHero from "../../ServiceHero";
import GhostMannequinAfterBefore from "./GhostMannequinAfterBefore";
import GhostMannequinDescription from "./GhostMannequinDescription";


const GhostMannequin = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
            <ServiceHero></ServiceHero>
            <GhostMannequinAfterBefore></GhostMannequinAfterBefore>
            <GhostMannequinDescription></GhostMannequinDescription>
            <ClientReview></ClientReview>
        </div>
    );
};

export default GhostMannequin;