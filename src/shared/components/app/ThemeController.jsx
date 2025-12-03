import { useEffect } from "react";
import { useSelector } from "react-redux";

const ThemeController = () => {
    const currentTheme = useSelector(state => state.theme.currentTheme);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const root = window.document.documentElement;

        root.classList.add('theme-transition');

        const timeout = setTimeout(() => {
            root.classList.remove('theme-transition');
        }, 500)

        if (currentTheme === 'dark') {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }

        return () => clearTimeout(timeout);

    }, [currentTheme]);

    return null;
}

export default ThemeController;