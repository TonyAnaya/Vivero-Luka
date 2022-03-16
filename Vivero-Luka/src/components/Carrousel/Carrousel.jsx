import Cancha from "./assets/Cancha.jpeg";
import Casa from "./assets/Casa.jpeg";
import Pared from "./assets/Pared.jpeg";
import "./Carrousel.css"

const Carrousel = () => {
  return (
    <div className="container">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Cancha} className="d-block w-100 imagencita" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>La Cancha</h5>
              <p>
                Paisajismo y restauración en cancha de juegos
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Casa} className="d-block w-100 imagencita" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Casa Verde</h5>
              <p>
                Proyecto de jardineria en propiedad
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Pared} className="d-block w-100 imagencita" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Pulmon vertical</h5>
              <p>
                Adaptación verde en pared
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
