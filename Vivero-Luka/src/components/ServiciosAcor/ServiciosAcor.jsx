import "./ServiciosAcor.css"
import Icono1 from "./assets/Icono-1.png";
import Icono2 from "./assets/Icono-2.png";
import Icono3 from "./assets/Icono-3.png";
import Icono4 from "./assets/Icono-4.png";
import Icono5 from "./assets/Icono-5.png";
import Icono6 from "./assets/Icono-6.png";

const ServiciosAcor = () => {
  return (
    <div className="container serviAcor">
        <div className="card serv-card" >
            <img src={Icono1} className="card-img-top iconos" alt="..."/>
            <div className="card-body">
                <h5 className="card-title servi-title">COMPENSACIONES AMBIENTALES</h5>
                <p className="card-text servi-text">Trabajamos con varias Empresas e Instituciones ofreciendo los mejores resultados.</p>
            </div>
        </div>
        <div className="card serv-card" >
            <img src={Icono2} className="card-img-top iconos" alt="..."/>
            <div className="card-body">
                <div>
                    <h5 className="card-title servi-title">REFORESTACIÓN AMBIENTAL</h5>
                </div>
                <p className="card-text servi-text">Lo apoyamos a cuidar del medio ambiente</p>
            </div>
        </div>
        <div className="card serv-card" >
            <img src={Icono3} className="card-img-top iconos" alt="..."/>
            <div className="card-body">
                <div>
                    <h5 className="card-title servi-title">VENTA DE ARBOLES Y ARBUSTOS</h5>
                </div>
                <p className="card-text servi-text"> MAYOREO Y MENUDEO Todo tipo de árboles y arbustos ya que contamos con vivero en cuernavaca, veracruz y CDMX</p>
            </div>
        </div>
        <div className="card serv-card" >
            <img src={Icono4} className="card-img-top iconos" alt="..."/>
            <div className="card-body">
                <div>
                    <h5 className="card-title servi-title">DISEÑO Y CONSTRUCCIÓN DE ÁREAS VERDES</h5>
                </div>
                <p className="card-text servi-text">Empresas, Jardines Vericales, Canchas de futbol diseños adhoc a tu espacio</p>
            </div>
        </div>
        <div className="card serv-card" >
            <img src={Icono5} className="card-img-top iconos" alt="..."/>
            <div className="card-body">
                <div>
                    <h5 className="card-title servi-title">SUMINISTRO Y COLOCACIÓN DE CESPED NATURAL</h5>
                </div>
                <p className="card-text servi-text">Maniobra de carreteo, terreno conformado y sambrado de pasto.</p>
            </div>
        </div>
        <div className="card serv-card" >
            <img src={Icono6} className="card-img-top iconos" alt="..."/>
            <div className="card-body">
                <div>
                    <h5 className="card-title servi-title">MACETAS, SUSTRATOS, PIEDRAS Y ARENAS</h5>
                </div>
                <p className="card-text servi-text">Según requerimientos</p>
            </div>
        </div>
        <div className="serv-texto">*Los mejores árboles, nos especializamos en la siembra de estos, desde su nacimiento hasta el momento de su traslado a su nuevo lugar, logrando para que sean fuertes y de la mayor calidad.</div>
    </div>
  )
}

export default ServiciosAcor