import "./MisVis.css";
import mision from "./assets/mision.png";
import vision from "./assets/vision.png";
import valores from "./assets/valores.png";

const MisVis = () => {
  return (
    <div>
      <div class="card-group">
        <div class="card" id="misCard">
          <img src={mision} class="card-img-top" alt="mision" id="misVisVal" />
          <div class="card-body">
            <h5 class="card-title" id="mision">
              Nuestra Misión
            </h5>
            <p class="card-text">
              Seguir cultivando árboles para hacer llegar a nuestros clientes
              producto de altísima calidad , durabilidad y conservación
            </p>
          </div>
        </div>
        <div class="card" id="misCard">
          <img src={vision} class="card-img-top" alt="..." id="misVisVal" />
          <div class="card-body">
            <h5 class="card-title" id="vision">
              Nuestra Visión
            </h5>
            <p class="card-text">
              Convertirnos en los líderes del mercado mexicano de compensaciones
              y reforestaciones empresariales, con productos que cumplen los
              requerimientos de la NORMA
            </p>
          </div>
        </div>
        <div class="card" id="misCard">
          <img src={valores} class="card-img-top" alt="..." id="misVisVal" />
          <div class="card-body">
            <h5 class="card-title" id="valores">
              Nuestros Valores
            </h5>
            <p class="card-text">
              <ul>
                <li>
                  Honestidad: Entregando individuos arbóreos de la más alta
                  calidad Adoc a las solicitudes de nuestros clientes
                </li>
                <li>
                  Responsabilidad Social: Siendo una Empresa 100% sustentable
                </li>
                <li>
                  Compromiso: Alto respeto por las fechas y contratos
                  establecidos.
                </li>
                <li>
                  Excelente relación precio-beneficio: Los mejores precios del
                  mercado.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
    // <div className="container misviscont row">
    //     <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
    //         <div className="carousel-inner">
    //             <div className="carousel-item active" data-bs-interval="10000">
    //                 <div className="d-block w-100">
    //                     <div className="card text-center">
    //                         <div className="card-body">
    //                             <h5 className="card-title">Nuestra Misión</h5>
    //                             <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="carousel-item" data-bs-interval="2000">
    //                 <div className="d-block w-100">
    //                     <div className="card text-center">
    //                         <div className="card-body">
    //                             <h5 className="card-title">Nuestra Visión</h5>
    //                             <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="carousel-item">
    //                 <div className="d-block w-100">
    //                     <div className="card text-center">
    //                         <div className="card-body">
    //                             <h5 className="card-title">Nuestros Valores</h5>
    //                             <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    //             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //             <span className="visually-hidden">Previous</span>
    //         </button>
    //         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    //             <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //             <span className="visually-hidden">Next</span>
    //         </button>
    //         </div>
    // </div>
  );
};

export default MisVis;
