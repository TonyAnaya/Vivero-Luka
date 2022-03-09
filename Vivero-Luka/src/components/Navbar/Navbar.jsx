import Logo from "./assets/logo.png";
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-bg navbar-dark">
        <div className="container-fluid">
          <img src={Logo} className="logo-nav"></img>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#"> Viveros Luka</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Compensacion Ambiental</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Catálogo</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Servicios
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Proyectos de Reforestación</a></li>
                  <li><a className="dropdown-item" href="#">Jardinería</a></li>
                  <li><a className="dropdown-item" href="#">Paisajismo</a></li>
                  <li><a className="dropdown-item" href="#">Concejos y Cuidados</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>



    </div>
  )
}

export default Navbar