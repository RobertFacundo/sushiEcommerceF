import axios from 'axios';
import { nanoid } from 'nanoid';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    headers: {
        "Content-Type": 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        let cartId = localStorage.getItem('cartId');

        if (!cartId) {
            cartId = nanoid();
            localStorage.setItem('cartId', cartId);
        }

        config.headers['x-cart-id'] = cartId

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
)

api.interceptors.response.use(
    (response) => response,
    (error) => {
        const status = error?.response?.status;

        if (status === 401) {
            console.warn('invalid token or expired');

            localStorage.removeItem('token');
        }

        if (status === 500) {
            console.error('internal server error');
        }

        return Promise.reject(error);
    }
);

export default api;