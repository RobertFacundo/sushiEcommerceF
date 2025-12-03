import { NavLink } from "react-router-dom"

const GenericNavLink = ({ url, name, hoverClass, activeClass }) => {
    const baseClasses = "font-medium transition-all duration-800";
    const hoverClasses = hoverClass
        ? `text-black dark:text-white
           hover:text-transparent 
           hover:bg-clip-text 
           ${hoverClass} 
           hover:from-red-400 
           hover:to-black dark:hover:to-white`
        : "text-black dark:text-white";
    const activeClasses = activeClass
        ? `text-transparent 
           bg-clip-text 
           ${activeClass} 
           from-red-400 
           to-black dark:to-white`
        : 'text-black dark:text-white';

    return (
        <NavLink to={url}
            className={({ isActive }) =>
                `${baseClasses} ${isActive
                    ? activeClasses
                    : hoverClasses
                }`
            }
        >
            {name}
        </NavLink>
    )
}

export default GenericNavLink;