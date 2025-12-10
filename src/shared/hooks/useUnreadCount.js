import { useProfile } from "../../features/profile/hooks/useProfile";

export const useUnreadCount = () => {
    const { data: profile, isLoading } = useProfile();

    const unreadCount = profile?.notifications?.filter(n => !n.read).length ?? 0;

    return { unreadCount, isLoading };
}