import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser, registerUser, resetAuthState } from '../redux/slices/auth.slice';
import { useEffect } from 'react';

export const useAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, token, isAuthenticated, loading, error } = useSelector(state => state.auth);

    const handleAuth = async (payload, type = 'login') => {
        const action = type === 'login' ? loginUser : registerUser;
        const resultAction = await dispatch(action(payload));

        if (action.fulfilled.match(resultAction)) {
            localStorage.setItem('token', resultAction.payload.token);
            navigate('/Profile')
        }

        return resultAction;
    };

    const login = (payload) => handleAuth(payload, 'login');
    const register = (payload) => handleAuth(payload, 'register');

    const logout = () => {
        localStorage.removeItem('token');
        dispatch(resetAuthState());
        navigate('/login');
    };

    return { user, token, isAuthenticated, loading, error, login, register, logout }
}