import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import cards from '../data/cards.json';
import Carrousel from '../components/Carrousel';
import Tags from '../components/Tags'
import Collapse from '../components/Collapse';
import '../sass/card.scss';
import StarRating from '../components/StarRating';

const Card = () => {
    // extraction de l'id de l'URL, identification du logement cliqué par l'utilisateur et gestion des erreurs
    const { id } = useParams();
    const card = cards.find((card) => card.id === id);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!card) {
            navigate('/error');
        }
    }, [card, navigate]);

    if (!card) {
        return null;
    }

    return (
        <div className="card-page">
            <Carrousel images={card.pictures} />
            <div className="card-header">
                <div className="card-title-tags">
                    <div className="card-title">
                        <h1>{card.title}</h1>
                        <h2>{card.location}</h2>
                    </div>
                    <Tags card={card} />
                </div>
                <div className="host-and-rating">
                    <div className="host">
                        <div className="host-name">
                            <span className="first-name">{card.host.name.split(' ')[0]}</span>
                            <span className="last-name">{card.host.name.split(' ')[1]}</span>
                        </div>
                        <div className="host-picture">
                            <img src={card.host.picture} alt={card.host.name} />
                        </div>
                    </div>
                    <StarRating card={card} />
                </div>
            </div>
            <div className="card-collapse">
                <Collapse title="Description"><p>{card.description}</p></Collapse>
                <Collapse title="Equipments"><ul className="card-equipments">
                    {card.equipments.map((equipment, index) => (<li key={index}>{equipment}</li>))}
                </ul></Collapse>
            </div>
        </div>
    );
};

export default Card;