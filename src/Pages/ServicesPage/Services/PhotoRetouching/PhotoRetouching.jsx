import ClientReview from "../../../HomePage/ClientReview";
import PhotoRetouchingDescription from "./PhotoRetouchingDescription";

const PhotoRetouching = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
            <PhotoRetouchingDescription></PhotoRetouchingDescription>
            <ClientReview></ClientReview>
        </div>
    );
};

export default PhotoRetouching;