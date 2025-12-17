import api from "@shared/config/axiosConfig";

export const cartService = {
    getCart: async () => {
        const response = await api.get('/cart');
        return response.data;
    },
    addItem: ({ productId, quantity = 1 }) =>
        api.post('/cart/items', { productId, quantity }),

    updateItem: ({ productId, quantity }) =>
        api.put(`/cart/items/${productId}`, { quantity }),

    removeItem: ({ productId }) =>
        api.delete(`/cart/items/${productId}`),

    clearCart: () =>
        api.delete('/cart'),

    mergeCart: () =>
        api.post('/cart/merge')
}