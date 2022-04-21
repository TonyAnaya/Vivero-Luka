import { React, useEffect, useState } from "react";
import { getProspect } from "../../api/api";
import "./Listar.css";

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

  return (
      <div className="container" id="prospectos">
        <h1>Prospectos</h1>
        <div className="prospectsFlex">
          <table class="table table-striped">
            <thead>
              <tr>
                <th className="data" scope="col">
                  id
                </th>
                <th className="data" scope="col">
                  Nombre
                </th>
                <th className="data" scope="col">
                  Mail
                </th>
                <th className="data" scope="col">
                  Teléfono
                </th>
                <th className="data" scope="col">
                  Fecha
                </th>
              </tr>
            </thead>
            {prospects.map((prospect) => {
              return (
                <tbody key={prospect.id}>
                  <tr>
                    <th scope="row" className="data-client">{prospect.id}</th>
                    <td className="data-client">{prospect.nombre}</td>
                    <td className="data-client">{prospect.correo_electronico}</td>
                    <td className="data-client">{prospect.telefono}</td>
                    <td className="data-client">{prospect.fecha}</td>
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
