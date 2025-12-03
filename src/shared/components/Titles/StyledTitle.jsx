
const StyledTitle = ({ children, size = '2xl', className = "" }) => {
    return (
        <h2 className={`text-${size} font-bold text-black dark:text-white mb-6 text-center ${className}`}>
            {children}
        </h2>
    )
};

export default StyledTitle;