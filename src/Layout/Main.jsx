import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { Contact2Icon } from "lucide-react";
import ContactIcon from "../Components/ContactIcon";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ContactIcon></ContactIcon>
            <Footer></Footer>
        </div>
    );
};

export default Main;