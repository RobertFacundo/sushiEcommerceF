import api from "../../../shared/config/axiosConfig";

export const getProfile = async () => {
    const { data } = await api.get('/user/profile');
    return data;
}

export const updateProfile = async (updateData) => {
    try {
        console.log("Sending to API:", updateData);
        const { data } = await api.patch('/user/profile', updateData);
        return data;
    } catch (err) {
        console.error("Profile update error:", err.response?.data || err.message);
        throw err;
    }
};

export const addNotification = async () => {
    const response = await api.post('/user/notifications', {
        type: 'TEST',
        data: {
            message: `Notification test - ${new Date().toLocaleTimeString()}`
        }
    });
    return response.data;
};

export const markNotificationAsRead = async (notificationId) => {
    const { data } = await api.patch(`/user/notifications/${notificationId}/read`);
    return data;
};

export const getUserGiftCard = async () => {
    const { data } = await api.get('/api/giftcards/me');
    return data;
}