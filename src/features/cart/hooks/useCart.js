import { useQuery } from '@tanstack/react-query';
import { cartService } from '../services/cartServices';

export const useCart = () => {
    return useQuery({
        queryKey: ['cart'],
        queryFn: cartService.getCart,
        staleTime: 1000 * 60 * 2,
        keepPreviousData: true
    });
};