export const NAV_LINKS = [
    { url: '/', name: 'Home', auth: 'any' },
    { url: '/ourmenu', name: 'Our Menu', auth: 'any' },
    { url: '/profile', name: 'Profile', auth: 'auth' },
    { url: '/authentication', name: 'Authenticate', auth: 'guest' }
]

export const getFilteredLinks = (isAuthenticated)=>{
    return NAV_LINKS.filter(

        (link)=>
            link.auth === 'any' ||
        (link.auth === 'auth' && isAuthenticated) ||
        (link.auth === 'guest' && !isAuthenticated)
    );
}