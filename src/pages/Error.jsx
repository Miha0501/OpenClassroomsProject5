import '../sass/error.scss';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="error-page">
            <p>404</p>
            <div className='error-container'>
                <div className="error-message">
                    <span>Oups! La page que </span><span>vous demandez n'existe pas.</span>
                    </div>
                <Link to='/' className='go-homepage'>Retourner sur la page d’accueil</Link>
            </div>
        </div>
    )
}

export default Error;