import CheckoutForm from "./CheckoutForm";
import CheckoutSummary from "./CheckoutSummary";
import { motion } from 'framer-motion';
import { useCheckoutMotion } from "../hooks/useCheckOutMotion";

const CheckoutMain = () => {
    const motionConfig = useCheckoutMotion();

    return (
        <motion.div {...motionConfig.stagger}>
            <motion.div variants={motionConfig.item}>
                <CheckoutSummary />
            </motion.div>

            <motion.div variants={motionConfig.item}>
                <CheckoutForm />
            </motion.div>
        </motion.div>
    )
};

export default CheckoutMain;