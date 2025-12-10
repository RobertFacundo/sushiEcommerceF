import { toast } from "sonner";
import { useAddNotification, useMarkNotificationAsRead } from "../../features/profile/hooks/useNotifications";

export const useNotificationActions = (closeDropdown) => {
    const addNotificationMutation = useAddNotification();
    const markReadMutation = useMarkNotificationAsRead();

    const handleSendTest = () => {
        const msg = `Notification Test - ${new Date().toLocaleTimeString()}`;

        addNotificationMutation.mutate(msg, {
            onSuccess: () => {
                toast.success('Test Notification sent');
            },
            onError: () => toast.error?.('Failed to send notification')
        })
    };

    const handleMarkRead = (notificationId) => {
        markReadMutation.mutate(notificationId, {
            onSuccess: () => {
                toast.success?.('Marked as read');
            },
            onError: () => toast.error?.('Failed to mark as Read')
        });
    };


    return {
        handleSendTest,
        handleMarkRead
    }
}