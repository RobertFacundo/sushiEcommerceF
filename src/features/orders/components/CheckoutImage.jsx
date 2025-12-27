import checkoutImageLight from '/checkOutBGLight.jpg';
import checkoutImageDark from '/checkOutBG.jpg';
import { useSelector } from 'react-redux';

const CheckoutImage = () => {
    const currentTheme = useSelector(state => state.theme.currentTheme);

    const imageSrc =
        currentTheme === 'dark'
            ? checkoutImageDark
            : checkoutImageLight;

    return (
        <div className="h-[calc(100vh-4rem)] w-full overflow-hidden">
            <img src={imageSrc} alt="Checkout Background" className='w-full h-full object-cover' />
        </div>
    )
};

export default CheckoutImage;