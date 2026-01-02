const CartButton = ({ setIsCartOpen }) => {
    return (
        <button
            className="lg:hidden ml-auto p-2 rounded-full bg-red-500 text-white shadow-md cursor-pointer"
            onClick={() => setIsCartOpen(prev => !prev)}
        >
            🛒
        </button>
    )
};

export default CartButton;