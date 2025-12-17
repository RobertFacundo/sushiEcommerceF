import { useMutation, useQueryClient } from '@tanstack/react-query';
import { cartService } from '../services/cartServices';

export const useUpdateCartItem = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: cartService.updateItem,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cart'] });
        },
    });
};