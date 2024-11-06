import Banner from '../Banner'
import homeImage from '../../assets/banner-images/image-banner-accueil.png'

const Home = () => {
    return (
        <div className="home-page">
            <Banner
                image={homeImage}
                part1="Chez vous,"
                part2=" partout et ailleurs"
            />
        </div>
    )
}

export default Home;