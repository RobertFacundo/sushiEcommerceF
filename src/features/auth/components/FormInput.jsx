import React from "react";

const FormInput = ({ label, name, type = 'text', register, error }) => {
    return (
        <div className="mb-4">
            <label htmlFor={name} className="block text-white mb-1 font-medium">{label}</label>
            <input type={type} id={name} {...register(name)}
                className={`w-full px-3 py-2 rounded-md bg-gray-300 text-black border
                    ${error ? 'border-red-500' : 'border-gray-700'}
                    focus:outline-none focus:ring-2 focus:ring-red-500
                `}
            />
            {error && <span className="text-red-500 text-sm mt-1 block">{error.message}</span>}
        </div>
    );
};

export default FormInput;