import React, { useState } from "react";
import { useAuthForm } from "./hooks/useAuthForm";
import FormInput from "./components/FormInput";
import { authFields } from "../../shared/config/inputFields";
import GradientTextButton from "../../shared/components/Buttons/GradientTextButton";
import StyledTitle from "../../shared/components/Titles/StyledTitle";
import FormButton from "../../shared/components/Buttons/FormButton";
import { useAuthAnimation } from "./hooks/useAuthAnimation";
import { useTranslation } from "react-i18next";

const AuthenticationView = ({ initialType = 'login' }) => {
    const { t } = useTranslation();
    const [type, setType] = useState(initialType);
    const { register, handleSubmit, onSubmit, errors, loading, error } = useAuthForm(type);

    const { containerRef, cardRef, formRef } = useAuthAnimation();

    return (
        <div ref={containerRef} className="relative h-screen overflow-hidden flex items-center justify-center dark:bg-[url('/authenticationBG.jpg')] bg-[url('/authenticationBGLight.jpg')] bg-cover bg-bottom">

            <div ref={cardRef} className="relative bg-white dark:bg-[#0d0d0d] z-10 border border-black-500 dark:border-red-500 p-8 rounded-lg w-full max-w-md"
                style={{ boxShadow: "var(--card-shadow)" }}
            >
                <StyledTitle>
                    {type === 'login' ? t("authentication.login") : t("authentication.register")}
                </StyledTitle>
                <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                    {authFields
                        .filter(field => field.showIn.includes(type))
                        .map(field => (
                            <FormInput
                                key={field.name}
                                label={field.labelKey}
                                name={field.name}
                                type={field.type}
                                register={register}
                                error={errors[field.name]}
                            />
                        ))
                    }
                    {error && (
                        <p className="text-red-500 text-sm mt-2">
                            {t("authentication.error")}
                        </p>
                    )}
                    <FormButton loading={loading}>
                        {type === 'login' ? t("authentication.login") : t("authentication.register")}
                    </FormButton>
                </form>

                <p className="text-center text-black dark:text-white mt-4">
                    {type === 'login' ? t("authentication.switchToRegister") : t("authentication.switchToLogin")}{' '}
                    <GradientTextButton onClick={() => setType(type === 'login' ? 'register' : 'login')}>
                        {type === 'login' ? t("authentication.register") : t("authentication.login")}
                    </GradientTextButton>
                </p>
            </div>
        </div>
    )
};

export default AuthenticationView;