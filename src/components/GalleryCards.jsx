import '/src/sass/thumbCard.scss';
import '../data/cards.json';
import { Link } from 'react-router-dom';

const GalleryCards = ({cards}) => {
    return (
        cards.map((card) => (
            <Link to={`/card/${card.id}`} className="thumb" key={card.id}>
                <img src={card.cover} alt={card.title} />
                <h3>{card.title}</h3>
            </Link>
        ))
    );
}

// créer une card pour chaque logement selon son id

export default GalleryCards;