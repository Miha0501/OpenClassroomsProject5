import '/src/sass/thumbAccommodation.scss';
import '../data/accommodations.json';
import { Link } from 'react-router-dom';

const GalleryAccommodations = ({accommodations}) => {
    return (
        accommodations.map((accommodation) => (
            <Link to={`/accommodation/${accommodation.id}`} className="thumb" key={accommodation.id}>
                <img src={accommodation.cover} alt={accommodation.title} />
                <h3>{accommodation.title}</h3>
            </Link>
        ))
    );
}
// création de chaque logement selon son id

export default GalleryAccommodations;