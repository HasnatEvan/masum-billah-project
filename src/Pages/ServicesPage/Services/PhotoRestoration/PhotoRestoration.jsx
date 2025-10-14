import ClientReview from "../../../HomePage/ClientReview";
import ServiceHero from "../../ServiceHero";
import PhotoRestorationAfterBefore from "./PhotoRestorationAfterBefore";
import PhotoRestorationDescription from "./PhotoRestorationDescription";

const PhotoRestoration = () => {
    return (
        <div >
            <ServiceHero></ServiceHero>
            <PhotoRestorationAfterBefore></PhotoRestorationAfterBefore>
            <PhotoRestorationDescription></PhotoRestorationDescription>
            <ClientReview></ClientReview>
        </div>
    );
};

export default PhotoRestoration;