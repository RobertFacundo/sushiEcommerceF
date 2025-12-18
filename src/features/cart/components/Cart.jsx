import { useCart } from "../hooks/useCart";
import { useUpdateCartItem } from '../hooks/useUpdateCartItem';
import { useRemoveCartItem } from '../hooks/useRemoveCartItem';
import { useClearCart } from '../hooks/useClearCart';
import CartItem from "./CartItem";
import { calculateSubtotal } from "../utils/cartTotals";
import { FaBroom } from 'react-icons/fa';
import {AnimatePresence } from 'framer-motion';


const Cart = () => {
    const { data: cart, isLoading } = useCart();
    const { mutate: updateItem } = useUpdateCartItem();
    const { mutate: removeItem } = useRemoveCartItem();
    const { mutate: clearCart } = useClearCart();

    if (isLoading) {
        return <p>Loading cart...</p>;
    }

    return (
            <div
                className="flex flex-col h-full">
                <header className="pb-4 border-b border-neutral-700 flex items-center justify-between">
                    <h1 className="text-xl font-semibold dark:text-white">
                        Your Cart
                    </h1>

                    {cart?.items?.length > 0 && (
                        <button
                            className="p-1 rounded-md dark:text-white hover:bg-red-500/10 hover:text-red-500 transition cursor-pointer"
                            onClick={() => clearCart()}
                            title="Clear cart"
                        >
                            <FaBroom size={18} />
                        </button>
                    )}
                </header>
                <div className="flex-1 overflow-y-auto py-4 space-y-4 max-h-[calc(100vh-16rem)]">
                    {!cart?.items?.length ? (
                        <div className="flex flex-col items-center justify-center h-full text-center">
                            <p className="text-gray-400 pb-2">
                                Your cart is empty
                            </p>
                            <span className="text-sm text-gray-500">
                                Add some delicious items 🍣
                            </span>
                        </div>
                    ) : (
                        <ul className="space-y-8">
                            <AnimatePresence>
                                {cart.items.map(item => (
                                    <CartItem
                                        key={item.productId._id}
                                        item={item}
                                        onUpdate={(productId, quantity) =>
                                            updateItem({ productId, quantity })
                                        }
                                        onRemove={(productId) =>
                                            removeItem({ productId })
                                        }
                                    />
                                ))}
                            </AnimatePresence>
                        </ul>
                    )}
                </div>
                {cart?.items?.length > 0 && (
                    <footer className="space-y-3 mt-5">
                        <div className="flex justify-around dark:text-white font-semibold text-lg">
                            <span>
                                Subtotal:
                            </span>
                            <span> ${calculateSubtotal(cart.items).toFixed(2)}</span>
                        </div>

                        <div className="flex justify-center">
                            <button
                                className="w-2/4 py-3 text-white bg-red-500 hover:bg-red-600 rounded-lg font-semibold transition-all shadow-md cursor-pointer"
                            >
                                Check Out
                            </button>
                        </div>
                    </footer>)}
            </div>
    );
};

export default Cart;