import { NavLink } from "react-router-dom";

const NavLinks = () => {
    const isAuthenticated = true;
    const linkClasses =
        "text-white text-lg font-medium hover:text-red-400 transition-colors";

    return (
        <nav className="flex gap-8">
            <NavLink to="/" className={linkClasses}>
                Home
            </NavLink>

            <NavLink to="/OurMenu" className={linkClasses}>
                Our Menu
            </NavLink>

            {isAuthenticated ? (
                <NavLink to="/profile" className={linkClasses}>
                    Profile
                </NavLink>
            ) : (
                <NavLink to="/login" className={linkClasses}>
                    Log In
                </NavLink>
            )}
        </nav>
    )
}

export default NavLinks