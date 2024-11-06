import Banner from '../Banner';
import homeImage from '../../assets/banner-images/image-banner-accueil.png';
import AllCards from '../AllCards';
import cards from '../../data/cards.json';
import '../../sass/home.scss'

const Home = () => {
    return (
        <div className="home-page">
            <div className="banner-container">
                <Banner
                    image={homeImage}
                    part1="Chez vous,"
                    part2=" partout et ailleurs"
                />
            </div>
            <div className="gallery">
                <AllCards cards={cards} />
            </div>
        </div>
    )
}

export default Home;