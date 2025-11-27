export const NAV_LINKS = [
    { url: '/', name: 'Home', auth: 'any' },
    { url: '/OurMenu', name: 'Our Menu', auth: 'any' },
    { url: '/Profile', name: 'Profile', auth: 'auth' },
    { url: '/Log In', name: 'Log In', auth: 'guest' }
]

export const getFilteredLinks = (isAuthenticated)=>{
    return NAV_LINKS.filter(

        (link)=>
            link.auth === 'any' ||
        (link.auth === 'auth' && isAuthenticated) ||
        (link.auth === 'guest' && !isAuthenticated)
    );
}