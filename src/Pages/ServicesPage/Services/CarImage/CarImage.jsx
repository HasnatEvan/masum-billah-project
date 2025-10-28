import ClientReview from "../../../HomePage/ClientReview";
import ServiceHero from "../../ServiceHero";
import CarImageAfterBefore from "./CarImageAfterBefore";
import CarImageEditingDiscription from "./CarImageEditingDiscription";

const CarImage = () => {
    return (
        <div>
             <ServiceHero></ServiceHero>
             <CarImageAfterBefore></CarImageAfterBefore>
             <CarImageEditingDiscription></CarImageEditingDiscription>
               <ClientReview></ClientReview>
        </div>
    );
};

export default CarImage;