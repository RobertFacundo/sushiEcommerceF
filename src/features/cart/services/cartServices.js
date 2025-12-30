import api from "@shared/config/axiosConfig";
import { getCartId, setCartId } from "../../../shared/utils/cartId";

export const cartService = {
    getCart: async () => {
        const cartId = getCartId();
        const { data } = await api.get(`/cart?cartId=${cartId}`);

        // console.log(data, 'log del get cart service')
        // if (data.cart?.cartId) setCartId(data.cart.cartId);
        console.log(data, 'log del cartservice')

        return data;
    },
    addItem: async ({ productId, quantity = 1 }) => {
        const cartId = getCartId();
        const { data } = await api.post('/cart/items', { productId, quantity, cartId });
        if (data?.cartId) setCartId(data?.cartId);

        return data.cart;
    },
    updateItem: ({ productId, quantity }) =>
        api.put(`/cart/items/${productId}`, { quantity }),

    removeItem: ({ productId }) =>
        api.delete(`/cart/items/${productId}`),

    clearCart: async () => {
        const cartId = getCartId();
        const { data } = await api.delete(`/cart/items?cartId=${cartId}`);
        if (data?.cartId) setCartId(data?.cartId);
        
        return data.cart;
    },
    mergeCart: () =>
        api.post('/cart/merge')
}