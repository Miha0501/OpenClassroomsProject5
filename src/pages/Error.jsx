import '../sass/Error.scss'

const Error = () => {
    return (
        <div className="error-page">
            <p>404</p>
            <div className='error-container'>
                <div className="error-message">
                    <span>Oups! La page que </span><span>vous demandez n'existe pas.</span>
                    </div>
                <div className='go-homepage'>Retourner sur la page d’accueil</div>
            </div>
        </div>
    )
}

export default Error;