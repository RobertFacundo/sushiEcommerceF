import { useState } from "react";
import List from './components/List.jsx'
import Cart from "../cart/components/Cart.jsx";
import Breadcrumb from './components/Breadcrumb.jsx';
import { motion, AnimatePresence } from "framer-motion";
import { useCartAnimation } from "../cart/hooks/useCartAnimation.js";

const OurMenu = ({isCartOpen}) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const isShowingCategories = selectedCategory === null;

    const { variants } = useCartAnimation();

    return (
        <div className="flex w-full min-h-screen dark:bg-neutral-900 z-0">
            <div className="w-full lg:w-2/3 p-6 min-h-screen">
                <Breadcrumb
                    selectedCategory={selectedCategory}
                    onResetCategory={() => setSelectedCategory(null)}
                />
                <List
                    mode={isShowingCategories ? 'categories' : 'products'}
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                />
            </div>
            <AnimatePresence>
                <motion.div key='cart'
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                    variants={variants} 
                    className="hidden lg:block w-1/3  dark:bg-black bg-white p-6 shadow-inner fixed right-0 top-15 h-screen">
                    <Cart />
                </motion.div>
            </AnimatePresence>
            <AnimatePresence>
                {isCartOpen && (
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 25 }}
                        className="fixed inset-0 z-50 lg:hidden"
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="
                            absolute
                            bottom-0
                            w-full
                            h-[90vh]
                            dark:bg-black
                            bg-white
                            p-6
                            rounded-t-2xl
                            "
                        >
                            <Cart />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default OurMenu;