import ClientReview from "../../../HomePage/ClientReview";
import ServiceHero from "../../ServiceHero";
import ColorCorrectionAfterBefore from "./ColorCorrectionAfterBefore";
import ColorCorrectionDescription from "./ColorCorrectionDescription";


const ColorCorrection = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
            <ServiceHero></ServiceHero>
            <ColorCorrectionAfterBefore></ColorCorrectionAfterBefore>
            <ColorCorrectionDescription></ColorCorrectionDescription>
            <ClientReview></ClientReview>
        </div>
    );
};

export default ColorCorrection;