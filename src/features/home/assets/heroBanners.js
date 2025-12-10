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
    title: "Sushi premium todos los días",
    subtitle: "Ingredientes frescos y preparados al momento",
    ctaText: "Ver menú",
    ctaLink: "/ourMenu"
  },
  {
    id: 2,
    lightImage: bannerLightII,
    darkImage: bannerDarkII,
    title: "Ramen auténtico japonés",
    subtitle: "Sabores intensos, calidez real",
    ctaText: "Explorar platos",
    ctaLink: "/ourMenu"
  },
  {
    id: 3,
    lightImage: bannerLightIII,
    darkImage: bannerDarkIII,
    title: "Promociones exclusivas",
    subtitle: "Combos, descuentos y especiales semanales",
    ctaText: "Ir al menú",
    ctaLink: "/ourMenu"
  }
];