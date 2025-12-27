import { useMutation } from '@tanstack/react-query';
import { createCheckOutSession } from '../services/orderService';

export function useCreateCheckoutSession() {
    return useMutation({
        mutationFn: createCheckOutSession
    });
}