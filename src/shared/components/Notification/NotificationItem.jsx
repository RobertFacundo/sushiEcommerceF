import { useTranslation } from "react-i18next";

const NotificationItem = ({ notification, onMarkRead }) => {
    const { t, i18n } = useTranslation();
    const { type, data, read, createdAt } = notification;

    return (
        <div
            className={`flex items-start justify-between p-3 rounded-lg transition
          ${read ? "opacity-70" : "bg-blue-50 dark:bg-neutral-800"} 
          hover:bg-gray-100 dark:hover:bg-zinc-800`}
        >
            <div className="flex-1">
                <p className="text-sm text-gray-800 dark:text-white">
                    {t(`profile.notificationItem.${type}`, data)}
                </p>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(createdAt).toLocaleTimeString(i18n.language)}
                </span>
            </div>

            {!read ? (
                <button
                    onClick={onMarkRead}
                    className="ml-3 text-xs text-red-500 dark:text-white hover:underline cursor-pointer"
                >
                    {t('profile.markAsRead')}
                </button>
            ) : (
                <span className="ml-3 text-xs text-gray-400">
                    {t('profile.read')}
                </span>
            )}
        </div>
    )
};

export default NotificationItem;