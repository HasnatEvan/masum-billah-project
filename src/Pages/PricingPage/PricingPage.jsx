import { Helmet } from "react-helmet";
import ClientReview from "../HomePage/ClientReview";
import DiscountSection from "./DiscountSection";
import PricingHero from "./PricingHero";
import PricingTable from "./PricingTable";

const PricingPage = () => {
    return (
        <div>
            {/* ✅ SEO Helmet Section */}
            <Helmet>
                <title>Pricing | Graphics Amazon</title>
                <meta 
                    name="description" 
                    content="Discover affordable design pricing at Graphics Amazon. Choose from flexible packages for graphics design, branding, and creative projects that fit your budget." 
                />
                <meta 
                    name="keywords" 
                    content="graphics design pricing, logo design cost, Graphics Amazon packages, design plans, creative services" 
                />
            </Helmet>

            {/* ✅ Page Sections */}
            <PricingHero />
            <PricingTable />
            <DiscountSection />
            <ClientReview />
        </div>
    );
};

export default PricingPage;
