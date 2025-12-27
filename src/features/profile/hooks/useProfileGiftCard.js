import { useQuery } from '@tanstack/react-query';
import { getUserGiftCard } from '../services/profileServices';

export function useProfileGiftCard() {
    return useQuery({
        queryKey: ['my-gift-card'],
        queryFn: getUserGiftCard,
    });
}