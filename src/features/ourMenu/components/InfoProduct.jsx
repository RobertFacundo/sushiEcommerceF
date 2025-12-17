const InfoProduct = ({ description, price, outOfStock, onAddToCart }) => {
    return (
        <>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2 mt-3 ">
                {description.en}
            </p>
            <div className="flex justify-between items-center mb-2">
                <strong className="text-lg dark:text-white">
                    ${price}
                </strong>
            </div>

            <button
                onClick={onAddToCart}
                className={`
                    px-4 py-1 rounded-lg text-sm transition-colors text-white
                    ${outOfStock
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-red-500 hover:bg-red-600 cursor-pointer"}
                `}
                disabled={outOfStock}
            >
               Add To Cart
            </button>
        </>
    );
};

export default InfoProduct;