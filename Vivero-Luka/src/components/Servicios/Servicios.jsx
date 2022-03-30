import Cancha from "./assets/Cancha.jpeg";
import Casa from "./assets/Casa.jpeg";
import Pared from "./assets/Pared.jpeg";
import "./Servicios.css";

const Carrousel = () => {
  return (
    <div className="container row servi">
      <h1>Nuestros Servicios</h1>
      <div className="container row" id='flex-container'>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4" id='flex'>
          <div className="col">
            <div className="card">
              <img src={Casa} className="card-img-top serv-imag " alt="..." />
              <div className="card-body">
                <h5 className="card-title">Compensación Ambiental</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={Cancha} className="card-img-top serv-imag" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Jardinería</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={Pared} className="card-img-top serv-imag" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Paisajismo</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={Casa} className="card-img-top serv-imag" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Consejos y Cuidados</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
