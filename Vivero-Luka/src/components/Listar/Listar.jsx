import { React, useEffect, useState } from "react";
import { getProspect } from "../../api/api";

const Listar = () => {
  const [prospects, setProspects] = useState([]);

  //Fetch Prospects from Api
  useEffect(() => {
    let handleProspects = async () => {
      let response = await getProspect();
      setProspects(response);
    };
    handleProspects();
  }, []);

  console.log(prospects);

  return (
    <div className="container">
      Prospectos
      <div className="prospectsFlex">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Correo electrónico</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Fecha</th>
            </tr>
          </thead>
          {prospects.map((prospect) => {
            return (
              <tbody key={prospect.id}>
                <tr>
                  <th scope="row">{prospect.id}</th>
                  <td>{prospect.nombre}</td>
                  <td>{prospect.correo_electronico}</td>
                  <td>{prospect.telefono}</td>
                  <td>{prospect.fecha}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Listar;
