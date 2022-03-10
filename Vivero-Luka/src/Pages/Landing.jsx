import React from 'react';
import Carrousel from '../components/Carrousel/Carrousel';
import Servicios from '../components/Servicios/Servicios'
import Contactanos from '../components/Contactanos/Contactanos'

const Landing = () => {
  return (
    <div style={{backgroundColor:'LightGreen'}}>
      <Carrousel/>
      <br/>
      <Servicios/>
      <br/>
      <Contactanos/>
      <br/>
    </div>
  )
}

export default Landing