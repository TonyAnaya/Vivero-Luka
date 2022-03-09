
import './Contactanos.css'

const Carrousel = () => {
  return (
    <div className="container row contacta">
      <h1 className="cont-titulo">Contactanos</h1>
      <div className="container row text-bl">
        <div className='col-6'>

          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nombre"/>
          </div>

          <div className="mb-3">
            <label for="exampleFormControlInput2" className="form-label">Telefono</label>
            <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="5555-55-55-55"/>
          </div>

          <div className="mb-3">
            <label for="exampleFormControlInput3" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleFormControlInput3" placeholder="name@example.com"/>
          </div>

        </div>
        <div className='col-6'>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
          </div>
        </div>


      </div>
      
      <button className="btn btn-primary boton col-lg-2" type="submit">Enviar</button>
    </div>
  );
};

export default Carrousel;
