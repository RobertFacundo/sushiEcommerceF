import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import OurMenu from './ourMenuView';

vi.mock('./components/List.jsx', () => ({
    default: ({ mode, selectedCategory, onSelectCategory }) => (
        <div data-testid='list'>
            <span>mode:{mode}</span>
            <span>selected: {selectedCategory}</span>
            <button data-testid='select-category' onClick={() => onSelectCategory('pizza')}>
                Select pizza
            </button>
        </div>
    ),
}));

vi.mock('./components/Breadcrumb.jsx', () => ({
    default: ({ selectedCategory, onResetCategory }) => (
        <div data-testid='breadcrumb'>
            <span>selected:{selectedCategory}</span>
            <button data-testid='reset-category' onClick={onResetCategory}>
                Reset
            </button>
        </div>
    ),
}));

vi.mock('../cart/components/Cart.jsx', () => ({
    default: () => <div data-testid='cart' />
}))

vi.mock('../cart/hooks/useCartAnimation.js', () => ({
    useCartAnimation: () => ({
        variants: {
            hidden: {},
            visible: {},
            exit: {},
        }
    })
}));

const renderOurMenu = (props = {}) => {
    render(<OurMenu {...props} />)
};

describe('OurMenu', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders List in categories mode initially', () => {
        renderOurMenu({ isCartOpen: false });

        const list = screen.getByTestId('list');
        const listWithin = within(list);

        expect(list).toBeInTheDocument();
        expect(listWithin.getByText(/mode:categories/i)).toBeInTheDocument();
        expect(listWithin.getByText(/^selected:\s*$/i)).toBeInTheDocument();
    });

    it('changes to products mode when a categoryis selected', async () => {
        const user = userEvent.setup();

        renderOurMenu({ isCartOpen: false });

        await user.click(screen.getByTestId('select-category'));

        expect(screen.getByText(/mode:products/i)).toBeInTheDocument();
        expect(screen.getByText(/selected:pizza/i)).toBeInTheDocument();
    });

    it('resets to categories mode when breadcrumb reset is clicked', async () => {
        const user = userEvent.setup();
        renderOurMenu({ isCartOpen: false });

        const list = screen.getByTestId('list')
        const listWithin = within(list);

        await user.click(screen.getByTestId('select-category'));
        expect(listWithin.getByText(/mode:products/i)).toBeInTheDocument();

        await user.click(screen.getByTestId('reset-category'));
        expect(listWithin.getByText(/mode:categories/i)).toBeInTheDocument();
        expect(listWithin.getByText(/^selected:\s*$/i)).toBeInTheDocument();
    });

    it('renders Cart in desktop (lg) layout always', () => {
        renderOurMenu({ isCartOpen: false });

        expect(screen.getByTestId('cart')).toBeInTheDocument();
    });

    it('does not render mobile Cart when isCartOpenis false', () => {
        renderOurMenu({ isCartOpen: false });

        const cartDivs = screen.getAllByTestId('cart');
        expect(cartDivs.length).toBe(1);
    });

    it('renders mobile cart when isCartOpen is true', () => {
        renderOurMenu({ isCartOpen: true });

        const cartDivs = screen.getAllByTestId('cart');
        expect(cartDivs.length).toBe(2);
    })
})