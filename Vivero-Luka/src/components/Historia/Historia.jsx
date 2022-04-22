import "./Historia.css";
import bosque from './assets/bosque.jpg'

const Historia = () => {

  /*Prueba*/
  return (
    <div className="card mb-3" >
      <img src={bosque} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Viveros Rulcas</h5>
        <p className="card-text">
        Somos una empresa Mexicana 100% la cual aparece a mediados del 2017 en la ciudad de México haciendo una alianza con agricultores mexicanos dedicados a la siembra de individuos arbóreos y arbustivos, buscando siempre contar con las mejores germinaciones desde su inicio y hasta el final del mismo para obtener el mejor producto por especie y con la intención de poder cumplir con los requerimientos de nuestros clientes ofreciendo trabajo digno a las familias que se dedicar al campo y siembra de este producto siempre apegados a las mejores prácticas para garantizar por lo menos el 90% la supervivencia y el 100%  la entrega  los mismos 
        Siempre buscando cual es la necesidad y juntos poder realizar resarcimientos, siempre al cuidado del planeta, de nuestro país, ofreciendo productos naturales con la intención de renovar los espacios que por alguna razón han tenido la necesidad de tener cambios de árboles y arbustos.
        Nuestros viveros y producción de Individuos arbóreos se encuentran en Zacualpan Veracruz, en un espacio de 10 Hectáreas bajo un clima templado y riego a través de pozos
          <br />
          Dirección: se cuenta con una tienda de exhibición en el mercado de Nativitas Xochimilco ubicado en antiguo camino a Nativitas Sin Numero en el barrio de Xochimilco CP16050.
        </p>
      </div>
    </div>
  );
};

export default Historia;
