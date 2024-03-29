import "./Catalogo.css";
import Cancha from "./assets/Cancha.jpeg";
import Casa from "./assets/Casa.jpeg";
import Pared from "./assets/Pared.jpeg";
import germinacion from "./assets/germinacion.jpg";
import catalogofoto from "./assets/catalogofoto.png";

const Catalogo = () => {
  const plantas = [
    {
      imagen: Cancha,
      titulo: "Acacia Gris",
      nombre_cientifico: "",
      familia: "",
      origen: "",
      descripcion: "descripcion corta",
      id: "1",
      id2: "a",
      //nombre coloquial
      //nombre cientifico
      //Grosor 3/4 cm * altura promedio
    },
    {
      imagen: Casa,
      titulo: "Acacia Tormentosa",
      nombre_cientifico: "",
      familia: "",
      origen: "",
      descripcion: "descripcion corta 2",
      id: "2",
      id2: "b",
    },
    {
      imagen: Pared,
      titulo: "Acacia Verde",
      nombre_cientifico: "",
      familia: "",
      origen: "",
      descripcion: "descripcion corta 3",
      id: "3",
      id2: "c",
    },
    {
      imagen: Pared,
      titulo: "Astronomica",
      nombre_cientifico: "",
      familia: "",
      origen: "",
      descripcion: "descripcion corta 4",
      id: "4",
      id2: "d",
    },
    {
      imagen: Pared,
      titulo: "Bambu",
      nombre_cientifico: "",
      familia: "",
      origen: "",
      descripcion: "descripcion corta 5",
      id: "5",
      id2: "e",
    },
    {
      imagen: Pared,
      titulo: "Calistermo",
      nombre_cientifico: "",
      familia: "",
      origen: "",
      descripcion: "descripcion corta 6",
      id: "6",
      id2: "f",
    },
    {
      imagen: Pared,
      titulo: "Capulin",
      nombre_cientifico: "",
      familia: "",
      origen: "",
      descripcion: "descripcion corta 7",
      id: "7",
      id2: "g",
    },
    {
      imagen: Pared,
      titulo: "Casia Tormentosa",
      nombre_cientifico: "",
      familia: "",
      origen: "",
      descripcion: "descripcion corta 8",
      id: "8",
      id2: "h",
    },
    {
      imagen: Pared,
      titulo: "Cedro Blanco",
      nombre_cientifico: "",
      familia: "",
      origen: "",
      descripcion: "descripcion corta 9",
      id: "9",
      id2: "i",
    },
    {
      imagen: Pared,
      titulo: "Cedro Limon",
      nombre_cientifico: "",
      familia: "",
      origen: "",
      descripcion: "descripcion corta 10",
      id: "10",
      id2: "j",
    },
    {
      imagen: Pared,
      titulo: "Chabacano",
      nombre_cientifico: "",
      familia: "",
      origen: "",
      descripcion: "descripcion corta 11",
      id: "11",
      id2: "k",
    },
    {
      imagen: Pared,
      titulo: "Cipress",
      nombre_cientifico: "",
      familia: "",
      origen: "",
      descripcion: "descripcion corta 12",
      id: "12",
      id2: "l",
    },
    {
      imagen: Pared,
      titulo: "Durazno",
      nombre_cientifico: "",
      familia: "",
      origen: "",
      descripcion: "descripcion corta 13",
      id: "13",
      id2: "m",
    },
    {
      imagen: Pared,
      titulo: "Encino Laurina",
      nombre_cientifico: "",
      familia: "",
      origen: "",
      descripcion: "descripcion corta 14",
      id: "14",
      id2: "n",
    },
    {
      imagen: Pared,
      titulo: "Encino Candicans",
      nombre_cientifico: "",
      familia: "",
      origen: "",
      descripcion: "descripcion corta 15",
      id: "15",
      id2: "o",
    },
    {
      imagen: Pared,
      titulo: "Ficus",
      nombre_cientifico: "",
      familia: "",
      origen: "",
      descripcion: "descripcion corta 15",
      id: "16",
      id2: "p",
    },
    {
      imagen: Pared,
      titulo: "Fresno",
      nombre_cientifico: "",
      familia: "",
      origen: "",
      descripcion: "descripcion corta 15",
      id: "17",
      id2: "q",
    },
    {
      imagen: Pared,
      titulo: "Grevilea",
      nombre_cientifico: "",
      familia: "",
      origen: "",
      descripcion: "descripcion corta 15",
      id: "18",
      id2: "r",
    },
    {
      imagen: Pared,
      titulo: "Jacaranda",
      nombre_cientifico: "Jacaranda mimosifolia",
      familia: "Bignoniáceas",
      origen: "Bolivia y Argentina (Jujuy, Salta y Tucumán)",
      descripcion:
        "Árbol de porte mediano, puede alcanzar 18 metros de altura. Corteza oscura cuando es adulto. Follaje semipersistente o tardíamente caedizo. Flores en forma de tubo, de color azul violáceo, agrupadas en los extremos de las ramas. La floración se produce antes de la aparición de las hojas, en octubre, y suele repetirse con menor intensidad en otoño. El fruto es leñoso y recuerda a una castañuela. ",
      id: "19",
      id2: "s",
    },
    {
      imagen: Pared,
      titulo: "Laurel",
      nombre_cientifico: "",
      familia: "",
      origen: "",
      descripcion: "descripcion corta 15",
      id: "20",
      id2: "t",
    },
    {
      imagen: Pared,
      titulo: "Laurel Rosa",
      nombre_cientifico: "",
      familia: "",
      origen: "",
      descripcion: "descripcion corta 15",
      id: "21",
      id2: "u",
    },
    {
      imagen: Pared,
      titulo: "Lima",
      nombre_cientifico: "",
      familia: "",
      origen: "",
      descripcion: "descripcion corta 15",
      id: "22",
      id2: "v",
    },
    {
      imagen: Pared,
      titulo: "Liquidambar",
      nombre_cientifico: "",
      familia: "",
      origen: "",
      descripcion: "descripcion corta 15",
      id: "23",
      id2: "w",
    },
    {
      imagen: Pared,
      titulo: "Melia Paraíso",
      nombre_cientifico: "",
      familia: "",
      origen: "",
      descripcion: "descripcion corta 15",
      id: "24",
      id2: "x",
    },
    {
      imagen: Pared,
      titulo: "Mezquite",
      nombre_cientifico: "",
      familia: "",
      origen: "",
      descripcion: "descripcion corta 15",
      id: "25",
      id2: "y",
    },
    {
      imagen: Pared,
      titulo: "Naranjo",
      nombre_cientifico: "",
      familia: "",
      origen: "",
      descripcion: "descripcion corta 15",
      id: "26",
      id2: "z",
    },
  ];

  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={catalogofoto}
              className="d-block w-100 imagencita"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block" id="tituloImg">
              <h5>Catálogo</h5>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={germinacion}
              class="img-fluid rounded-start"
              alt="..."
              id="germiacionimg"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">El proceso de Germinación</h5>
              <p class="card-text">
                La germinación es el nacimiento, si se me permite la palabra, de
                una planta. Es el primer paso que da en su vida, y el más
                importante. Le puede haber llevado tan solo unos días, que es lo
                que tardan en brotar muchas hierbas, o quizás varios años, como
                les ocurre a algunos árboles que viven en las regiones de clima
                extremadamente frío del mundo. <br /> Pero lo que está claro es
                que, aquellas que consiguen germinar, son unas afortunadas, pues
                la semilla tiene que estar en buenas condiciones para poder
                cumplir con su función. Pero, ¿cuáles son esas condiciones? Es
                decir, ¿qué características debe tener para germinar? Son las
                siguientes: Ha de haber madurado. Tiene que estar completamente
                desarrollada y tener su tamaño definitivo. Debe ser viable;
                dicho de otro modo: ha de tener los medios para que la
                germinación se dé.
                <br />Y eso solo es posible cuando la flor es polinizada, ya que
                es cuando el ovario es fertilizado. Es crucial que esté sana y
                en buen estado. Si ha sido atacada por algún enemigo (animal o
                microorganismo) será difícil que germine.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div className="container row servi">
        <h1 className="cont-titulo">Nuestros Árboles Disponibles</h1>
        <div className="cont-flex-catalogo">
          {plantas.map((planta) => {
            let id3 = "#" + planta.id2;
            return (
              <div key={planta.id}>
                <br />
                <br />
                <div className="card">
                  <img
                    src={planta.imagen}
                    className="card-img-top imag"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 id="titulo" className="card-title">
                      {planta.titulo}
                    </h5>
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
                              <h6>{planta.nombre_cientifico}</h6>
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
                              <br />
                              <img
                                src={planta.imagen}
                                className="card-img-top imag"
                                alt="..."
                              />
                              <br />
                              <h6>
                                <strong>Origen: </strong>
                                {planta.origen}
                              </h6>
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
      </div>
    </div>
  );
};

export default Catalogo;
