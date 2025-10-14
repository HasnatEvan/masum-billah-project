import ClientReview from "../../../HomePage/ClientReview";
import MultipleClippingAfterBefore from "./MultipleClippingAfterBefore";
import MultipleClippingDesciption from "./MultipleClippingDesciption";


const MultipleClipping = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
            <MultipleClippingAfterBefore></MultipleClippingAfterBefore>
            <MultipleClippingDesciption></MultipleClippingDesciption>
            <ClientReview></ClientReview>
        </div>
    );
};

export default MultipleClipping;