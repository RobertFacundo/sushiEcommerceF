
export const useAnimation = () => {
    return {
        initial: {
            opacity: 0,
            y: 16
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: 12
        },
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        }
    };
};