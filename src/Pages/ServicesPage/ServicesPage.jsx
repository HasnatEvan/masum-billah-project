import ClientReview from "../HomePage/ClientReview";
import Card from "./Card";
import LatestNews from "./LatestNews";
import ServiceHero from "./ServiceHero";


const ServicesPage = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
            <ServiceHero></ServiceHero>
            <Card></Card>
            <LatestNews></LatestNews>
            <ClientReview></ClientReview>
        </div>
    );
};

export default ServicesPage;