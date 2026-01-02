import Logo from "./Logo";
import NavLinks from '../Navigation/NavLinks'
import { useState } from "react";
import BurgerButton from "./BurgerButton";
import ThemeToggle from './ThemeToggle';
import NotificationBell from "../Notification/NotificationBell";
import { useSelector } from "react-redux";
import CartButton from "./CartButton";

const Header = ({isCartOpen, setIsCartOpen}) => {
    const [isOpen, setIsOpen] = useState(false);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    const headerClasses = "bg-white dark:bg-[#0d0d0d] sticky top-0 z-50 transition-colors duration-300 shadow-md dark:shadow-none";

    const mobileMenuClasses = `md:hidden fixed right-0 top-16 w-64 z-[9999] transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 shadow-lg" : "max-h-0"} 
    bg-white dark:bg-[#0d0d0d]`;

    return (
        <header className={headerClasses}>
            <div className="max-w-6xl mx-auto h-16 flex items-center justify-between pr-1 pl-2">
                <Logo />
                <div className="hidden md:flex pr-4">
                    <NavLinks />
                    {isAuthenticated && <NotificationBell />}
                </div>
                <ThemeToggle size={24} />
                <CartButton setIsCartOpen={setIsCartOpen}/>
                <div className="md:hidden">
                    <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>
            </div >
            <div className={mobileMenuClasses}>
                <NavLinks isMobile />
                {isAuthenticated && <NotificationBell />}
            </div>
        </header>
    )
};

export default Header;