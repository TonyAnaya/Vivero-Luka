import LogoIso from "./assets/isotiporulcas.png";
import Logo from "./assets/logotiporulcas.png";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  // TODO: Cambiar hamburguesa y logo en responsive
  return (
    <div>
      <div className="space"></div>
      <nav className="navbar navbar-expand-lg navbar-bg navbar-dark">
        <div className="container-fluid">
          <NavLink className="nav-link" to="/">
          <img src={Logo} className="logo-nav"></img>
          <img src={LogoIso} className="logo-nav-iso"></img>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/SobreNosotros">
                  <h5 className="nav-link active" aria-current="page">
                    Sobre Nosotros
                  </h5>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Compensacion">
                  <h5 className="nav-link active" aria-current="page">
                    Compensacion Ambiental
                  </h5>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Catalogo">
                  <h5 className="nav-link active" aria-current="page" href="#">
                    Catálogo
                  </h5>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Servicios">
                  <h5 className="nav-link active" aria-current="page" href="#">
                    Servicios
                  </h5>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contacto">
                  <h5 className="nav-link active" aria-current="page" href="#">
                    Contacto
                  </h5>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
