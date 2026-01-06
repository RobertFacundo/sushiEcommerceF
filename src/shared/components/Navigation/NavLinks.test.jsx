import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import NavLinks from './NavLinks';
import { getFilteredLinks } from '../../config/navLinks';

vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key) => key,
    }),
}))

vi.mock('../../config/navLinks', () => ({
    getFilteredLinks: vi.fn(),
}))

vi.mock('./GenericNavLink', () => ({
    default: ({ url, name }) => (
        <a data-testid='nav-link' href={url}>
            {name}
        </a>
    ),
}))

const renderNavLinks = ({ isAuthenticated = false, isMobile = false } = {}) => {
    const store = configureStore({
        reducer: {
            auth: () => ({ isAuthenticated }),
        },
    })

    render(
        <Provider store={store}>
            <NavLinks isMobile={isMobile} />
        </Provider>
    )
}

describe('NavLinks', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it('renders links returned by getFilteredLinks', () => {
        getFilteredLinks.mockReturnValue([
            { url: '/home', labelKey: 'nav.home' },
            { url: '/login', labelKey: 'nav.login' },
        ])

        renderNavLinks({ isAuthenticated: false });

        const links = screen.getAllByTestId('nav-link');
        expect(links).toHaveLength(2);
        expect(links[0]).toHaveAttribute('href', '/home')
        expect(links[1]).toHaveTextContent('nav.login')
    })

    it('calls getFilteredLinks with auth state', () => {
        getFilteredLinks.mockReturnValue([])
        renderNavLinks({ isAuthenticated: true })

        expect(getFilteredLinks).toHaveBeenCalledWith(true);
    })

    it('applies mobile layout when isMobile is true', ()=>{
        getFilteredLinks.mockReturnValue([])

        renderNavLinks({isMobile: true})
        const nav = screen.getByRole('navigation')
        expect(nav.className).toContain('flex-col')
    })

    it('applies desktop layout when isMobile is false', ()=>{
        getFilteredLinks.mockReturnValue([])

        renderNavLinks({isMobile: false})

        const nav = screen.getByRole('navigation')
        expect(nav.className).toContain('gap-8')
    })
})