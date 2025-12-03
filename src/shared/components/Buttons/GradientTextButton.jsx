const GradientTextButton = ({ children, onClick, className = '' }) => {
    return (
        <button
            onClick={onClick}
            className={`
                font-medium transition-all duration-800
                text-black dark:text-white
                hover:text-transparent
                bg-clip-text
                hover:bg-gradient-to-t
                hover:from-red-400
                hover:to-black dark:hover:to-white
                cursor-pointer
                ${className}
            `}
        >
            {children}
        </button>
    )
};

export default GradientTextButton;