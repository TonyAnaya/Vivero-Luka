import "./QuienesSomos.css";
import planta from "./assets/plantasQuienesSomos.jpg";

const TuMejorOpcion = () => {
  return (
    <div class="card mb-3">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src={planta} class="card-img" alt="..."/>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">¿Quiénes Somos?</h5>
            <br />
            <p class="card-text">
              En Viveros Rulcas, nos dedicamos a realizar los resarcimientos
              ambientales que tu empresa necesita.
            </p>
            <p class="card-text">
              Además de paisajismo, jardinería y siempra de pasto, todo natural.
            </p>
          </div>
        </div>
      </div>
    </div>
    // <div className="container conteOpc row servi">
    //     <h1 className="titulo-quienes">¿Quienes somos?</h1>
    //     <div className="card mb-3" >
    //       <div className="row g-0">
    //         <div className="col-md-6">
    //           <div className="card-body cuerpo">
    //             <h5 className="card-title">En Viveros Rulcas, nos dedicamos a realizar los resarcimientos ambientales que tu empresa necesita. Además de paisajismo, jardinería y siempra de pasto, todo natural.</h5>
    //           </div>
    //         </div>
    //         <div className="col-md-6">
    //             <img src={planta} alt='...' className="plantaQuienes"/>
    //         </div>
    //       </div>
    //     </div>
    // </div>
  );
};

export default TuMejorOpcion;
