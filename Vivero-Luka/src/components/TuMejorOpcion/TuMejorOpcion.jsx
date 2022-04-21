import Opcion from './assets/opcion.jpg'
import "./TuMejorOpcion.css";

const TuMejorOpcion = () => {
  return (
    <div class="card mb-3">
      <div class="row no-gutters">
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Expertos en lo que hacemos</h5>
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
        <div class="col-md-4">
          <img src={Opcion} class="card-img" alt="..." id='OpcionLuka'/>
        </div>
      </div>
    </div>
    // <div className="container conteOpc row servi">
    //     <h1 className="titulo card-title">¡Somos tu mejor opción!</h1>
    //     <div className="card mb-3" >
    //       <div className="row g-0">
    //         <div className="col-md-6">
    //           <div className="card-body cuerpo">
    //             <p className="card-text">Texto describiendo muy breve la razón de ser la mejor opción.</p>
    //           </div>
    //         </div>
    //         <div className="col-md-6">
    //           <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
    //             <div className="carousel-inner">
    //               <div className="carousel-item active">
    //                 <img src={Cancha} className="d-block w-100 imagencita" alt="Cancha"/>
    //               </div>
    //               <div className="carousel-item">
    //                 <img src={Casa} className="d-block w-100 imagencita" alt="Casa"/>
    //               </div>
    //               <div className="carousel-item">
    //                 <img src={Pared} className="d-block w-100 imagencita" alt="Pared"/>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    // </div>
  )
}

export default TuMejorOpcion