import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        currentTheme: localStorage.getItem('theme') || 'light',
    },
    reducers: {
        toggleTheme: (state) => {
            const newTheme = state.currentTheme === 'light' ? 'dark' : 'light';
            state.currentTheme = newTheme;

            localStorage.setItem('theme', newTheme)
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;