const CartButton = ({ setIsCartOpen }) => {
    return (
        <button
            className="lg:hidden ml-auto p-2 rounded-full bg-red-500 text-white shadow-md"
            onClick={() => setIsCartOpen(true)}
        >
            🛒
        </button>
    )
};

export default CartButton;