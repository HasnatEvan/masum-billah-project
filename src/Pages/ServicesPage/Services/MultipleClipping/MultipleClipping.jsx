import ClientReview from "../../../HomePage/ClientReview";
import MultipleClippingAfterBefore from "./MultipleClippingAfterBefore";
import MultipleClippingDesciption from "./MultipleClippingDesciption";
import ServiceHero from './../../ServiceHero';


const MultipleClipping = () => {
    return (
        <div>
            <ServiceHero></ServiceHero>
            <MultipleClippingAfterBefore></MultipleClippingAfterBefore>
            <MultipleClippingDesciption></MultipleClippingDesciption>
            <ClientReview></ClientReview>
        </div>
    );
};

export default MultipleClipping;