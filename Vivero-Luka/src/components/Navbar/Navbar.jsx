import Logo from "./assets/logo.png";
import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className="space"></div>
      <nav className="navbar navbar-expand-lg navbar-bg navbar-dark">
        <div className="container-fluid">
          <img src={Logo} className="logo-nav"></img>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavLink className="nav-link" to="/">
            <h2 className="navbar-brand"> Viveros Luka</h2>
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/SobreNosotros">
                  <h5 className="nav-link active" aria-current="page">Sobre Nosotros</h5>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Compensacion">
                  <h5 className="nav-link active" aria-current="page">Compensacion Ambiental</h5>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Catalogo">
                  <h5 className="nav-link active" aria-current="page" href="#">Catálogo</h5>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Trabajos">
                  <h5 className="nav-link active" aria-current="page">Trabajos</h5>
                </NavLink>
              </li>
              <li className="nav-link dropdown">
                <h5 className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Servicios
                </h5>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="nav-link" to="/Servicios">
                      <h5 className="dropdown-item">Proyectos de Reforestación</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/Servicios">
                      <h5 className="dropdown-item">Jardinería</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/Servicios">
                      <h5 className="dropdown-item" >Paisajismo</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/Servicios">
                      <h5 className="dropdown-item" href="#">Concejos y Cuidados</h5>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contacto">
                  <h5 className="nav-link active" aria-current="page" href="#">Contacto</h5>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>



    </div>
  )
}

export default Navbar