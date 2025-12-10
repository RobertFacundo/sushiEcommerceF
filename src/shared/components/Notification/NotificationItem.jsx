const NotificationItem = ({ notification, onMarkRead }) => {
    const { message, read, createdAt } = notification;

    return (
        <div
            className={`flex items-start justify-between p-3 rounded-lg transition
          ${read ? "opacity-70" : "bg-blue-50 dark:bg-neutral-800"} 
          hover:bg-gray-100 dark:hover:bg-zinc-800`}
        >
            <div className="flex-1">
                <p className="text-sm text-gray-800 dark:text-white">{message}</p>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(createdAt).toLocaleTimeString()}
                </span>
            </div>

            {!read ? (
                <button
                    onClick={onMarkRead}
                    className="ml-3 text-xs text-red-500 dark:text-white hover:underline cursor-pointer"
                >
                    Mark
                </button>
            ) : (
                <span className="ml-3 text-xs text-gray-400">
                    Read
                </span>
            )}
        </div>
    )
};

export default NotificationItem;