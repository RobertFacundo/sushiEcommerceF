import HeroBanner from "./components/HeroBanner";
import { heroBanners } from "./assets/heroBanners";
import { useSelector } from "react-redux";

const HomeView = () => {
    const theme = useSelector((state) => state.theme.currentTheme);

    return (
        <div>
            {heroBanners.map(banner => (
                <HeroBanner
                    key={banner.id}
                    image={theme === 'light' ? banner.lightImage : banner.darkImage}
                    title={banner.title}
                    subtitle={banner.subtitle}
                    ctaText={banner.ctaText}
                    ctaLink={banner.ctaLink}
                />
            ))}
        </div>
    )
}

export default HomeView;