import '../sass/footer.scss';
import logoFooter from '../assets/logo/logoFooter.png';

const Footer = () => {
    return (
        <div className='footer'>
            <img src={logoFooter} alt="Logo du site Kasa en bas de page" />
            <p>
                <span>© 2020 Kasa. All</span> <span> rights reserved</span>
            </p>
        </div>
    )
}

export default Footer;