import { motion } from 'framer-motion';
import InfoProduct from "./InfoProduct";
import { useAnimation } from "../hooks/useAnimation";

const BaseCard = ({ mode, data, onSelectCategory }) => {
    const animation = useAnimation()

    const isCategory = mode === 'category';
    const isProduct = mode === 'product';

    return (
        <motion.div
            {...animation}
            onClick={() => isCategory && onSelectCategory(data)}
            className="cursor-pointer bg-white rounded-xl shadow-md 
                       border border-gray-100
                       p-4 transition-all dark:bg-black dark:border-stone-700"
        >
            <img
                src={data.imageUrl}
                alt={data.name.en}
                className={`${isProduct ? "h-48" : "h-40"} w-full 
                            object-cover rounded-lg mb-4 transition-transform 
                            hover:scale-105`}
            />
            <h3 className={`font-semibold text-gray-800 dark:text-white 
                            ${isProduct ? "text-xl" : "text-lg"}`}>
                {data.name.en}
            </h3>

            {isProduct && (
                <InfoProduct
                    description={data.description}
                    price={data.price}
                // onAddToCart={() => onAddToCart(data)}
                />
            )}
        </motion.div>
    );
};

export default BaseCard;