import ClientReview from "../../../HomePage/ClientReview";
import ServiceHero from "../../ServiceHero";
import ImageCroppingAfterBefore from "./ImageCroppingAfterBefore";
import ImageCroppingDescription from "./ImageCroppingDescription";


const ImageCropping = () => {
    return (
        <div >
            <ServiceHero></ServiceHero>
            <ImageCroppingAfterBefore></ImageCroppingAfterBefore>
            <ImageCroppingDescription></ImageCroppingDescription>
            <ClientReview></ClientReview>
        </div>
    );
};

export default ImageCropping;