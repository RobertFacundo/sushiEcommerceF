import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/slices/ThemeSlice";
import { IoSunny, IoMoon } from 'react-icons/io5';

const ThemeToggle = ({ size = 24 }) => {
    const currentTheme = useSelector((state) => state.theme.currentTheme);
    const dispatch = useDispatch();

    const handleThemeToggle = () => {
        dispatch(toggleTheme());
    }

    return (
        <button
            onClick={handleThemeToggle}
            aria-label={`Change theme ${currentTheme === 'dark' ? 'light' : 'dark'}`}
            className={`
                p-2 rounded-full transition-colors duration-300
                text-gray-900 dark:text-gray-200 
                hover:bg-gray-200 dark:hover:bg-gray-800
                cursor-pointer
            `}
        >
            {currentTheme === 'dark' ? (
                <IoSunny size={size} />
            ) : (
                <IoMoon size={size} />
            )}
        </button>
    )
}

export default ThemeToggle;