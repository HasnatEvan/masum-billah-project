import ClientReview from "../../../HomePage/ClientReview";
import ServiceHero from "../../ServiceHero";
import ImageReflectionAfterBefore from "./ImageReflectionAfterBefore";
import ImageReflectionDescription from "./ImageReflectionDescription";


const ImageReflection = () => {
    return (
        <div >
            <ServiceHero></ServiceHero>
            <ImageReflectionAfterBefore></ImageReflectionAfterBefore>
            <ImageReflectionDescription></ImageReflectionDescription>
            <ClientReview></ClientReview>
        </div>
    );
};

export default ImageReflection;