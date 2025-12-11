import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export const useProfileAnimation = () => {
    const containerRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const giftCardRef = useRef(null);
    const sectionsRef = useRef([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { duration: 0.8, ease: "sine.out" }
            });

            tl.from(containerRef.current, { opacity: 0, duration: 0.2 })
                .from(leftRef.current, { opacity: 0, x: -40 }, "-=0.4")
                .from(rightRef.current, { opacity: 0, x: -40 }, "-=0.55")
                .from(sectionsRef.current, {
                    opacity: 0,
                    y: 20,
                    stagger: 0.25
                }, "-=0.4")
                .from(giftCardRef.current, {
                    opacity: 0,
                    scale: 0.95,
                    duration: 3.9,
                }, "-=0.8")
        });

        return () => ctx.revert()
    }, []);

    return { containerRef, leftRef, rightRef, giftCardRef, sectionsRef };
};