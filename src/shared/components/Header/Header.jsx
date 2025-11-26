import Logo from "./Logo";
import NavLinks from "./NavLinks";


const Header = () => {
    return (
        <header className="bg-[#0d0d0d] sticky top-0 z-50 shadow-lg">
            <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4">
                <Logo />
                <NavLinks />
            </div>
        </header>
    )
};

export default Header;