import { useQuery } from "@tanstack/react-query";
import { getOrderById } from "../services/orderService";

export function useOrder(orderId) {
    return useQuery({
        queryKey: ['order', orderId],
        queryFn: () => getOrderById(orderId),
        enabled: !!orderId,
        refetchInterval: data =>
            data?.status === 'paid' ? false : 2000
    });
}