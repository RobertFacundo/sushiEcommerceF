import { getImageUrl } from "../../../shared/utils/getUrlImage";

const CartItem = ({ item, onUpdate, onRemove }) => {
    const { productId, quantity } = item;
    const total = productId.price * quantity

    return (
        <li className="flex items-center gap-4 border-b border-gray-200 dar:border-stone-700">
            <img
                className="w-21 h-21 object-cover rounded-lg flex-shrink-0"
                src={getImageUrl(productId.imageUrl)} alt={productId.price} />

            <div className="flex-1">
                <h3 className="font-medium text-gray-800 dark:text-white">
                    {productId.name.es}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    ${productId.price}
                </p>
            </div>

            <input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) =>
                    onUpdate(productId._id, Number(e.target.value))
                }
                className="w-14 text-center border border-gray-300 dark:border-stone-600 rounded-md bg-white dark:bg-black text-gray-800 dark:text-white"
            />
            <span className="w-16 text-right font-semibold text-gray-800 dark:text-white">
                ${total.toFixed(2)}
            </span>

            <button
                onClick={() => onRemove(productId._id)}
                className="text-gray-400 hover:text-red-500 transition-colors text-lg"
                aria-label="Remove item"
            >
                ✕
            </button>
        </li>
    );
};

export default CartItem;