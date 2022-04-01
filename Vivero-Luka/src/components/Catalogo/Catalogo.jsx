import "./Catalogo.css"
import Cancha from "./assets/Cancha.jpeg";
import Casa from "./assets/Casa.jpeg";
import Pared from "./assets/Pared.jpeg";

const Catalogo = () => {
  return (
    <div className="container row servi">
        
        <h1 className="cont-titulo">Catálogo</h1>
        <div className="col-3"> 
            <div className="card" >
                <img src={Cancha} className="card-img-top imag" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Planta numero 1</h5>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Ver Más
                    </button>

                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Planta numero 1</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    
                                    <div className="card" >
                                        <img src={Cancha} className="card-img-top imag" alt="..."/>
                                        <p>Aqui va la descripcion de la planta numero 1, chance tambien se puede poner un poquito de la historia o las características de la misma</p>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="col-3"> 
            <div className="card" >
                <img src={Cancha} className="card-img-top imag" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Planta numero 2</h5>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                        Ver Más
                    </button>

                    <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Planta numero 2</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    
                                    <div className="card" >
                                        <img src={Cancha} className="card-img-top imag" alt="..."/>
                                        <p>Aqui va la descripcion de la planta numero 2, chance tambien se puede poner un poquito de la historia o las características de la misma</p>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-3"> 
            <div className="card" >
                <img src={Cancha} className="card-img-top imag" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Planta numero 3</h5>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                        Ver Más
                    </button>

                    <div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Planta numero 3</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    
                                    <div className="card" >
                                        <img src={Cancha} className="card-img-top imag" alt="..."/>
                                        <p>Aqui va la descripcion de la planta numero 3, chance tambien se puede poner un poquito de la historia o las características de la misma</p>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="col-3"> 
            <div className="card" >
                <img src={Cancha} className="card-img-top imag" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Planta numero 4</h5>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal4">
                        Ver Más
                    </button>

                    <div className="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Planta numero 4</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    
                                    <div className="card" >
                                        <img src={Cancha} className="card-img-top imag" alt="..."/>
                                        <p>Aqui va la descripcion de la planta numero 4, chance tambien se puede poner un poquito de la historia o las características de la misma</p>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    </div>
  )
}

export default Catalogo