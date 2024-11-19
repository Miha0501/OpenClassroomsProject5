import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import accommodations from '../data/accommodations.json';
import Carrousel from '../components/Carrousel';
import Tags from '../components/Tags';
import Collapse from '../components/Collapse';
import '../sass/accommodation.scss';
import StarRating from '../components/StarRating';

const Accommodation = () => {
    // extraction de l'id de l'URL, identification du logement cliqué par l'utilisateur et gestion des erreurs
    const { id } = useParams();
    const accommodation = accommodations.find((accommodation) => accommodation.id === id);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!accommodation) {
            navigate('/error');
        }
    }, [accommodation, navigate]);

    if (!accommodation) {
        return null;
    }

    return (
        <div className="accommodation-page">
            <Carrousel images={accommodation.pictures} />
            <div className="accommodation-header">
                <div className="accommodation-title-tags">
                    <div className="accommodation-title">
                        <h1>{accommodation.title}</h1>
                        <h2>{accommodation.location}</h2>
                    </div>
                    <Tags accommodation={accommodation} />
                </div>
                <div className="host-and-rating">
                    <div className="host">
                        <div className="host-name">
                            <span className="first-name">{accommodation.host.name.split(' ')[0]}</span>
                            <span className="last-name">{accommodation.host.name.split(' ')[1]}</span>
                        </div>
                        <div className="host-picture">
                            <img src={accommodation.host.picture} alt={accommodation.host.name} />
                        </div>
                    </div>
                    <StarRating accommodation={accommodation} />
                </div>
            </div>
            <div className="accommodation-collapse">
                <Collapse title="Description"><p>{accommodation.description}</p></Collapse>
                <Collapse title="Equipements"><ul className="accommodation-equipments">
                    {accommodation.equipments.map((equipment, index) => (<li key={index}>{equipment}</li>))}
                </ul></Collapse>
            </div>
        </div>
    );
};

export default Accommodation;