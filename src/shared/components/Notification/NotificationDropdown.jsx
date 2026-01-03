import { useSortedNotifications } from '../../hooks/useSortedNotifications'
import NotificationItem from './NotificationItem';
import { useNotificationActions } from '../../hooks/useNotificationsActions';
import { useTranslation } from 'react-i18next';

const NotificationDropdown = ({ close }) => {
    const { t } = useTranslation();
    const { sortedNotifications, isLoading } = useSortedNotifications()
    const { handleSendTest, handleMarkRead } = useNotificationActions();

    return (
        <div className="w-96 max-h-[60vh] overflow-auto bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-3">
            <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-800 dark:text-white">{t('profile.notifications')}</h4>
                <div className="flex items-center gap-2">
                    <button
                        onClick={handleSendTest}
                        className="px-3 py-1 text-sm bg-red-600 text-white rounded-md hover:bg-red-500 transition cursor-pointer"
                    >
                        {t('profile.sendTestNotification')}
                    </button>
                    <button
                        onClick={close}
                        className="px-2 py-1 text-sm text-gray-600 dark:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-zinc-800 cursor-pointer"
                    >
                        {t('common.close')}
                    </button>
                </div>
            </div>

            {isLoading && <p className="text-sm text-gray-500">{t('common.loading')}</p>}
            {!isLoading && sortedNotifications.length === 0 && (
                <p className="text-sm text-gray-500">{t('profile.noNotifications')}</p>
            )}

            <div className="space-y-2">
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

export default NotificationDropdown;