import { useTranslation } from "react-i18next";

const NotificationItem = ({ notification, onMarkRead }) => {
    const { t, i18n } = useTranslation();
    const { message, read, createdAt } = notification;

    return (
        <div
            className={`p-3 rounded-lg border transition 
                ${read ? "opacity-65 border-gray-300" : "border-red-200 bg-stone-100 dark:bg-neutral-800"}`}
        >
            <p className="text-sm text-gray-800 dark:text-white">
                {message}
            </p>
            <div className="flex justify-between items-center mt-1">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(createdAt).toLocaleString(i18n.language)}
                </span>
                {!read ? (
                    <button
                        onClick={onMarkRead}
                        className="text-xs dark:text-black dark:text-white hover:underline cursor-pointer"
                    >
                        {t('profile.markAsRead')}
                    </button>
                ) : (
                    <span className="text-xs text-gray-400">
                        {t('profile.read')}
                    </span>
                )}
            </div>
        </div>
    )
};

export default NotificationItem;