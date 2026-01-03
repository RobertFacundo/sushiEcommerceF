import { useState } from "react";
import { useCreateCheckoutSession } from "../hooks/useCreateCheckoutSession";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useCart } from "../../cart/hooks/useCart";
import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";

const CheckoutForm = () => {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [giftCardCode, setGiftCardCode] = useState('');

    const { mutate, isPending } = useCreateCheckoutSession();
    const { data: cart } = useCart()

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const handlePay = () => {
        if (!cart.cartId) {
            console.error('Cart not found');
            return;
        }

        mutate(
            {
                customerEmail: email,
                giftCardCode: giftCardCode || null,
                cartId: cart.cartId
            },
            {
                onSuccess: async ({ checkoutUrl }) => {
                    console.log(checkoutUrl, 'checkout url!')
                    if (!checkoutUrl) {
                        console.error('no checkouturl returned');
                        return;
                    }
                    window.location.href = checkoutUrl;
                }
            },
        );
    };

    return (
        <div className="space-y-6 dark:text-white text-black">
            <h2 className="text-lg font-semibold ">Checkout</h2>
            <div className="space-y-4 ">
                <input
                    type="email"
                    placeholder={t('checkout.emailPlaceholder')}
                    className="w-full p-3 rounded-lg dark:bg-neutral-800 border"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {isAuthenticated ? (
                    <input
                        type="text"
                        placeholder={t('checkout.giftCardPlaceholder')}
                        className="w-full p-3 rounded-lg dark:bg-neutral-800 border"
                        value={giftCardCode}
                        onChange={(e) => setGiftCardCode(e.target.value)}
                    />) : (
                    <p className="text-sm text-gray-400">
                        {t('checkout.loginHint')}{' '}
                        <Link to='/authentication' className="text-red-500 underline">{t('checkout.loginLink')}</Link>
                    </p>
                )}
            </div>
            <motion.button
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.02 }}
                onClick={handlePay}
                disabled={isPending || !email || !cart?.cartId}
                className="w-full py-3 bg-red-500 hover:bg-red-600 rounded-lg font-semibold text-white cursor-pointer"
            >
                {isPending ? 'Redirecting...' : 'Pay with Stripe'}
            </motion.button>

            <p>
                {t('checkout.stripeHint')}
            </p>
        </div>
    )
};

export default CheckoutForm;