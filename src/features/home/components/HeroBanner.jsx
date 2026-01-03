import { Link } from "react-router-dom";
import { useRef } from "react";
import { useHeroBannerAnimation } from "../hooks/useHeroBannerAnimations";
import { useTranslation } from "react-i18next";

const HeroBanner = ({ image, title, subtitle, ctaText, ctaLink }) => {
    const { t } = useTranslation();

    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const ctaRef = useRef(null);

    useHeroBannerAnimation(sectionRef, titleRef, subtitleRef, ctaRef)

    return (
        <section ref={sectionRef}
            className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden transition-all duration-1500"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >

            <div className="absolute inset-0 bg-black/10" />

            <div className="relative text-center text-white px-6 flex flex-col items-center gap-12">
                <div >
                    <h2 ref={titleRef} className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                        {t(title)}
                    </h2>
                    <p ref={subtitleRef} className="text-lg md:text-2xl mb-6 drop-shadow-lg">
                        {t(subtitle)}
                    </p>
                </div>
                <div ref={ctaRef}>
                    <Link
                        to={ctaLink}
                        className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-md font-semibold"
                    >
                        {t(ctaText)}
                    </Link>
                </div>
            </div>
        </section>
    )
};

export default HeroBanner;