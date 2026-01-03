import { useTranslation } from "react-i18next";
import { getImageUrl } from "../../../shared/utils/getUrlImage";
import { useCartItemAnimation } from "../hooks/useCartAnimation";
import { motion } from 'framer-motion';

const CartItem = ({ item, onUpdate, onRemove }) => {
    const { i18n, t } = useTranslation();
    const { productId, quantity } = item;
    const total = productId.price * quantity
    const lang = i18n.language;

    const { itemVariants } = useCartItemAnimation()

    return (
        <motion.li
            layout
            initial='hidden'
            animate='visible'
            exit='exit'
            variants={itemVariants}
            className="flex items-center gap-6 border-b border-gray-200 dar:border-stone-700 mr-2">
            <img
                className="w-21 h-21 object-cover rounded-lg flex-shrink-0"
                src={getImageUrl(productId.imageUrl)} alt={productId.price} />

            <div className="flex-1">
                <h3 className="font-medium text-gray-800 dark:text-white">
                    {productId.name[lang]}
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
                className="w-10 text-center border border-gray-300 dark:border-stone-600 rounded-md bg-white dark:bg-black text-gray-800 dark:text-white"
            />
            <span className="w-16 text-right font-semibold text-gray-800 dark:text-white">
                ${total.toFixed(2)}
            </span>

            <button
                onClick={() => onRemove(productId._id)}
                className="text-gray-400 hover:text-red-500 transition-colors text-lg cursor-pointer"
                aria-label={t("cart.removeItem")}
            >
                ✕
            </button>
        </motion.li>
    );
};

export default CartItem;