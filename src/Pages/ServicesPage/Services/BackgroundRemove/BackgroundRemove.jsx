import ClientReview from "../../../HomePage/ClientReview";
import BackgroundRemoveAfterBefore from "./BackgroundRemoveAfterBefore";
import BackgroundRemoveDescipyion from "./BackgroundRemoveDescipyion";
import ServiceHero from './../../ServiceHero';


const BackgroundRemove = () => {
    return (
        <div >
            <ServiceHero></ServiceHero>
            <BackgroundRemoveAfterBefore></BackgroundRemoveAfterBefore>
            <BackgroundRemoveDescipyion></BackgroundRemoveDescipyion>
            <ClientReview></ClientReview>
        </div>
    );
};

export default BackgroundRemove;