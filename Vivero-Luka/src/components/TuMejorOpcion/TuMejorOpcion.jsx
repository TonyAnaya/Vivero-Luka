import "./TuMejorOpcion.css";
import Cancha from "./assets/Cancha.jpeg";
import Casa from "./assets/Casa.jpeg";
import Pared from "./assets/Pared.jpeg";
const TuMejorOpcion = () => {
  return (
    <div className="container conteOpc row">
        <h1 className="titulo">Somos tu mejor opción</h1>
        <div className="card mb-3" >
          <div className="row g-0">
            <div className="col-md-6">
              <div className="card-body cuerpo">
                <h5 className="card-title">Alguna palabra que represente el motivo de ser la mejor opcion</h5>
                <p className="card-text">Texto describiendo muy breve la razón de ser la mejor opción.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={Cancha} className="d-block w-100 imagencita" alt="Cancha"/>
                  </div>
                  <div className="carousel-item">
                    <img src={Casa} className="d-block w-100 imagencita" alt="Casa"/>
                  </div>
                  <div className="carousel-item">
                    <img src={Pared} className="d-block w-100 imagencita" alt="Pared"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default TuMejorOpcion