import Banner from '../components/Banner';
import homeImage from '../assets/banner-images/image-banner-accueil.png';
import GalleryCards from '../components/GalleryCards';
import Card from "../components/Banner";
import cards from '../data/cards.json';
import '../sass/home.scss';

const Home = () => {
    return (
        <div className="home-page">
            <div className="banner-container">
                <Banner
                    image={homeImage} alt="Photo avec la mer et ses rochers"
                    part1="Chez vous,"
                    part2=" partout et ailleurs"
                />
            </div>
            <div className="gallery">
                <GalleryCards cards={cards} />
                <Card/>
            </div>
        </div>
    )
}

export default Home;