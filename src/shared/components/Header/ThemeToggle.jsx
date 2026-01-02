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
                text-black dark:text-white
                hover:bg-red-500 dark:hover:bg-red-500
                hover:text-white
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