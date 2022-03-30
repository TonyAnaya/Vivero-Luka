import React from 'react'
import './NuestrosClientes.css'
import empresa from './assets/empresa.jpg'

const NuestrosClientes = () => {
  return (
    <div className="container row servi">
    <h1 className='tituloClientes'>Algunos de nuestros clientes</h1>
    <div className="container row" id='flex-container'>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4" id='flex'>
        <div className="col">
          <div className="card">
            <img src={empresa} className="card-img-top serv-imag " id='imgEmpresa' alt="..." />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={empresa} className="card-img-top serv-imag" id='imgEmpresa' alt="..." />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={empresa} className="card-img-top serv-imag" alt="..." />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={empresa} className="card-img-top serv-imag" id='imgEmpresa' alt="..." />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NuestrosClientes