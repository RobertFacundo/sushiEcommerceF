import { useCart } from "../../../features/cart/hooks/useCart";
import { MdShoppingCart } from "react-icons/md";

const CartButton = ({ setIsCartOpen }) => {
    const { data: cart, isLoading } = useCart();
    let itemCount = cart?.items?.reduce((sum, item) => sum + item.quantity, 0) || 0;
    return (
            <button
                className="relative lg:hidden ml-auto p-2 mr-5 rounded-full bg-red-500 text-white shadow-md cursor-pointer"
                onClick={() => setIsCartOpen(prev => !prev)}
            >
                <MdShoppingCart size={24}/>
                {itemCount > 0 && (
                    <div className="absolute -top-1 -right-1 bg-white text-red-500 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
                        {itemCount}
                    </div>
                )}
            </button>
    )
};

export default CartButton;