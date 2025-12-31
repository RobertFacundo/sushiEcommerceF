import FooterLinks from "./FooterLinks";
import FooterProfile from "./FooterProfile";
import FooterSocial from "./FooterSocial";


const FooterContent = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FooterProfile />
            <FooterLinks />
            <FooterSocial />
        </div>
    );
};

export default FooterContent;