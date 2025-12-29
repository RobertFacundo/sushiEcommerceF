import { useMemo } from "react";

export const useCheckoutMotion = () => {
    return useMemo(() => {
        return {
            page: {
                initial: {
                    opacity: 0,
                    y: 12
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: -12
                },
                transition: {
                    duration: 0.36,
                    ease: 'easeOut'
                },
            },
            stagger: {
                initial: 'hidden',
                animate: 'visible',
                variants: {
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.12,
                        },
                    },
                },
            },
            item: {
                hidden: {
                    opacity: 0,
                    y: 8
                },
                visible: {
                    opacity: 1,
                    y: 0
                },
            },
        };
    }, []);
};