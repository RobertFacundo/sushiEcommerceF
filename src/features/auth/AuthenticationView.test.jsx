import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import AuthenticationView from './AuthenticationView';
import { useAuthForm } from './hooks/useAuthForm';
import { useAuthAnimation } from './hooks/useAuthAnimation';

vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key) => key,
    }),
}))

vi.mock('./hooks/useAuthForm', () => ({
    useAuthForm: vi.fn(),
}))

vi.mock('./hooks/useAuthAnimation', () => ({
    useAuthAnimation: () => ({
        containerRef: { current: null },
        cardRef: { current: null },
        formRef: { current: null },
    }),
}))

vi.mock('./components/FormInput', () => ({
    default: ({ name }) => (
        <div data-testid={`input-${name}`} />
    ),
}))

vi.mock('../../shared/components/Buttons/FormButton', () => ({
    default: ({ children, loading }) => (
        <button disabled={loading}>{children}</button>
    ),
}))

vi.mock('../../shared/components/Buttons/GradientTextButton', () => ({
    default: ({ children, onClick }) => (
        <button onClick={onClick}>{children}</button>
    )
}))

vi.mock('../../shared/components/Titles/StyledTitle', () => ({
    default: ({ children }) => <h1>{children}</h1>
}))

const mockUseAuthForm = ({
    loading = false,
    error = null,
} = {}) => {
    useAuthForm.mockReturnValue({
        register: vi.fn(),
        handleSubmit: (fn) => fn,
        onSubmit: vi.fn(),
        errors: {},
        loading,
        error
    })
}

describe('Authentication View', () => {
    beforeEach(() => {
        vi.clearAllMocks()
        mockUseAuthForm()
    })

    it('renders login view by default', () => {
        render(<AuthenticationView />)

        expect(
            screen.getAllByText('authentication.login').length
        ).toBeGreaterThan(0)
    })

    it('renders register view when initialTypeis register ', () => {
        render(<AuthenticationView initialType='register' />)

        expect(screen.getByRole('heading', { name: 'authentication.register' }))
        expect(screen.getByRole('button', { name: 'authentication.register' }))
    })

    it('renders correct inputs for login', () => {
        render(<AuthenticationView initialType='login' />)

        expect(screen.getByTestId('input-email')).toBeInTheDocument()
        expect(screen.getByTestId('input-password')).toBeInTheDocument()
        expect(screen.queryByTestId('input-name')).not.toBeInTheDocument()
        expect(screen.queryByTestId('input-confirmPassword')).not.toBeInTheDocument()
    })

    it('renders correct inputs for register', () => {
        render(<AuthenticationView initialType='register' />)

        expect(screen.getByTestId('input-name')).toBeInTheDocument()
        expect(screen.getByTestId('input-email')).toBeInTheDocument()
        expect(screen.getByTestId('input-password')).toBeInTheDocument()
        expect(screen.getByTestId('input-confirmPassword')).toBeInTheDocument()
    })

    it('switches from login to register when clicking switch button', async () => {
        const user = userEvent.setup()

        render(<AuthenticationView initialType='login' />)

        const switchButton = screen.getByRole('button', {
            name: 'authentication.register'
        })

        await user.click(switchButton)

        expect(screen.getByRole('heading', { name: 'authentication.register' })).toBeInTheDocument()
    })

    it('switches from register to login when clicking switch button', async () => {
        const user = userEvent.setup()

        render(<AuthenticationView initialType='register' />)

        const switchButton = screen.getByRole('button', {
            name: 'authentication.login'
        })

        await user.click(switchButton)

        expect(screen.getByRole('heading', { name: 'authentication.login' })).toBeInTheDocument()
    })

    it('shows authentication error messagewhen error exists', () => {
        mockUseAuthForm({ error: true })

        render(<AuthenticationView />)

        expect(screen.getByText('authentication.error'))
    })

    it('disables submit button when loading is true', () => {
        mockUseAuthForm({ loading: true })

        render(<AuthenticationView />)

        const button = screen.getByRole('button', {
            name: 'authentication.login',
        })

        expect(button).toBeDisabled()
    })
})