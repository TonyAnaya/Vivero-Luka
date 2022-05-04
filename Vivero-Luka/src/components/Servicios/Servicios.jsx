import Planta from "./assets/planta.jpg";
import Paisaje from "./assets/paisaje.jpg";
import Herramientas from "./assets/herramientas.jpg";
import Cuidados from './assets/cuidados.jpg'
import { NavLink } from "react-router-dom";
import "./Servicios.css";

const Servici = () => {
  return (
      <div className="container row servi">
        <h1 className="servicios-title">Nuestros Servicios</h1>
        <div className="container row" id='flex-container'>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4" id='flex'>
            <div className="col">
              <NavLink className="nav-link" to="/Servicios">
                <div className="card">
                  <img src={Planta} className="card-img-top serv-imag " alt="..." />
                  <div className="card-body">
                    <h5 className="card-title services">Compensaciones</h5>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col">
              <NavLink className="nav-link" to="/Servicios">
                <div className="card">
                  <img src={Herramientas} className="card-img-top serv-imag" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title services">Jardinería</h5>
                  </div>
              </div>
              </NavLink>
            </div>
            <div className="col">
              <NavLink className="nav-link" to="/Servicios">
                <div className="card">
                <img src={Paisaje} className="card-img-top serv-imag" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title services">Paisajismo</h5>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col">
              <NavLink className="nav-link" to="/Servicios">
               <div className="card">
                  <img src={Cuidados} className="card-img-top serv-imag" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title services">Consejos y Cuidados</h5>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Servici;
