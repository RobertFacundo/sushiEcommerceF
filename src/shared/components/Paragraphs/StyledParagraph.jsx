const StyledParagraph = ({ children, className = '' }) => {
    return (
        <p className={`text-black dark:text-white text-sm ${className}`}>
            {children}
        </p>
    )
};

export default StyledParagraph