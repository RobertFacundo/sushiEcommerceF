import React, { useState } from "react";
import { useAuthForm } from "../hooks/useAuthForm";
import FormInput from "./FormInput";
import { authFields } from "../../../shared/config/inputFields";
import GradientTextButton from "../../../shared/components/Buttons/GradientTextButton";

const AuthenticationView = ({ initialType = 'login' }) => {
    const [type, setType] = useState(initialType);
    const { register, handleSubmit, onSubmit, errors, loading, error } = useAuthForm(type);

    return (
        <div className="relative h-screen overflow-hidden flex items-center justify-center bg-[url('/authenticationBG.jpg')] bg-cover bg-bottom">

            <div className="relative bg-[#0d0d0d] z-10 border border-red-500 p-8 rounded-lg 
                shadow-[0_0_25px_4px_rgba(255,0,0,0.4)] w-full max-w-md">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                    {type === 'login' ? 'Login' : 'Register'}
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {authFields
                        .filter(field => field.showIn.includes(type))
                        .map(field => (
                            <FormInput
                                key={field.name}
                                label={field.label}
                                name={field.name}
                                type={field.type}
                                register={register}
                                error={errors[field.name]}
                            />
                        ))
                    }
                    {error && <p>{error}</p>}

                    <button
                        type="submit"
                        className="w-full py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition cursor-pointer"
                        disabled={loading}
                    >
                        {loading ? 'Processing...' : type === 'login' ? 'Login' : 'Register'}
                    </button>
                </form>

                <p className="text-center text-white mt-4">
                    {type === 'login' ? "Don't have an account?" : "Already have an account?"}{' '} 
                    <GradientTextButton onClick={() => setType(type === 'login' ? 'register' : 'login')}>
                        {type === 'login' ? 'Register' : 'Login'}
                    </GradientTextButton>
                </p>
            </div>
        </div>
    )
};

export default AuthenticationView;