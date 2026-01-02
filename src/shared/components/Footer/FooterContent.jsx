import FooterLinks from "./FooterLinks";
import FooterProfile from "./FooterProfile";
import FooterSocial from "./FooterSocial";
import { motion } from 'framer-motion';
import { footerColumn } from "./footerAnimation";

const FooterContent = () => {
    return (
        <div className=" 
                grid
                grid-cols-1
                md:grid-cols-[2fr_1fr_1fr]
                gap-12
                w-full"
        >
            <motion.div variants={footerColumn}>
                <FooterProfile />
            </motion.div>
            <motion.div variants={footerColumn}>
                <FooterLinks />
            </motion.div>
            <motion.div variants={footerColumn}>
                <FooterSocial />
            </motion.div>
        </div>
    );
};

export default FooterContent;