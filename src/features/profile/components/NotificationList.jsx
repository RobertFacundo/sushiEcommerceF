import NotificationItem from "./NotificationItem";
import { useNotificationActions } from "../../../shared/hooks/useNotificationsActions";
import { useSortedNotifications } from "../../../shared/hooks/useSortedNotifications";
import Loader from "../../../shared/components/app/Loader";

const NotificationList = () => {
    const { sortedNotifications, isLoading } = useSortedNotifications();
    const { handleMarkRead, handleSendTest } = useNotificationActions();

    return (
        <div className="mt-4 space-y-4 ">
            <div className="mt-4 space-y-4">
                <button onClick={handleSendTest}
                    className="px-3 py-1 bg-red-100 text-black rounded-lg hover:bg-red-500 text-sm cursor-pointer transition-all duration-800">
                    Send Test Notification
                </button>
            </div>
            {isLoading && (
                <div className="flex justify-center py-4">
                    <Loader className="text-neutral-400 dark:text-neutral-300 scale-75" />
                </div>
            )}
            {!isLoading && sortedNotifications.length === 0 && (
                <p className="text-sm text-gray-500">No notifications yet</p>
            )}

            <div className="space-y-2 max-h-70 overflow-y-auto pr-1">
                {sortedNotifications.map(n => (
                    <NotificationItem
                        key={n._id}
                        notification={n}
                        onMarkRead={() => handleMarkRead(n._id)}
                    />
                ))}
            </div>
        </div>
    )
};

export default NotificationList;