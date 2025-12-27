import api from '@shared/config/axiosConfig.js';

export const createCheckOutSession = async (payload) => {
    const response = await api.post('/api/orders/checkout/session', payload);
    return response.data;
}

export const getOrderById = async (orderId) => {
    const response = await api.get(`/api/orders/${orderId}`);
    return response.data;
}