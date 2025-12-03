import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../../features/auth/redux/slices/auth.slice'
import themeReducer from '../../shared/redux/slices/ThemeSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        theme: themeReducer,
    }
})
