import Banner from '../components/Banner';
import homeImage from '../assets/banner-images/image-banner-accueil.png';
import GalleryAccommodations from '../components/GalleryAccommodations';
import Accommodation from "../components/Banner";
import accommodations from '../data/accommodations.json';
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
                <GalleryAccommodations accommodations={accommodations} />
                <Accommodation/>
            </div>
        </div>
    )
}

export default Home;