import { useMemo } from 'react';
import { useProfile } from '../../features/profile/hooks/useProfile';

export const useSortedNotifications = () => {
    const { data: profile, isLoading } = useProfile();
    const notifications = profile?.notifications ?? []

    const sortedNotifications = useMemo(() => {
        return [...notifications].sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
    }, [notifications]);

    return {
        sortedNotifications,
        isLoading
    }
}