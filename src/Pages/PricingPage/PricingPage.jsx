import ClientReview from "../HomePage/ClientReview";
import PricingTable from "./PricingTable";

const PricingPage = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
            <PricingTable></PricingTable>
            <ClientReview></ClientReview>
        </div>
    );
};

export default PricingPage;