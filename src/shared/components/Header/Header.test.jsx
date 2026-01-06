import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { it, vi } from 'vitest';
import Header from './Header';

vi.mock('./Logo', () => ({
    default: () => <div data-testid='logo' />
}))
vi.mock('../Navigation/NavLinks', () => ({
    default: () => <nav data-testid='nav-links' />
}))
vi.mock('./BurgerButton', () => ({
    default: () => <button />
}))
vi.mock('./ThemeToggle', () => ({
    default: () => <button />
}));
vi.mock('../Notification/NotificationBell', () => ({
    default: () => <div data-testid='notification-bell' />
}));
vi.mock('./CartButton', () => ({
    default: () => <button data-testid='cart-button' />
}));
vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key) => key,
        i18n: {
            changeLanguage: vi.fn()
        }
    })
}))

const renderHeader = ({ isAuthenticated = false, route = '/' } = {}) => {
    const store = configureStore({
        reducer: {
            auth: () => ({ isAuthenticated }),
        },
    })

    render(
        <Provider store={store}>
            <MemoryRouter initialEntries={[route]}>
                <Header setIsCartOpen={vi.fn()} />
            </MemoryRouter>
        </Provider>
    )
}

describe('Header', () => {
    it('renders logo & navigation links', () => {
        renderHeader()

        expect(screen.getByTestId('logo')).toBeInTheDocument()

        const navLinks = screen.getAllByTestId('nav-links')
        expect(navLinks.length).toBeGreaterThan(0)
    })

    it('it does not render notification bell when user is not authenticated', () => {
        renderHeader({ isAuthenticated: false })

        expect(
            screen.queryByTestId('notification-bell')
        ).not.toBeInTheDocument()
    })

    it('renders notification bell whe user is authenticated', () => {
        renderHeader({ isAuthenticated: true })

        const bells = screen.getAllByTestId('notification-bell')
        expect(bells.length).toBeGreaterThan(0)
    })

    it('does not render cart button outside /ourmenu route', () => {
        renderHeader({ route: '/' })

        expect(
            screen.queryByTestId('cart-button')
        ).not.toBeInTheDocument()
    })

    it('renders cart button on /ourmenu route', () => {
        renderHeader({ route: '/ourmenu' })

        expect(
            screen.getByTestId('cart-button')
        ).toBeInTheDocument()
    })
})