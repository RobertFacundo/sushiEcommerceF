import { toast } from "sonner";
import { useAddNotification, useMarkNotificationAsRead } from "../../features/profile/hooks/useNotifications";

export const useNotificationActions = (closeDropdown) => {
    const addNotificationMutation = useAddNotification();
    const markReadMutation = useMarkNotificationAsRead();

    const handleSendTest = () => {
        addNotificationMutation.mutate(
            {
                type: 'TEST',
                data: {
                    message: `Notification test - ${new Date().toLocaleTimeString()}`
                }
            },
            {
                onSuccess: () => toast.success('Test Notification sent'),
                onError: () => toast.error('Failed to send notification')
            }
        );
    };

    const handleMarkRead = (notificationId) => {
        console.log('[UI] Mark read clicked:', notificationId);

        markReadMutation.mutate(notificationId, {
            onSuccess: () => {
                toast.success?.('Marked as read');
            },
            onError: () => {
                console.error('[UI] Mark read error', e);
                toast.error?.('Failed to mark as Read')
            }
        });
    };


    return {
        handleSendTest,
        handleMarkRead
    }
}