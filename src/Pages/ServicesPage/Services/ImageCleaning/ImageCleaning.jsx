import ClientReview from "../../../HomePage/ClientReview";
import ServiceHero from "../../ServiceHero";
import ImageCleaningAfterBefore from "./ImageCleaningAfterBefore";
import ImageCleaningDescription from "./ImageCleaningDescription";


const ImageCleaning = () => {
    return (
        <div >
            <ServiceHero></ServiceHero>
            <ImageCleaningAfterBefore></ImageCleaningAfterBefore>
            <ImageCleaningDescription></ImageCleaningDescription>
            <ClientReview></ClientReview>
            
        </div>
    );
};

export default ImageCleaning;