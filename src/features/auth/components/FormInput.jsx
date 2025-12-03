import React, {useState} from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const FormInput = ({ label, name, type = 'text', register, error }) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === 'password';

    const togglePassword = () => {
        setShowPassword(prev => !prev);

    }

    return (
        <div className="mb-4">
            <label htmlFor={name}
                className="block text-black dark:text-white mb-1 font-medium"
            >
                {label}
            </label>
            <input
                type={isPassword && showPassword ? 'text' : type}
                id={name}
                {...register(name)}
                className={`w-full px-3 py-2 rounded-md bg-white text-black border
                    ${error ? 'border-red-500' : 'border-gray-700'}
                    focus:outline-none focus:ring-2 focus:ring-white-500 dark:focus:ring-red-500
                    ${isPassword ? 'pr-10' : ''}
                `}
            />
            {isPassword && (
                <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute right-20 mt-3 text-black dark:text-black cursor-pointer"
                >
                    {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
            )}
            {error && <span className="text-red-500 text-sm mt-1 block">{error.message}</span>}
        </div>
    );
};

export default FormInput;