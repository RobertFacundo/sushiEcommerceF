const FormButton = ({ children, loading = false, type = 'submit', className = '' }) => {
    return (
        <button
            type={type}
            disabled={loading}
            className={`
            w-full py-2 dark:bg-red-600 bg-black hover:bg-red-600 text-white font-semibold rounded-md transition-all duration-800 cursor-pointer ${className}
        `}
        >
            {loading ? 'Processing...' : children}
        </button>
    )
};

export default FormButton;