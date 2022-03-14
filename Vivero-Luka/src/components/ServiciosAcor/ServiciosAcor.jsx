import "./ServiciosAcor.css"
import Cancha from "./assets/Cancha.jpeg";
import Casa from "./assets/Casa.jpeg";
import Pared from "./assets/Pared.jpeg";

const ServiciosAcor = () => {
  return (
    <div className="container serviAcor">
        <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item acordionAncho">
                <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={Cancha} className="img-fluid imagencita" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body d-flex titulo-servicio">
                                        <h5 className="card-title">Compensacion Ambiental</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body descripcion">
                        Guiamos a tu empresa en el proceso requerido por el gobierno a realizar la compensacion ambiental de la manera mas rápida y sencilla para que te puedas enfocar en hacer crecer tu negocio.
                    </div>
                </div>
            </div>
            <div className="accordion-item acordionAncho">
                <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-8">
                                    <div className="card-body d-flex titulo-servicio">
                                        <h5 className="card-title">Paisajismo</h5>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <img src={Cancha} className="img-fluid imagencita" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body  descripcion">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                </div>
            </div>
            <div className="accordion-item acordionAncho">
                <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={Cancha} className="img-fluid imagencita" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body d-flex titulo-servicio">
                                        <h5 className="card-title">Jardineria</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body  descripcion">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiciosAcor