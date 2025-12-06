import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import ContactIcon from "../Components/ContactIcon";
import ScrollToTop from "../ScrollToTop/ScrollToTop.jsx";

const Main = () => {
    return (
        <div>
            <ScrollToTop />
            <Navbar />

            <Outlet />

            <ContactIcon />

            <Footer />
        </div>
    );
};

export default Main;
