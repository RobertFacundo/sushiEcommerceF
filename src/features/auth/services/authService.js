import api from '../../../shared/config/axiosConfig'

const AUTH_URL = '/user';

export const authService = {
    async register(payload) {
        try {
            const { data } = await api.post(`${AUTH_URL}/register`, payload);
            return {
                user: data.user,
                token: data.token,
                message: data.message,
            }
        } catch (error) {
            throw {
                status: error.response?.status || 500,
                message: error.response?.data?.error || 'Registration failed',
            };
        }
    },
    async login(payload) {
        try {
            const { data } = await api.post(`${AUTH_URL}/login`, payload);
            return {
                user: data.user,
                token: data.token,
                message: data.message,
            };
        } catch (error) {
            throw {
                status: error.response?.status || 500,
                message: error.response?.data?.error || 'Log in failed',
            };
        }
    }
};

export default authService;