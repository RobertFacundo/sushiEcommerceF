import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addNotification, markNotificationAsRead } from '../services/profileServices';

export const useAddNotification = () => {
    const qc = useQueryClient();

    return useMutation({
        mutationFn: addNotification,
        onSuccess: () => qc.invalidateQueries(["profile"]),
    });
};

export const useMarkNotificationAsRead = () => {
    const qc = useQueryClient();

    return useMutation({
        mutationFn: markNotificationAsRead,
        onSuccess: () => qc.invalidateQueries(["profile"]),
    });
};