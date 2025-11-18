import { Helmet } from "react-helmet";
import ClientReview from "../HomePage/ClientReview";
import PortfolioAfterBefore from "./PortfolioAfterBefore";
import PortfolioHero from "./PortfolioHero";

const Portfolio = () => {
    return (
        <div>
            {/* ✅ SEO Helmet Section */}
            <Helmet>
                <title>Portfolio | Graphics Amazon</title>
                <meta 
                    name="description" 
                    content="Explore our portfolio to see real client projects, before and after results, and customer reviews showcasing our quality work." 
                />
                <meta 
                    name="keywords" 
                    content="portfolio, client projects, before after, reviews, work showcase" 
                />
            </Helmet>

            {/* ✅ Page Sections */}
            <PortfolioHero />
            <PortfolioAfterBefore />
            <ClientReview />
        </div>
    );
};

export default Portfolio;
