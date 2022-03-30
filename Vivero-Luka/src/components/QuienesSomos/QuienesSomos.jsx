import "./QuienesSomos.css";
import planta from './assets/plantasQuienesSomos.jpg'


const TuMejorOpcion = () => {
  return (
    <div className="container conteOpc row servi">
        <h1 className="titulo">¿Quienes somos?</h1>
        <div className="card mb-3" >
          <div className="row g-0">
            <div className="col-md-6">
              <div className="card-body cuerpo">
                <h5 className="card-title">Alguna palabra que represente el motivo de ser la mejor opcion</h5>
                <p className="card-text">Texto describiendo muy breve la razón de ser la mejor opción.</p>
              </div>
            </div>
            <div className="col-md-6">
                <img src={planta} alt='...' className="plantaQuienes"/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default TuMejorOpcion