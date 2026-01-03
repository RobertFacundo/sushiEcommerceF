import { useTranslation } from "react-i18next";
import { getImageUrl } from "../../../shared/utils/getUrlImage";

const PurchaseItem = ({ item }) => {
    const { i18n } = useTranslation();

    return (
        <div className="flex items-center justify-between gap-4 p-4 
                        rounded-xl 
                        border border-gray-200 dark:border-zinc-700
                        bg-gray-50 dark:bg-zinc-800
                        hover:shadow-md transition-shadow ">
            <img
                src={getImageUrl(item.image)}
                alt={item.name}
                className="w-14 h-14 object-cover rounded-md"
            />

            <div className="flex flex-col flex-1 ml-4">
                <span className="dark:text-white">{item.name}</span>

                <span className="text-sm text-gray-600 dark:text-gray-400">
                    ${item.price} × {item.quantity}
                </span>

            </div>
            <span className="text-xs text-gray-500 dark:text-gray-500">
                {new Date(item.purchasedAt).toLocaleDateString(i18n.language)}
            </span>
        </div>
    );
};

export default PurchaseItem;