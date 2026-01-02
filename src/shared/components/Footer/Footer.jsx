import { useLocation } from "react-router-dom";
import FooterContent from "./FooterContent";
import FooterImage from "./FooterImage";
import { motion } from "framer-motion";
import { footerContainer } from "./footerAnimation";

const Footer = () => {
    const location = useLocation();

    const hiddenImageOnMenu = location.pathname === '/ourmenu';

    return (
        <motion.footer
            variants={footerContainer}
            initial="hidden"
            whileInView='visible'
            viewport={{ margin: "-100px" }}
            className="
            relative
            w-full
            dark:bg-neutral-950
            dark:text-neutral-200
            flex items-center justify-center
            z-10

        "
            style={{ height: "calc(100vh - var(--header-h))" }}
        >
            <div
                className="
                relative z-10
                h-full
                max-w-7xl mx-auto
                grid grid-cols-1 lg:grid-cols-3
                gap-12
                
                "
            >
                <div className="lg:col-span-2 flex items-center h-full">
                    <FooterContent />
                </div>
            </div>
            {!hiddenImageOnMenu && <FooterImage />}
        </motion.footer>
    )
};

export default Footer;