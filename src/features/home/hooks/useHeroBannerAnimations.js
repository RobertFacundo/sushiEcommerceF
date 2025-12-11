import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useHeroBannerAnimation = (sectionRef, titleRef, subtitleRef, ctaRef) => {
    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                sectionRef.current,
                { scale: 1 },
                {
                    scale: 1.01,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true, 
                    }
                }
            );

            gsap.from(titleRef.current, {
                x: -100,
                opacity: 0,
                duration: 1.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });

            gsap.from(subtitleRef.current, {
                x: 100,
                opacity: 0,
                duration: 2,
                ease: "power3.out",
                delay: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });

            gsap.from(ctaRef.current, {
                y: 50,
                opacity: 0,
                duration: 2.4,
                ease: "power3.out",
                delay: 0.4,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [sectionRef, titleRef, subtitleRef, ctaRef]);
}