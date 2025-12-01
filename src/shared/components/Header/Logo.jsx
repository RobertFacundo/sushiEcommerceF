import logoImage from '/sushi.png'
import { useNavigate } from 'react-router-dom';

const Logo = () => {
    const navigate = useNavigate();
    return (
        <div className="flex items-center gap-2 text-4xl cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-13 h-13 rounded-full bg-white flex items-center justify-center overflow-hidden">
                <img src={logoImage} alt="Sushi Logo" className="w-10 h-10 object-cover" />
            </div>
            <p className='text-white tracking-tighter'>すし</p>
        </div>
    )
}

export default Logo;