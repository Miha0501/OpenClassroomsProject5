import '/src/sass/thumb.scss'
import { Link } from 'react-router-dom';

const AllCards = ({ cards }) => {
    return (
        cards.map((card) => (
            <Link to={'/card/${card.id}'} className="thumb" key={card.id}>
                <img src={card.cover} alt={card.title} />
                <h3>{card.title}</h3>
            </Link>
        ))
    );
}


export default AllCards;