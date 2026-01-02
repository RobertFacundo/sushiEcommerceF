import { useCart } from "../../../features/cart/hooks/useCart";
import { MdShoppingCart } from "react-icons/md";
import { motion, AnimatePresence } from 'framer-motion';

const CartButton = ({ setIsCartOpen }) => {
    const { data: cart } = useCart();
    let itemCount = cart?.items?.reduce((sum, item) => sum + item.quantity, 0) || 0;
    return (
        <button
            className="relative lg:hidden ml-auto p-2 mr-5 rounded-full bg-red-500 text-white shadow-md cursor-pointer"
            onClick={() => setIsCartOpen(prev => !prev)}
        >
            <MdShoppingCart size={24} />
            {itemCount > 0 && (
                <motion.div
                    key={itemCount}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 25
                    }}
                    className="absolute -top-1 -right-1 bg-white text-red-500 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
                    {itemCount}
                </motion.div>
            )}
        </button>
    )
};

export default CartButton;