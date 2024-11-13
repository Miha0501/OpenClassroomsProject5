import logoKasa from '../assets/logo/logoKasa.png';
import '../sass/header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <img src={logoKasa} alt="Logo du site Kasa"/>
            <nav>
                <ul>
                    <NavLink to="/">
                    <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/about">
                    <li>A propos</li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default Header;