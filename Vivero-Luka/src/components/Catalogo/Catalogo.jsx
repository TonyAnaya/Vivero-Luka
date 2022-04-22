import "./Catalogo.css";
import Cancha from "./assets/Cancha.jpeg";
import Casa from "./assets/Casa.jpeg";
import Pared from "./assets/Pared.jpeg";

const Catalogo = () => {
  const plantas = [
    {
      imagen: Cancha,
      titulo: "planta 1",
      descripcion: "descripcion corta",
      id:"1",
      id2:"a"

    },
    {
      imagen: Casa,
      titulo: "planta 2",
      descripcion: "descripcion corta 2",
      id:"2",
      id2:"b"
    },
    {
      imagen: Pared,
      titulo: "planta 3",
      descripcion: "descripcion corta 3",
      id:"3",
      id2:"c"
    },
    {
      imagen: Pared,
      titulo: "planta 4",
      descripcion: "descripcion corta 4",
      id:"4",
      id2:"d"
    },
    {
      imagen: Pared,
      titulo: "planta 5",
      descripcion: "descripcion corta 5",
      id:"5",
      id2:"e"
    },
    {
      imagen: Pared,
      titulo: "planta 6",
      descripcion: "descripcion corta 6",
      id:"6",
      id2:"f"
    },
    {
      imagen: Pared,
      titulo: "planta 7",
      descripcion: "descripcion corta 7",
      id:"7",
      id2:"g"
    },
    {
      imagen: Pared,
      titulo: "planta 8",
      descripcion: "descripcion corta 8",
      id:"8",
      id2:"h"
    },
    {
      imagen: Pared,
      titulo: "planta 9",
      descripcion: "descripcion corta 9",
      id:"9",
      id2:"i"
    },
    {
      imagen: Pared,
      titulo: "planta 10",
      descripcion: "descripcion corta 10",
      id:"10",
      id2:"j"
    },
    {
      imagen: Pared,
      titulo: "planta 11",
      descripcion: "descripcion corta 11",
      id:"11",
      id2:"k"
    },
    {
      imagen: Pared,
      titulo: "planta 12",
      descripcion: "descripcion corta 12",
      id:"12",
      id2:"l"
    },
    {
      imagen: Pared,
      titulo: "planta 13",
      descripcion: "descripcion corta 13",
      id:"13",
      id2:"m"
    },
    {
      imagen: Pared,
      titulo: "planta 14",
      descripcion: "descripcion corta 14",
      id:"14",
      id2:"n"
    },
    {
      imagen: Pared,
      titulo: "planta 15",
      descripcion: "descripcion corta 15",
      id:"15",
      id2:"o"
    },
  ];

  return (
    <div className="container row servi">
      <h1 className="cont-titulo">Nuestros Árboles Disponibles</h1>
      <div className="cont-flex-catalogo">
        {plantas.map((planta) => {
          let id3 = '#' + planta.id2

          return (
            <div key = {planta.id}>
              <br />
              <br />
              <div className="card">
                <img
                  src={planta.imagen}
                  className="card-img-top imag"
                  alt="..."
                />
                <div className="card-body">
                  <h5 id="titulo" className="card-title">{planta.titulo}</h5>
                  <button
                    id={planta.id}
                    type="button"
                    className="btn btn-primary btn-arbol"
                    data-bs-toggle="modal"
                    data-bs-target={id3}
                  >
                    Ver Más
                  </button>

                  <div
                    className="modal fade"
                    id={planta.id2}
                    tabindex="-1"
                    aria-labelledby={planta.titulo}
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id={planta.titulo}>
                            {planta.titulo}
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="card">
                            <img
                              src={planta.imagen}
                              className="card-img-top imag"
                              alt="..."
                            />
                            <p>{planta.descripcion}</p>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Cerrar
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <br />
      <h1 className="cont-titulo">Catálogo</h1>
    </div>
  );
};

export default Catalogo;
