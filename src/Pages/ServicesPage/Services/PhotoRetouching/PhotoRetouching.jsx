import ClientReview from "../../../HomePage/ClientReview";
import ServiceHero from "../../ServiceHero";
import PhotoRetouchingAfterBefore from "./PhotoRetouchingAfterBefore";
import PhotoRetouchingDescription from "./PhotoRetouchingDescription";

const PhotoRetouching = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
            <ServiceHero></ServiceHero>
            <PhotoRetouchingAfterBefore></PhotoRetouchingAfterBefore>
            <PhotoRetouchingDescription></PhotoRetouchingDescription>
            <ClientReview></ClientReview>
        </div>
    );
};

export default PhotoRetouching;