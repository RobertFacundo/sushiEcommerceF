import { useMemo } from "react";

export const useProductAnimation = () => {
    const variants = useMemo(() => ({
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 120, damping: 20 } 
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: { duration: 0.2 }
        }
    }), []);

    return { variants }
}