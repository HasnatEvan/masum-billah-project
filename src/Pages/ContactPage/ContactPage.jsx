import ClientReview from "../HomePage/ClientReview";
import ContactFrom from "./ContactFrom";
import ContactHero from "./ContactHero";
import GoogleMap from "./GoogleMap";


const ContactPage = () => {
    return (
        <div>
            <ContactHero></ContactHero>
            <ContactFrom></ContactFrom>
            <GoogleMap></GoogleMap>
            <ClientReview></ClientReview>
        </div>
    );
};

export default ContactPage;