import { useMutation, useQueryClient } from '@tanstack/react-query'
import { cartService } from '../services/cartServices';

export const useRemoveCartItem = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: cartService.removeItem,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cart'] });
        },
    });
};