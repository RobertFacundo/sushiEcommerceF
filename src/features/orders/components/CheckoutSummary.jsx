import { useCart } from '../../cart/hooks/useCart';
import { calculateSubtotal } from '../../cart/utils/cartTotals';
import Loader from '../../../shared/components/app/Loader';

const CheckoutSummary = () => {
    const { t, i18n } = useTranslation();
    const { data: cart, isLoading } = useCart();

    if (isLoading) {
        return (
            <aside className="border p-5 rounded-xl dark:bg-black flex justify-center">
                <Loader className="text-neutral-500 dark:text-neutral-300" />
            </aside>
        );
    }
    if (!cart?.items?.length) return <p>{t('checkout.emptyCart')}</p>;

    const subtotal = calculateSubtotal(cart.items);
    const lang = i18n.language;

    return (
        <aside className='border p-5 rounded-xl dark:text-white space-y-4 dark:bg-black'>
            <h2 className='text-lg font-semibold'>
                {t('checkout.orderSummary')}
            </h2>
            <ul className='space-y-3'>
                {cart.items.map(item => (
                    <li key={item.productId._id} className='flex justify-between'>
                        <span>
                            {item.productId.name[lang]} * {item.quantity}
                        </span>
                        <span>
                            ${(item.productId.price * item.quantity).toFixed(2)}
                        </span>
                    </li>
                ))}
            </ul>

            <div className='border-t dark:border-neutral-700 pt-4 flex justify-between font-semibold'>
                <span>{t('checkout.subtotal')}</span>
                <span>${subtotal.toFixed(2)}</span>
            </div>
        </aside>
    )
};

export default CheckoutSummary;