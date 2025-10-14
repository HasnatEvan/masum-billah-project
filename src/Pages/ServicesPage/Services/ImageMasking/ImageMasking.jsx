import ClientReview from "../../../HomePage/ClientReview";
import ServiceHero from "../../ServiceHero";
import ImageMaskingAfterBefore from "./ImageMaskingAfterBefore";
import ImageMaskingDescription from "./ImageMaskingDescription";


const ImageMasking = () => {
    return (
        <div>
            <ServiceHero></ServiceHero>
            <ImageMaskingAfterBefore></ImageMaskingAfterBefore>
            <ImageMaskingDescription></ImageMaskingDescription>
            <ClientReview></ClientReview>
        </div>
    );
};

export default ImageMasking;