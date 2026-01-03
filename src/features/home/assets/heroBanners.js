import bannerDark from '@shared/assets/home/banner1.jpg';
import bannerDarkII from '@shared/assets/home/bannerDarkII.jpg';
import bannerDarkIII from '@shared/assets/home/bannerDarkIII.jpg';
import bannerLightII from '@shared/assets/home/banner2.jpg';
import bannerLightIII from '@shared/assets/home/banner.jpg';
import bannerLight from '@shared/assets/home/bannerLight.jpg'

export const heroBanners = [
  {
    id: 1,
    lightImage: bannerLight,
    darkImage: bannerDark,
    title: "hero.banner1.title",
    subtitle: "hero.banner1.subtitle",
    ctaText: "hero.banner1.cta",
    ctaLink: "/ourMenu"
  },
  {
    id: 2,
    lightImage: bannerLightII,
    darkImage: bannerDarkII,
    title: "hero.banner2.title",
    subtitle: "hero.banner2.subtitle",
    ctaText: "hero.banner2.cta",
    ctaLink: "/ourMenu"
  },
  {
    id: 3,
    lightImage: bannerLightIII,
    darkImage: bannerDarkIII,
    title: "hero.banner3.title",
    subtitle: "hero.banner3.subtitle",
    ctaText: "hero.banner3.cta",
    ctaLink: "/ourMenu"
  }
];