import ClientReview from "../../../HomePage/ClientReview";
import ClippingAfterBefore from "./ClippingAfterBefore";
import Desciption from "./Desciption";


const Clipping = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
            <ClippingAfterBefore></ClippingAfterBefore>
            <Desciption></Desciption>
            <ClientReview></ClientReview>
        </div>
    );
};

export default Clipping;