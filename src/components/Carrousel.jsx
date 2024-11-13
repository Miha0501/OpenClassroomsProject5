import { useState } from 'react';
import data from '../data/cards.json';
import '../sass/carrousel.scss';

function Carrousel({images}) {
  const [activePicture, setActivePicture] = useState(0);

  // Fonction pour afficher l'image suivante
  const nextSlide = () => {
    setActivePicture((currentPicture) =>
      currentPicture === images.length - 1 ? 0 : currentPicture + 1
    );
  };

  // Fonction pour afficher l'image précédente
  const prevSlide = () => {
    setActivePicture((currentPicture) =>
      currentPicture === 0 ? images.length - 1 : currentPicture - 1
    );
  };

  // Affichage du carrousel
  return (
    <div className="carrousel">
      {images.length > 0 && (
        <>
          <img src={images[activePicture]} alt={`Image ${activePicture + 1}`} className="carrousel__image"/>
          <button className="carrousel__button carrousel__button--prev" onClick={prevSlide}>
            &lt;
          </button>
          <button className="carrousel__button carrousel__button--next" onClick={nextSlide}>
            &gt;
          </button>
        </>
      )}
    </div>
  );
}

export default Carrousel;