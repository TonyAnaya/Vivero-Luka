import { React, useState } from "react";
import { postProspect } from "../../api/api";
import "./Contactanos.css";

const Carrousel = () => {
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
    let response = await postProspect(prospectoCreado)
    return response

  };

  console.log(first);


  return (
    <div className="container row contacta">
      <h1 className="cont-titulo">Contáctanos</h1>
      <form onSubmit={handleSubmit}>
        <div className="container row text-bl">
          <div className="col-6">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
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
              <label for="exampleFormControlInput2" className="form-label">
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
              <label for="exampleFormControlInput3" className="form-label">
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
              <label for="exampleFormControlInput3" className="form-label">
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
              <label for="exampleFormControlTextarea1" className="form-label">
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
        <button className="btn btn-primary boton col-lg-2 btn-contact" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Carrousel;
