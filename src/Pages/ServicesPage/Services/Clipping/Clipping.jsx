import ClientReview from "../../../HomePage/ClientReview";
import ClippingAfterBefore from "./ClippingAfterBefore";
import Desciption from "./Desciption";
import ServiceHero from './../../ServiceHero';


const Clipping = () => {
    return (
        <div>
            <ServiceHero></ServiceHero>
            <ClippingAfterBefore></ClippingAfterBefore>
            <Desciption></Desciption>
            <ClientReview></ClientReview>
        </div>
    );
};

export default Clipping;