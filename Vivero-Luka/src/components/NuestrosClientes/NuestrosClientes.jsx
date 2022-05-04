import React from "react";
import "./NuestrosClientes.css";
import unam from "./assets/unam.png";
import ipn from "./assets/ipn.png"
import cpa from './assets/cpa.png'
import odonel from './assets/odonel.png'

const NuestrosClientes = () => {
  return (
    <div>
      <h1 className='tituloClientes'>Algunos de nuestros clientes</h1>
      <div className="nuestrosClientes">
        <img src={unam} alt="..." className="imgClientes" />
        <img src={ipn} alt="..." className="imgClientes" />
        <img src={cpa} alt="..." className="imgClientes" />
        <img src={odonel} alt="..." className="imgClientes" />

      </div>
    </div>

    //   <div className="container row clien" id='flex-cointainer-clientes'>
    //   <h1 className='tituloClientes'>Algunos de nuestros clientes</h1>
    //   <div className="container row" id='flex-container'>
    //     <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4" id='flex'>
    //       <div className="col">
    //         <div className="card">
    //           <img src={empresa} className="card-img-top serv-imag " id='imgEmpresa' alt="..." />
    //         </div>
    //       </div>
    //       <div className="col">
    //         <div className="card">
    //           <img src={empresa} className="card-img-top serv-imag" id='imgEmpresa' alt="..." />
    //         </div>
    //       </div>
    //       <div className="col">
    //         <div className="card" id='empresaCont'>
    //           <img src={empresa} className="card-img-top serv-imag" id='imgEmpresa' alt="..." />
    //         </div>
    //       </div>
    //       <div className="col">
    //         <div className="card">
    //           {/* <img src={empresa} className="card-img-top serv-imag" id='imgEmpresa' alt="..." /> */}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default NuestrosClientes;
