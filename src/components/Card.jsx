import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import cards from '../data/cards.json';
import Carrousel from './Carrousel';
import '../sass/card.scss';
import Collapse from './Collapse';

const findCardId = (id) => {
    return cards.find((card) => card.id === id)

}
const Card = () => {
    const { id } = useParams();
    const navigate=useNavigate();
    const card = findCardId(id);

    useEffect(() => {
    if(!card) {
        navigate('');
    }
    });

    return (
        <div className="card-page">
            <Carrousel images={card.pictures} />
            <div className="card-header">
                <div className="card-title-tags">
                    <div className="card-title">
                        <h1>{card.title}</h1>
                        <h2>{card.location}</h2>
                    </div>
                    <div className="tags">
                        {card.tags.map((tag) => (
                            <div key={`${card.id}-${tag}`} className="tag">
                                {tag}
                            </div>
                        ))}
                    </div>
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
                    <div className="star-rating">
                        {Array.from({ length: 5 }, (_, index) => (
                            <span key={index} className={index < card.rating ? 'star-filled' : 'star-empty'}>
                                {index < card.rating ? '★' : '☆'}
                            </span>
                        ))}
                    </div>
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