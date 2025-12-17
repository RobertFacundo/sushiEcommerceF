
export const useAnimation = () => {
      return {
        initial: {
            y: 8,
            opacity: 0.4
        },
        animate: {
            y: 0,
            opacity: 1
        },
        exit: {
            y: 12,
            opacity: 0
        },
        transition: {
            duration: 1.1,
            ease: 'easeOut',
        }
    };
};