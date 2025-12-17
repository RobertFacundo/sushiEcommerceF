import { useMutation, useQueryClient } from '@tanstack/react-query';
import { cartService } from '../services/cartServices';

export const useMergeCart = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: cartService.mergeCart,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cart'] })
        },
    });
};