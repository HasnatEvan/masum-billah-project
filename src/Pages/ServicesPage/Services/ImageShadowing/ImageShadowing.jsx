import ClientReview from "../../../HomePage/ClientReview";
import ServiceHero from "../../ServiceHero";
import ImageShadowingAfterBefore from "./ImageShadowingAfterBefore";
import ImageShadowingDescription from "./ImageShadowingDescription";


const ImageShadowing = () => {
    return (
        <div className="max-w[1600px] mx-auto" >
            <ServiceHero></ServiceHero>
            <ImageShadowingAfterBefore></ImageShadowingAfterBefore>
            <ImageShadowingDescription></ImageShadowingDescription>
            <ClientReview></ClientReview>
        </div>
    );
};

export default ImageShadowing;