import "./Catalogo.css";
import Cancha from "./assets/Cancha.jpeg";
import Casa from "./assets/Casa.jpeg";
import Pared from "./assets/Pared.jpeg";

const Catalogo = () => {
  const plantas = [
    {
      imagen: Cancha,
      titulo: "Acacia Gris",
      descripcion: "descripcion corta",
    },
    {
      imagen: Cancha,
      titulo: "Acacia Tormentosa",
      descripcion: "descripcion corta",
    },
    {
      imagen: Cancha,
      titulo: "Acacia Verde",
      descripcion: "descripcion corta",
    },
    {
      imagen: Casa,
      titulo: "Astronomica",
      descripcion: "descripcion corta 2",
    },
    {
      imagen: Pared,
      titulo: "Bambu",
      descripcion: "descripcion corta 3",
    },
    {
      imagen: Pared,
      titulo: "Calistermo",
      descripcion: "descripcion corta 4",
    },
    {
      imagen: Pared,
      titulo: "Capulin",
      descripcion: "descripcion corta 5",
    },
    {
      imagen: Cancha,
      titulo: "Casia Tormentosa",
      descripcion: "descripcion corta",
    },
    {
      imagen: Casa,
      titulo: "Cedro Blanco",
      descripcion: "descripcion corta 2",
    },
    {
      imagen: Pared,
      titulo: "Cedro Limon",
      descripcion: "descripcion corta 3",
    },
    {
      imagen: Pared,
      titulo: "Chabacano",
      descripcion: "descripcion corta 4",
    },
    {
      imagen: Pared,
      titulo: "Cipress",
      descripcion: "descripcion corta 5",
    },
    {
      imagen: Pared,
      titulo: "Durazno",
      descripcion: "descripcion corta 6",
    },
    {
      imagen: Pared,
      titulo: "Encino Laurina",
      descripcion: "descripcion corta 7",
    },
    {
      imagen: Pared,
      titulo: "Encino Candicans",
      descripcion: "descripcion corta 8",
    },
    {
      imagen: Pared,
      titulo: "Ficus",
      descripcion: "descripcion corta 9",
    },
    {
      imagen: Pared,
      titulo: "Fresno",
      descripcion: "descripcion corta 10",
    },
    {
      imagen: Pared,
      titulo: "Grevilea",
      descripcion: "descripcion corta 10",
    },
    {
      imagen: Pared,
      titulo: "Jacaranda",
      descripcion: "descripcion corta 10",
    },
    {
      imagen: Pared,
      titulo: "Laurel",
      descripcion: "descripcion corta 10",
    },
    {
      imagen: Pared,
      titulo: "Laurel Rosa",
      descripcion: "descripcion corta 10",
    },
    {
      imagen: Pared,
      titulo: "Lima",
      descripcion: "descripcion corta 10",
    },
    {
      imagen: Cancha,
      titulo: "Liquidambar",
      descripcion: "descripcion corta",
    },
    {
      imagen: Casa,
      titulo: "Melia Paraiso",
      descripcion: "descripcion corta 2",
    },
    {
      imagen: Pared,
      titulo: "Mezquite",
      descripcion: "descripcion corta 3",
    },
    {
      imagen: Pared,
      titulo: "Naranjo",
      descripcion: "descripcion corta 4",
    },
    {
      imagen: Pared,
      titulo: "Nispero",
      descripcion: "descripcion corta 5",
    },
    {
      imagen: Pared,
      titulo: "Pata de Vaca",
      descripcion: "descripcion corta 6",
    },
    {
      imagen: Pared,
      titulo: "Pera",
      descripcion: "descripcion corta 7",
    },
    {
      imagen: Pared,
      titulo: "Pino Ayacahuite",
      descripcion: "descripcion corta 8",
    },
    {
      imagen: Pared,
      titulo: "Pino Greggi",
      descripcion: "descripcion corta 9",
    },
    {
      imagen: Pared,
      titulo: "Pino Moctezuma",
      descripcion: "descripcion corta 10",
    },
    {
      imagen: Pared,
      titulo: "Piracanto",
      descripcion: "descripcion corta 10",
    },
    {
      imagen: Pared,
      titulo: "Pirul Brasileño",
      descripcion: "descripcion corta 10",
    },
    {
      imagen: Pared,
      titulo: "Pirul Chino",
      descripcion: "descripcion corta 10",
    },
    {
      imagen: Pared,
      titulo: "Tejocote",
      descripcion: "descripcion corta 10",
    },
    {
      imagen: Pared,
      titulo: "Trueno Japonico",
      descripcion: "descripcion corta 10",
    },
    {
      imagen: Pared,
      titulo: "Pirul Chino",
      descripcion: "descripcion corta 10",
    },
    {
      imagen: Pared,
      titulo: "Tejocote",
      descripcion: "descripcion corta 10",
    },
    {
      imagen: Pared,
      titulo: "Trueno Japonico",
      descripcion: "descripcion corta 10",
    },
  ];

  return (
    <div className="container row servi">
      <h1 className="cont-titulo">Nuestro Catálogo</h1>
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
                  <h5 className="card-title" id='titulo-map'>{planta.titulo}</h5>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    id='btn-catalogo'
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
      {/* <h1 className="cont-titulo">Catálogo</h1> */}
    </div>
  );
};

export default Catalogo;
