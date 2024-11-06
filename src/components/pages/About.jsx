import Banner from '../Banner'
import aboutImage from '../../assets/banner-images/image-banner-about.png';

const About = () => {
    return (
        <div className='about-page'>
            <Banner image={aboutImage} />
        </div>
    );
};

export default About;