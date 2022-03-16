import Carrousel from '../components/Carrousel/Carrousel';
import Servicios from '../components/Servicios/Servicios'
import Contactanos from '../components/Contactanos/Contactanos'
import TuMejorOpcion from '../components/TuMejorOpcion/TuMejorOpcion';
import MisVis from '../components/MisVis/MisVis';

const Landing = () => {
  return (
    <div style={{backgroundColor:'LightGreen'}}>
      <br/>
      <Carrousel/>
      <br/>
      <MisVis/>
      <br/>
      <Servicios/>
      <br/>
      <TuMejorOpcion/>
      <br/>
      <Contactanos/>
      <br/>
    </div>
  )
}

export default Landing