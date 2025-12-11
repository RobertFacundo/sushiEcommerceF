import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export const useAuthAnimation = () => {
    const containerRef = useRef(null);
    const cardRef = useRef(null);
    const formRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(containerRef.current, {
                opacity: 0,
                duration: 1.6,
                ease: "power2.out"
            });

            gsap.from(cardRef.current, {
                opacity: 0,
                y: 40,
                duration: 1.7,
                stagger:0.05,
                ease: "power3.out",
                delay: 0.15,
            });
        });

        return () => ctx.revert()
    }, []);

    return { containerRef, cardRef, formRef }
}