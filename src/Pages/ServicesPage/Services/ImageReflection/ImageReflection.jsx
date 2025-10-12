import ClientReview from "../../../HomePage/ClientReview";
import ImageReflectionDescription from "./ImageReflectionDescription";


const ImageReflection = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
            <ImageReflectionDescription></ImageReflectionDescription>
            <ClientReview></ClientReview>
        </div>
    );
};

export default ImageReflection;