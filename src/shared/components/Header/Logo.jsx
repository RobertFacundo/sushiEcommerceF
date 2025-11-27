import GenericNavLink from "./GenericNavLink";
import logoImage from '/sushi.png'

const Logo = () => {
    return (
        <div className="flex items-center gap-2 text-4xl tracking-tight">
            <div className="w-13 h-13 rounded-full bg-white flex items-center justify-center overflow-hidden">
                <img src={logoImage} alt="Sushi Logo" className="w-10 h-10 object-cover" />
            </div>
            <GenericNavLink
                url='/'
                name='すし'
                activeClass=""
                hoverClass=""
                extraClasses=""
            />
        </div>
    )
}

export default Logo;