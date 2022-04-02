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
    },
    {
      imagen: Casa,
      titulo: "planta 2",
      descripcion: "descripcion corta 2",
    },
    {
      imagen: Pared,
      titulo: "planta 3",
      descripcion: "descripcion corta 3",
    },
    {
      imagen: Pared,
      titulo: "planta 4",
      descripcion: "descripcion corta 4",
    },
    {
      imagen: Pared,
      titulo: "planta 5",
      descripcion: "descripcion corta 5",
    },
    {
      imagen: Pared,
      titulo: "planta 6",
      descripcion: "descripcion corta 6",
    },
    {
      imagen: Pared,
      titulo: "planta 7",
      descripcion: "descripcion corta 7",
    },
    {
      imagen: Pared,
      titulo: "planta 8",
      descripcion: "descripcion corta 8",
    },
    {
      imagen: Pared,
      titulo: "planta 9",
      descripcion: "descripcion corta 9",
    },
    {
      imagen: Pared,
      titulo: "planta 10",
      descripcion: "descripcion corta 10",
    },
    {
      imagen: Pared,
      titulo: "planta 10",
      descripcion: "descripcion corta 10",
    },
    {
      imagen: Pared,
      titulo: "planta 10",
      descripcion: "descripcion corta 10",
    },
    {
      imagen: Pared,
      titulo: "planta 10",
      descripcion: "descripcion corta 10",
    },
    {
      imagen: Pared,
      titulo: "planta 10",
      descripcion: "descripcion corta 10",
    },
    {
      imagen: Pared,
      titulo: "planta 10",
      descripcion: "descripcion corta 10",
    },
  ];

  return (
    <div className="container row servi">
      <h1 className="cont-titulo">Nuestros Árboles Disponibles</h1>
      <div className="cont-flex-catalogo">
        {plantas.map((planta) => {
          return (
            <div>
              <br />
              <br />
              <div className="card">
                <img
                  src={planta.imagen}
                  className="card-img-top imag"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{planta.titulo}</h5>
                  <button
                    type="button"
                    className="btn btn-primary btn-arbol"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Ver Más
                  </button>

                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
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
