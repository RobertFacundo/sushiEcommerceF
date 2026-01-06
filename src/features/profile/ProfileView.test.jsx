import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';


vi.mock('@tanstack/react-query', () => ({
    useQuery: vi.fn()
}))

vi.mock('./services/profileServices', () => ({
    getProfile: vi.fn(),
}))

vi.mock('./hooks/useProfile', () => ({
     useProfile: vi.fn()
}));

vi.mock('./hooks/useProfileAnimation', () => ({
    useProfileAnimation: () => ({
        containerRef: { current: null },
        leftRef: { current: null },
        rightRef: { current: null },
        giftCardRef: { current: null },
        sectionsRef: { current: null }
    })
}));

vi.mock('./components/leftColumn', () => ({
    default: ({ profile, giftCardRef }) => (
        <div data-testid='left-column'>
            {JSON.stringify(profile)} - giftCardRef:{giftCardRef?.current}
        </div>
    )
}));

vi.mock('./components/RightColumn', () => ({
    default: ({ sectionsRef }) => (
        <div data-testid='right-column'>sectionsRef:{sectionsRef?.current}</div>
    )
}));


vi.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key) => key })
}));

import ProfileView from './ProfileView';
import { useProfile } from './hooks/useProfile';

const renderProfileView = () => render(<ProfileView />);

describe('ProfileView', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    })

    it('renders loading state', () => {
        useProfile.mockReturnValue({
            data: null,
            isLoading: true,
            isError: false
        });

        renderProfileView();
        expect(screen.getByText('profile.loading')).toBeInTheDocument();
    });

    it('renders error state', () => {
        useProfile.mockReturnValue({
            data: null,
            isLoading: false,
            isError: true
        });

        renderProfileView();
        expect(screen.getByText('profile.error')).toBeInTheDocument();
    });

    it('renders left and right columns when data is loaded', () => {
        const mockProfile = { name: 'Facundo', email: 'facundo@example' };
        useProfile.mockReturnValue({
            data: mockProfile,
            isLoading: false,
            isError: false
        })

        renderProfileView();

        const leftColumn = screen.getByTestId('left-column');
        expect(leftColumn).toBeInTheDocument();
        expect(leftColumn).toHaveTextContent(JSON.stringify(mockProfile));

        const rightColumn = screen.getByTestId('right-column');
        expect(rightColumn).toBeInTheDocument();
    })
})