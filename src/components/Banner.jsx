import '../sass/banner.scss';

const Banner = ({ image, part1, part2 }) => {
    return (
        <div className={`banner ${part1, part2 ? 'with-title' : ''}`} style={{ backgroundImage: `url(${image})` }}>
            <h2 className="banner-title">
                <span>{part1}</span>
                <span>{part2}</span>
            </h2>
        </div>
    );
};

export default Banner;
// composant unique stylisé selon la classe 'with-title' pour la page home et about