import { useMutation, useQueryClient } from '@tanstack/react-query';
import { cartService } from '../services/cartServices';

export const useAddToCart = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: cartService.addItem,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cart'] });
        },
    });
};