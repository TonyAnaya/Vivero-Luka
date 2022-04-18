import "./Testimonios.css";

const Testimonio = () => {
  return (
    <div className="container row clien">
      <div className="container row" id='flex-container'>
        <h1 className="opinan">Que opinan de nosotros</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4" id='flex'>
          <div className="col">
              <div className="card clien">
                <div className="card-body">
                  <h3>
                    <cite>"Reforestación facil y eficiente"</cite>
                  </h3>
                  <cite> Ximeno Perez - Proyecto Reforestación</cite>
                </div>
              </div>
          </div>
          <div className="col">
              <div className="card clien">
                <div className="card-body">
                  <h3>
                    <cite>"Mi jardín ahora es de película"</cite>
                  </h3>
                  <cite> Pablo Rodriguez - Proyecto de Jardineria</cite>
                </div>
              </div>
          </div>
          <div className="col">
              <div className="card clien">
                <div className="card-body">
                  <h3>
                    <cite>"Proceso agil y muy sencillo"</cite>
                  </h3>
                  <cite> Andrés Patiño - Proyecto Reforestación</cite>
                </div>
              </div>
          </div>
          <div className="col">
              <div className="card clien">
                <div className="card-body">
                  <h3>
                    <cite>"Cuidar mis platas ahora es más fácil"</cite>
                  </h3>
                  <cite> Laura Sánchez - Consejos y Cuidados</cite>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonio;
