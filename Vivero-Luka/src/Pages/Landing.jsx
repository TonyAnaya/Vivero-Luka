import Carrousel from '../components/Carrousel/Carrousel';
import Servicios from '../components/Servicios/Servicios'
import Contactanos from '../components/Contactanos/Contactanos'
import TuMejorOpcion from '../components/TuMejorOpcion/TuMejorOpcion';
import MisVis from '../components/MisVis/MisVis';
import NuestrosClientes from '../components/NuestrosClientes/NuestrosClientes';
import QuienesSomos from '../components/QuienesSomos/QuienesSomos'
import Testimonios from '../components/Testimonios/Testimonios'

const Landing = () => {
  return (
    <div className="page">
      <Carrousel/>
      <br/>
      <QuienesSomos/>
      {/* <br />
      <MisVis/> */}
      <br/>
      <Servicios/>
      <br/>
      <TuMejorOpcion/>
      <br />
      <NuestrosClientes/>
      <br/>
      <Testimonios/>
      <br />
      <Contactanos/>
      <br/> 
      
    </div>
  )
}

export default Landing