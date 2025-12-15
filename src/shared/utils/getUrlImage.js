const BACKEND_URL = import.meta.env.VITE_API_URL

export const getImageUrl = (imageUrl) => {
    if (!imageUrl) return '';

    if (imageUrl.startsWith('http')) return imageUrl;

    return `${BACKEND_URL}${imageUrl}`
}