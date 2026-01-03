import { motion } from 'framer-motion';
import InfoProduct from "./InfoProduct";
import { useProductAnimation } from "../hooks/useAnimation";
import { getImageUrl } from '../../../shared/utils/getUrlImage';
import { useTranslation } from 'react-i18next';

const BaseCard = ({ mode, data, onSelectCategory, onAddToCart }) => {
    const { variants } = useProductAnimation();
    const { i18n, t } = useTranslation();

    const lang = i18n.language;
    const isCategory = mode === 'category';
    const isProduct = mode === 'product';

    const outOfStock = data.stock === 0;

    return (
        <motion.div
            initial='hidden'
            animate='visible'
            exit='exit'
            variants={variants}
            onClick={() => isCategory && onSelectCategory(data)}
            className="cursor-pointer bg-white rounded-xl shadow-md 
                       border border-gray-100
                       p-4 transition-all dark:bg-black dark:border-stone-700"
        >
            <div className='relative'>
                <img
                    src={getImageUrl(data.imageUrl)}
                    alt={data.name[lang]}
                    className={`${isProduct ? "h-48" : "h-40"} w-full 
                            object-cover rounded-lg mb-4 transition-transform 
                            hover:scale-105`}
                />
                {outOfStock && (
                    <div className='
                        absolute inset-0
                        bg-black/50
                        rounded-lg
                        z-10
                    '/>
                )}
                {outOfStock && (
                    <div className='absolute top-0 right-0 bg-red-600 text-white px-2 py-1 text-xs font-semibold rounded-bl-lg z-20'>
                       {t("common.outOfStock")}
                    </div>
                )}
            </div>
            <h3 className={`font-semibold text-gray-800 dark:text-white 
                            ${isProduct ? "text-xl" : "text-lg"}`}>
                {data.name[lang]}
            </h3>
            {isProduct && (
                <InfoProduct
                    description={data.description[lang]}
                    price={data.price}
                    outOfStock={outOfStock}
                    onAddToCart={() => onAddToCart(data)}
                />
            )}
        </motion.div>
    );
};

export default BaseCard;