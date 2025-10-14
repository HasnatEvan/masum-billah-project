import ClientReview from "../../../HomePage/ClientReview";
import ServiceHero from "../../ServiceHero";
import RasterVectorAfterBefore from "./RasterVectorAfterBefore";
import RasterVectorDescription from "./RasterVectorDescription";


const RasterVector = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
            <ServiceHero></ServiceHero>
            <RasterVectorAfterBefore></RasterVectorAfterBefore>
            <RasterVectorDescription></RasterVectorDescription>
            <ClientReview></ClientReview>
        </div>
    );
};

export default RasterVector;