import { useState } from 'react';
import '../sass/carrousel.scss';

function Carrousel({ images }) {
  const [activePicture, setActivePicture] = useState(0);

  // Affichage de l'image suivante
  const nextSlide = () => {
    setActivePicture((activePicture) =>
      activePicture === images.length - 1 ? 0 : activePicture + 1
    );
  };

  // Affichage l'image précédente
  const prevSlide = () => {
    setActivePicture((activePicture) =>
      activePicture === 0 ? images.length - 1 : activePicture - 1
    );
  };

  // Affichage du carrousel
  return (
    <div className="carrousel">
      {images.length > 0 && (
        <>
          <img src={images[activePicture]} alt={`Image ${activePicture + 1}`} className="carrousel-image" />
          {images.length > 1 && (
            <>
              <button className="carrousel-button carrousel-button--prev" onClick={prevSlide}>
                &lt;
              </button>
              <button className="carrousel-button carrousel-button--next" onClick={nextSlide}>
                &gt;
              </button>
              <div className="carrousel-counter">
                {activePicture + 1} / {images.length}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Carrousel;