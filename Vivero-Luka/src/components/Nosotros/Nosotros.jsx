import React from 'react'
import nosotros from './assets/vivero.png'
import './Nosotros.css'

const Nosotros = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={nosotros} className="d-block w-100 imagencita" alt="..." />
        <div className="carousel-caption d-none d-md-block" id='tituloImg'>
          <h5>Apasionados por la naturaleza</h5>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Nosotros