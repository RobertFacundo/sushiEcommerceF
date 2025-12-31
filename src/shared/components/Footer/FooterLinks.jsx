import { Link } from "react-router-dom";

const FooterLinks = () => (
    <nav>
        <h4 className="text-lg font-medium mb-4">Navegación</h4>
        <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/OurMenu" className="hover:underline">Menú</Link></li>
            <li><Link to="/Profile" className="hover:underline">Perfil</Link></li>
        </ul>
    </nav>
);

export default FooterLinks;