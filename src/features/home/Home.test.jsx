import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import HomeView from './Home';
import { store } from '../../shared/redux/store';
import { vi } from 'vitest';

vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key) => key,
    }),
}));

vi.mock('./hooks/useHeroBannerAnimations', () => ({
    useHeroBannerAnimation: () => { },
}))

describe("HomeView", () => {
    it("renders hero banners correctly", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <HomeView />
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getAllByRole('heading').length).toBeGreaterThan(0);
    })
})