import { useMemo } from "react";

export const useCartAnimation = () => {
    const variants = useMemo(() => ({
        hidden: {
            x: '100%',
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 30,
            }
        },
        exit: {
            x: '100%',
            opacity: 0,
            transition: { duration: 0.9 }
        }
    }), []);

    return { variants };
}

export const useCartItemAnimation = () => {
    const itemVariants = useMemo(() => ({
        hidden: {
            opacity: 0,
            x: 20
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3 }
        },
        exit: {
            opacity: 0,
            x: -20,
            transition: { duration: 0.2 }
        }
    }), []);

    return { itemVariants }
}