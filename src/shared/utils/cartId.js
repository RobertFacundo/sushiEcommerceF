import crypto from 'crypto';

export function getCartId() {
    let cartId = localStorage.getItem('cartId');
    if (!cartId) {
        cartId = crypto.randomUUID();
        localStorage.setItem('cartId', cartId);
    }
    return cartId;
}

export function setCartId(cartId) {
    if (cartId) {
        localStorage.setItem('cartId', cartId);
    }
}