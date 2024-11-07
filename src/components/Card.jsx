import { useParams } from "react-router-dom"
import cards from "../data/cards.json"

const findCardId = (id) => {
    console.log("Searching for card with id:", id);
    return cards.find((card) => card.id === id)
}
const Card = () => {
    const { id } = useParams();
    const card = findCardId(id);

    return (
    <div className="card">
        <h4>Voici le card avec id {id}</h4>
    </div>
    );
};

export default Card