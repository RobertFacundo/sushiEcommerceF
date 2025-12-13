import { useQuery } from '@tanstack/react-query';
import { getCategories, getProductsByCategory, getProductById } from '../services/ourMenuService';

export const useCategories = () => {
    return useQuery({
        queryKey: ['categories'],
        queryFn: getCategories,
        staleTime: 1000 * 60 * 5,
    });
};

export const useProductsByCategory = (categoryId) => {
    return useQuery({
        queryKey: ['productsByCategory', categoryId],
        queryFn: () => getProductsByCategory(categoryId),
        enabled: !!categoryId,
        stableTime: 1000 * 60 * 5,
    });
};

export const useProductById = (productId) => {
    return useQuery({
        queryKey: ['product', productId],
        queryFn: () => getProductById(productId),
        enabled: !!productId,
        staleTime: 1000 * 60 * 5,
    });
};