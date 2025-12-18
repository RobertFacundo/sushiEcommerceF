import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser, registerUser, resetAuthState } from '../redux/slices/auth.slice';
import { useMergeCart } from '../../cart/hooks/useMergeCart';

export const useAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { mutateAsync: mergeCart } = useMergeCart();

    const { user, token, isAuthenticated, loading, error } = useSelector(state => state.auth);

    const handleAuth = async (payload, type = 'login') => {
        const action = type === 'login' ? loginUser : registerUser;
        const resultAction = await dispatch(action(payload));

        if (action.fulfilled.match(resultAction)) {
            console.log('Login ok!')
            localStorage.setItem('token', resultAction.payload.token);

            console.log('Calling merge cart')
            await mergeCart()
            console.log('merge cart finished')
            localStorage.removeItem('cartId')
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