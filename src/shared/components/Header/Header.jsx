import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { useState } from "react";
import BurgerButton from "./BurgerButton";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className="bg-[#0d0d0d] sticky top-0 z-50">
            <div className="max-w-6xl mx-auto h-16 flex items-center justify-between pr-1 pl-2">
                <Logo />
                <div className="hidden md:flex pr-4">
                    <NavLinks />
                </div>
                <div className="md:hidden">
                    <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>
            </div >
            <div className={`md:hidden fixed right-0 top-16 w-64 z-[9999] bg-[#0d0d0d] transition-all duration-1500 overflow-hidden ${isOpen ? "max-h-96" : "max-h-0"}`}>
                <NavLinks isMobile />
            </div>
        </header>
    )
};

export default Header;