import ClientReview from "../../../HomePage/ClientReview";
import GhostMannequinDescription from "./GhostMannequinDescription";


const GhostMannequin = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
            <GhostMannequinDescription></GhostMannequinDescription>
            <ClientReview></ClientReview>
        </div>
    );
};

export default GhostMannequin;