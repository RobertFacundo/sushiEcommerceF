import React, { useState } from "react";
import { useAuthForm } from "./hooks/useAuthForm";
import FormInput from "./components/FormInput";
import { authFields } from "../../shared/config/inputFields";
import GradientTextButton from "../../shared/components/Buttons/GradientTextButton";
import StyledTitle from "../../shared/components/Titles/StyledTitle";
import FormButton from "../../shared/components/Buttons/FormButton";

const AuthenticationView = ({ initialType = 'login' }) => {
    const [type, setType] = useState(initialType);
    const { register, handleSubmit, onSubmit, errors, loading, error } = useAuthForm(type);

    return (
        <div className="relative h-screen overflow-hidden flex items-center justify-center dark:bg-[url('/authenticationBG.jpg')] bg-[url('/authenticationBGLight.jpg')] bg-cover bg-bottom">

            <div className="relative bg-white dark:bg-[#0d0d0d] z-10 border border-black-500 dark:border-red-500 p-8 rounded-lg w-full max-w-md"
                style={{ boxShadow: "var(--card-shadow)" }}
            >
                <StyledTitle>
                    {type === 'login' ? 'Login' : 'Register'}
                </StyledTitle>
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
                    <FormButton loading={loading}>
                        {type === 'login' ? 'Login' : 'Register'}
                    </FormButton>
                </form>

                <p className="text-center text-black dark:text-white mt-4">
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