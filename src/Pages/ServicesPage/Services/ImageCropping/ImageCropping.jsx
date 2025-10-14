import ClientReview from "../../../HomePage/ClientReview";
import ServiceHero from "../../ServiceHero";
import ImageCroppingAfterBefore from "./ImageCroppingAfterBefore";
import ImageCroppingDescription from "./ImageCroppingDescription";


const ImageCropping = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
            <ServiceHero></ServiceHero>
            <ImageCroppingAfterBefore></ImageCroppingAfterBefore>
            <ImageCroppingDescription></ImageCroppingDescription>
            <ClientReview></ClientReview>
        </div>
    );
};

export default ImageCropping;