import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../../services/authService';

const tokenFromStorage = localStorage.getItem('token');
const userFromStorage = localStorage.getItem('user')

export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (payload, { rejectWithValue }) => {
        try {
            const res = await authService.register(payload);
            return res;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (payload, { rejectWithValue }) => {
        try {
            const res = await authService.login(payload);
            return res;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const initialState = {
    user: userFromStorage ? JSON.parse(userFromStorage) : null,
    token: tokenFromStorage || null,
    isAuthenticated: false,
    message: '',
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetAuthState: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            state.message = '';
            state.loading = false;
            state.error = null;

            localStorage.removeItem('token');
            localStorage.removeItem('user')
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isAuthenticated = true;
                state.message = action.payload.message;

                localStorage.setItem('token', action.payload.token);
                localStorage.setItem('user', JSON.stringify(action.payload.user))
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })

            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isAuthenticated = true;
                state.message = action.payload.message;

                localStorage.setItem('token', action.payload.token);
                localStorage.setItem('user', JSON.stringify(action.payload.user));
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            });
    },
});

export const { resetAuthState } = authSlice.actions;
export default authSlice.reducer;