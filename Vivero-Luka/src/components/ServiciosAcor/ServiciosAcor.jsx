import "./ServiciosAcor.css";
import arboles from "./assets/vivero.jpg";
import prueba from "./assets/prueba.jpg"
import foto1 from './assets/foto1.jpg'
import foto2 from './assets/foto2.jpg'
import foto3 from './assets/foto3.jpg'
import foto4 from './assets/foto4.jpg'
import foto5 from './assets/foto5.jpg'
import foto6 from './assets/foto6.jpg'
import foto7 from './assets/foto7.jpg'
import foto8 from './assets/foto8.jpg'
import foto9 from './assets/foto9.jpg'


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
      <h1 className="tituloServicios">Galería</h1>
      <br />
      <div className="serviciosFlex">
        <img src={foto1} alt="img" className="imgFlexServ"/>
        <img src={foto2} alt="img" className="imgFlexServ"/>
        <img src={foto3} alt="img" className="imgFlexServ"/>
        <img src={foto4} alt="img" className="imgFlexServ"/>
        <img src={foto5} alt="img" className="imgFlexServ"/>
        <img src={foto6} alt="img" className="imgFlexServ"/>
        <img src={foto7} alt="img" className="imgFlexServ"/>
        <img src={foto8} alt="img" className="imgFlexServ"/>
        <img src={foto9} alt="img" className="imgFlexServ"/>
      </div>
      <br />
      <h1 className="tituloServicios">Consejos y cuidados</h1>
    </div>
  );
};

export default ServiciosAcor;
