import { useParams } from 'react-router-dom';
import cards from '../data/cards.json';
import Carrousel from './Carrousel';
import '../sass/card.scss';

const findCardId = (id) => {
    return cards.find((card) => card.id === id)
}
const Card = () => {
    const { id } = useParams();
    const card = findCardId(id);

    return (
    <div className="card-page">
            <Carrousel images={card.pictures}/>
    </div>
    );
};

export default Card;