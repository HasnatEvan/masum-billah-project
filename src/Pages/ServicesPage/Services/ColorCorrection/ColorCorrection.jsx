import ClientReview from "../../../HomePage/ClientReview";
import ColorCorrectionDescription from "./ColorCorrectionDescription";


const ColorCorrection = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
            <ColorCorrectionDescription></ColorCorrectionDescription>
            <ClientReview></ClientReview>
        </div>
    );
};

export default ColorCorrection;