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

export const addNotification = async (message) => {
    const { data } = await api.post('/user/notifications', { message });
    return data;
};

export const markNotificationAsRead = async (index) => {
    const { data } = await api.patch(`/user/notifications/${index}/read`);
    return data;
};
