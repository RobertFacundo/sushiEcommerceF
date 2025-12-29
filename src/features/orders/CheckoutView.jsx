import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import CheckoutImage from "./components/CheckoutImage";
import { useCheckoutMotion } from "./hooks/useCheckOutMotion";

const CheckoutView = () => {
    const location = useLocation();
    const motionConfig = useCheckoutMotion();

    return (
        <section className="min-h-[calc(100vh-4rem)] grid grid-cols-1 md:grid-cols-3 dark:bg-neutral-900">
            <div className="md:col-span-2 flex justify-center px-6 py-10">
                <div className="w-full max-w-3xl space-y-8">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={location.pathname}
                            {...motionConfig.page}
                        >
                            <Outlet />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
            <div className="hidden md:block">
                <CheckoutImage />
            </div>
        </section>
    )
};

export default CheckoutView;