import "./Cifras.css"
import Clien from "./assets/Clien.png";
import Arboles from "./assets/Arboles.png";
import Exp from "./assets/Exp.png";

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
                <img src={Clien} className="card-img-top" alt="..."/>
            </div>
        </div>
        <div className="col-4">
            <div className="card tarje">
                <div className="card-body">
                    <h3 className="card-title">Arboles Plantados</h3>
                </div>
                <img src={Arboles} className="card-img-top" alt="..."/>
            </div>
        </div>
        <div className="col-4">
            <div className="card tarje">
                <div className="card-body">
                    <h3 className="card-title">Años de experiencia</h3>
                </div>
                <img src={Exp} className="card-img-top" alt="..."/>
            </div>
        </div>
    </div>
  )
}

export default Cifras