const InfoProduct = ({ description, price }) => {
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
                // onClick={onAddToCart}
                className="bg-red-500 text-white 
                           px-4 py-1 rounded-lg hover:bg-red-600 
                           transition-colors text-sm cursor-pointer"
            >
                Add to Cart
            </button>
        </>
    );
};

export default InfoProduct;