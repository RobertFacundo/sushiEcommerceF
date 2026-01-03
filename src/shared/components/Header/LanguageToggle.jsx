import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'es' ? "en" : "es";
        i18n.changeLanguage(newLang);
        localStorage.setItem('lang', newLang)
    };

    return (
        <button
            onClick={toggleLanguage}
            aria-label="toggle Language"
            className="p-2 rounded-full transition-colors duration-300
                dark:bg-white
                hover:bg-red-500 dark:hover:bg-red-500
                hover:text-white
                cursor-pointer"
        >
            <img src='/translation.png' alt="Change language" className="w-7 h-7 opacity-80 hover:opacity-100 transition" />
        </button>
    )
};

export default LanguageToggle;