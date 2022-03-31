import fotoTitulo from "./assets/plantas.jpg";
import arbolTitulo from "./assets/tierra.jpg"
import plantarTitulo from "./assets/plantar.jpg"

import "./Carrousel.css"

const Carrousel = () => {
  return (
    <div >
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={fotoTitulo} className="d-block w-100 imagencita" alt="..." />
            <div className="carousel-caption d-none d-md-block" id='tituloImg'>
              <h5>Viveros Luka</h5>
              <p>
                Resolviendo tus necesidades de manera natural
              </p>
            </div>
          </div>
           <div className="carousel-item">
            <img src={arbolTitulo} className="d-block w-100 imagencita"  id ='imagen-carrusel'alt="..." />
            <div className="carousel-caption d-none d-md-block" id='tituloImg'>
              <h5>Compensación Ambiental</h5>
              <p>
                Te acompañamos en todo el proceso
              </p>
            </div>
          </div>
           <div className="carousel-item">
            <img src={plantarTitulo} className="d-block w-100 imagencita" alt="..." />
            <div className="carousel-caption d-none d-md-block" id='tituloImg'>
              <h5>Paisajismo</h5>
              <p>
                Impulsamos tus proyectos
              </p>
            </div>  
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
