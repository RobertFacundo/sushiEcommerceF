import { getFilteredLinks } from "../../config/navLinks";
import GenericNavLink from "./GenericNavLink";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const NavLinks = ({ isMobile = false }) => {
    const { t } = useTranslation();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const links = getFilteredLinks(isAuthenticated)

    return (
        <nav className={`flex ${isMobile ? 'flex-col gap-4 p-4' : 'gap-8 text-lg'}`}>
            {links.map((link) => (
                <GenericNavLink
                    key={link.url}
                    url={link.url}
                    name={t(link.labelKey)}
                    activeClass="bg-gradient-to-t"
                    hoverClass="hover:bg-gradient-to-t"
                />
            ))
            }
        </nav>
    )
}

export default NavLinks;