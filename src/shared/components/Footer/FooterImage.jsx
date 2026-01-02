import { motion } from "framer-motion";
import { footerImage } from "./footerAnimation";

const FooterImage = () => {
    return (
        <motion.div
            variants={footerImage}
            initial="hidden"
            animate="visible"
            className="
        hidden lg:block
        absolute top-0 right-0
        h-full
        w-[35vw]
        max-w-[520px]
        bg-no-repeat
        bg-right
        bg-contain
        opacity-90
        pointer-events-none
        mt-1
        z-1000
      "
            style={{ backgroundImage: "url('/footerImage.jpg')" }}
        />
    )
};

export default FooterImage;