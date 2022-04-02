import { React, useState } from "react";
import { postProspect } from "../../api/api";
import "./Contactanos.css";

const Contacta = () => {
  const [prospect, setProspect] = useState({
    nombre: "",
    telefono: "",
    correo_electronico: "",
    mensaje: "",
  });

  const [first, setfirst] = useState(0)

  let handleSubmit = async(event) => {
    event.preventDefault();

    let prospectoCreado = {
      nombre: event.target[0].value,
      telefono: event.target[1].value,
      correo_electronico: event.target[2].value,
      empresa: event.target[3].value,
      mensaje: event.target[4].value,
    };
    setProspect(prospectoCreado);
    let response = await postProspect(prospect)
    return response

  };

  console.log(first);


  return (
    <div className="container row contacta">
      <h1 className="cont-titulo">¡Cotiza con nosotros!</h1>
      <form onSubmit={handleSubmit}>
        <div className="container row text-bl">
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Nombre"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput2" className="form-label">
                Teléfono
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput2"
                placeholder="5555-55-55-55"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput3" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput3"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput3" className="form-label">
                Empresa
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput3"
                placeholder="Indica de que empresa nos contactas"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Mensaje
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="12"
              ></textarea>
            </div>
          </div>
        </div>



        <button type="submit" className="btn btn-primary boton col-lg-2 btn-contact" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Enviar
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Mensaje enviado con éxito</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        
                        <div className="card" >
                            <p>El mensaje se enviío con exito, en poco tiempo nos contactaremos contigo</p>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>








      </form>

    </div>
  );
};

export default Contacta;
