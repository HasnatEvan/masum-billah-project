import ClientReview from "../HomePage/ClientReview";
import ContactFrom from "./ContactFrom";
import ContactHero from "./ContactHero";


const ContactPage = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
            <ContactHero></ContactHero>
            <ContactFrom></ContactFrom>
            <ClientReview></ClientReview>
        </div>
    );
};

export default ContactPage;