import logoKasa from '../assets/logo/logoKasa.png'

const Header = () => {
    return (
        <div className="header">
            <img src={logoKasa} alt="Logo du site Kasa"/>
            <nav>
                <ul>
                    <li>Accueil</li>
                    <li>A propos</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;