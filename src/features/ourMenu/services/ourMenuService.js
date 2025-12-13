import api from '@shared/config/axiosConfig.js';

export const getCategories = async () => {
    const { data } = await api.get('/api/menu/categories');
    return data;
};

export const getProductsByCategory = async (categoryId) => {
    const { data } = await api.get(`/api/menu/products/category/${categoryId}`);
    return data;
};

export const getProductById = async (productId) => {
    const { data } = await api.get(`/api/menu/products/${productId}`);
    return data;
};