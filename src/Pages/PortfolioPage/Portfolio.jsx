import ClientReview from "../HomePage/ClientReview";
import PortfolioAfterBefore from "./PortfolioAfterBefore";
import PortfolioHero from "./PortfolioHero";


const Portfolio = () => {
    return (
        <div>
            <PortfolioHero></PortfolioHero>
            <PortfolioAfterBefore></PortfolioAfterBefore>
            <ClientReview></ClientReview>
            
        </div>
    );
};

export default Portfolio;