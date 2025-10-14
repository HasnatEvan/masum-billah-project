import ClientReview from "../HomePage/ClientReview";
import DiscountSection from "./DiscountSection";
import PricingHero from "./PricingHero";
import PricingTable from "./PricingTable";

const PricingPage = () => {
    return (
        <div>
            <PricingHero></PricingHero>
            <PricingTable></PricingTable>
            <DiscountSection></DiscountSection>
            <ClientReview></ClientReview>
        </div>
    );
};

export default PricingPage;