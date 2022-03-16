import "./Cifras.css"
import Cancha from "./assets/Cancha.jpeg";
import Casa from "./assets/Casa.jpeg";
import Pared from "./assets/Pared.jpeg";

const Cifras = () => {
  return (
    <div className="container contene row">
        <h1 className="tarje">Nuestros Números</h1>
        <hr/>
        <div className="col-4">
            <div className="card tarje">
                <div className="card-body">
                    <h3 className="card-title">Clientes Atendidos</h3>
                </div>
                <img src={Cancha} className="card-img-top" alt="..."/>
            </div>
        </div>
        <div className="col-4">
            <div className="card tarje">
                <div className="card-body">
                    <h3 className="card-title">Arboles Plantados</h3>
                </div>
                <img src={Cancha} className="card-img-top" alt="..."/>
            </div>
        </div>
        <div className="col-4">
            <div className="card tarje">
                <div className="card-body">
                    <h3 className="card-title">Clientes Atendidos</h3>
                </div>
                <img src={Cancha} className="card-img-top" alt="..."/>
            </div>
        </div>
    </div>
  )
}

export default Cifras