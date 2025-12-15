
export const useAnimation = () => {
    return {
        initial: {
            opacity: 0.4,
        },
        animate: {
            opacity: 1,
        },
        exit: {
            opacity: 0.2,
        },
        transition: {
            duration: 0.6,
            ease: 'backIn',
        }
    };
};