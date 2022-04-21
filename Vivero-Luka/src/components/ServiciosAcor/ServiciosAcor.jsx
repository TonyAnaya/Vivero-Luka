import "./ServiciosAcor.css";
import arboles from "./assets/vivero.jpg";
import prueba from "./assets/prueba.jpg"


const ServiciosAcor = () => {
  return (
    <div>
      <br />
      <h1 className="tituloServicios">Nuestros Servicios</h1>
      <br />
      <div className="img-contenedor-servicios">
        <img src={arboles} alt="" />
      </div>
      <br />
      <h1 className="tituloServicios">Algunos de nuestros trabajos</h1>
      <br />
      <div className="serviciosFlex">
        <img src={prueba} alt="img" className="imgFlexServ"/>
        <img src={prueba} alt="img" className="imgFlexServ"/>
        <img src={prueba} alt="img" className="imgFlexServ"/>
        <img src={prueba} alt="img" className="imgFlexServ"/>
        <img src={prueba} alt="img" className="imgFlexServ"/>
        <img src={prueba} alt="img" className="imgFlexServ"/>
      </div>
    </div>
  );
};

export default ServiciosAcor;
