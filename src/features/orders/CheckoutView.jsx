import { Outlet } from "react-router-dom";
import CheckoutImage from "./components/CheckoutImage";

const CheckoutView = () => {
    return (
        <section className="min-h-[calc(100vh-4rem)] grid grid-cols-1 md:grid-cols-3 dark:bg-neutral-900">
            <div className="md:col-span-2 flex justify-center px-6 py-10">
                <div className="w-full max-w-3xl space-y-8">
                    <Outlet />
                </div>
            </div>
            <div className="hidden md:block">
                <CheckoutImage />
            </div>
        </section>
    )
};

export default CheckoutView;