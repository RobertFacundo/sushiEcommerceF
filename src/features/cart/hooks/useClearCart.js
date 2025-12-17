import { useMutation, useQueryClient } from '@tanstack/react-query';
import { cartService } from '../services/cartServices';

export const useClearCart = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: cartService.clearCart,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cart'] })
        },
    });
};