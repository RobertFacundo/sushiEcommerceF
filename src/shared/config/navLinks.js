export const NAV_LINKS = [
    { url: '/', labelKey: 'nav.home', auth: 'any' },
    { url: '/ourmenu', labelKey: 'nav.menu', auth: 'any' },
    { url: '/profile', labelKey: 'nav.profile', auth: 'auth' },
    { url: '/authentication', labelKey: 'nav.auth', auth: 'guest' }
]

export const getFilteredLinks = (isAuthenticated)=>{
    return NAV_LINKS.filter(

        (link)=>
            link.auth === 'any' ||
        (link.auth === 'auth' && isAuthenticated) ||
        (link.auth === 'guest' && !isAuthenticated)
    );
}