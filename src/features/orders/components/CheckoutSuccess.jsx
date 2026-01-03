import { useSearchParams } from "react-router-dom";
import { useOrder } from "../hooks/useOrder";
import { motion } from 'framer-motion'
import { useCheckoutMotion } from "../hooks/useCheckoutMotion";
import { useTranslation } from "react-i18next";

const CheckoutSuccess = () => {
    const { t } = useTranslation();
    const motionConfig = useCheckoutMotion();
    const [params] = useSearchParams();
    const orderId = params.get("orderId");

    const { data, isLoading, isError } = useOrder(orderId);

    console.log(data, 'log del checkout success')

    if (isLoading) {
        return (
            <div className="space-y-1">
                <h1 className="text-xl font-semibold">{t('checkout.processingTitle')}</h1>
                <p className="opacity-70">{t('checkout.processingDesc')}</p>
            </div>
        );
    }
    if (isError) {
        return <p className="text-red-500">{t('checkout.error')}</p>
    }
    if (data.status === 'pending') {
        return (
            <div className="space-y-2">
                <h1 className="text-xl font-semibold">{t('checkout.confirmingTitle')}</h1>
                <p className="opacity-70">{t('checkout.confirmingDesc')}</p>
            </div>
        );
    }
    if (data.status === 'paid') {
        return (
            <motion.div
                {...motionConfig.page}
                className="space-y-4"
            >
                <h1 className="text-2xl font-bold text-green-600">{t('checkout.successTitle')}</h1>
                <p className="dark:text-white">{t('checkout.successDesc')}</p>
                <div className="text-sm opacity-70 space-y-1">
                    <p>{t('checkout.orderId')}: {orderId}</p>
                    <p>Total: ${data.pricing.total.toFixed(2)}</p>
                </div>
            </motion.div>
        );
    }

    return <p>{t('checkout.unkown')}</p>
};

export default CheckoutSuccess;