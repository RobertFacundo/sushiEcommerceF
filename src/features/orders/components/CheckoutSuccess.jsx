import { useSearchParams } from "react-router-dom";
import { useOrder } from "../hooks/useOrder";
import { motion } from 'framer-motion'
import { useCheckoutMotion } from "../hooks/useCheckoutMotion";

const CheckoutSuccess = () => {
    const motionConfig = useCheckoutMotion();
    const [params] = useSearchParams();
    const orderId = params.get("orderId");

    const { data, isLoading, isError } = useOrder(orderId);

    console.log(data, 'log del checkout success')

    if (isLoading) {
        return (
            <div className="space-y-1">
                <h1 className="text-xl font-semibold">Processing payment</h1>
                <p className="opacity-70">We are confirming the order!</p>
            </div>
        );
    }
    if (isError) {
        return <p className="text-red-500">Error loading the order</p>
    }
    if (data.status === 'pending') {
        return (
            <div className="space-y-2">
                <h1 className="text-xl font-semibold">Confirming payment</h1>
                <p className="opacity-70">This can take a few seconds...</p>
            </div>
        );
    }
    if (data.status === 'paid') {
        return (
            <motion.div
                {...motionConfig.page}
                className="space-y-4"
            >
                <h1 className="text-2xl font-bold text-green-600">Successfull payment!</h1>
                <p>Your order was successfully confirmed</p>
                <div className="text-sm opacity-70 space-y-1">
                    <p>Order ID: {orderId}</p>
                    <p>Total: ${data.pricing.total.toFixed(2)}</p>
                </div>
            </motion.div>
        );
    }

    return <p>Unkown state of order!</p>
};

export default CheckoutSuccess;