import { motion } from 'framer-motion';
import InfoProduct from "./InfoProduct";
import { useProductAnimation } from "../hooks/useAnimation";
import { getImageUrl } from '../../../shared/utils/getUrlImage';

const BaseCard = ({ mode, data, onSelectCategory, onAddToCart }) => {
    const { variants } = useProductAnimation()

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
                    alt={data.name.en}
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
                        SIN STOCK
                    </div>
                )}
            </div>
            <h3 className={`font-semibold text-gray-800 dark:text-white 
                            ${isProduct ? "text-xl" : "text-lg"}`}>
                {data.name.en}
            </h3>
            {isProduct && (
                <InfoProduct
                    description={data.description}
                    price={data.price}
                    outOfStock={outOfStock}
                    onAddToCart={() => onAddToCart(data)}
                />
            )}
        </motion.div>
    );
};

export default BaseCard;