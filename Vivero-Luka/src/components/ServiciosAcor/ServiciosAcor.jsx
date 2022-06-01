import "./ServiciosAcor.css";
import arboles from "./assets/vivero.jpg";
import arbolMejor from "./assets/arbolMejor.jpg";
import headerServicios from "./assets/headerServicios.jpg";


const ServiciosAcor = () => {
  return (
    <div>
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={headerServicios} className="d-block w-100 imagencita" alt="..." />
        <div className="carousel-caption d-none d-md-block" id='tituloImg'>
          <h5>Nuestros Servicios</h5>
        </div>
      </div>
    </div>
  </div>
      <br />
      <div className="img-contenedor-servicios">
        <img src={arboles} alt="" />
      </div>
      <br />
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={arbolMejor} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Ventajas de elegirnos</h5>
              <p class="card-text">
                <br />
               *Ejemplares árboreos de Vivero, criados desde su nacimiento.
                <br />
                <br />
                *Por lo tanto, contamos con una basto Inventario para cubrir sus
                requerimientos. <br />
                <br />
                *Nuestra experiencia nos permite hacer entregas con 0% de
                rechazos ante las autoridades ambientales. <br />
                <br />
                *Apoyo y estudio de mejores especies, adaptado a la calidad,
                lugar de siembra y precio. <br />
                <br />
                *Contamos con cualquier especie arborea que esté buscando. <br />
                <br />
                 <b>Nos adaptamos a su presupuesto.</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiciosAcor;
