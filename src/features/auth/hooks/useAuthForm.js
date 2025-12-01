import { useForm } from "react-hook-form";
import { useAuth } from "./useAuth";

export const useAuthForm = (type = 'login') => {
    const { login, register: registerUser, loading, error } = useAuth();

    const { register, handleSubmit, reset, formState: { errors }
    } = useForm({
        defaultValues:
            type === 'login'
                ? { email: '', password: '' }
                : { name: '', email: '', password: '', confirmPassword: '' },
    });

    const onSubmit = async (data) => {
        try {
            if (type === 'register') {
                if (data.password !== data.confirmPassword) {
                    return { error: 'Passwords do not match' };
                }
                await registerUser({ name: data.name, email: data.email, password: data.password });
            } else {
                await login({ email: data.email, password: data.password });
            }
            reset()
        } catch (error) {
            console.error(error);
        }
    };

    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
        loading,
        error,
        type
    }
}