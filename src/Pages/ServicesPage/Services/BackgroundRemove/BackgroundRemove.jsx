import ClientReview from "../../../HomePage/ClientReview";
import BackgroundRemoveAfterBefore from "./BackgroundRemoveAfterBefore";
import BackgroundRemoveDescipyion from "./BackgroundRemoveDescipyion";
import ServiceHero from './../../ServiceHero';


const BackgroundRemove = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
            <ServiceHero></ServiceHero>
            <BackgroundRemoveAfterBefore></BackgroundRemoveAfterBefore>
            <BackgroundRemoveDescipyion></BackgroundRemoveDescipyion>
            <ClientReview></ClientReview>
        </div>
    );
};

export default BackgroundRemove;