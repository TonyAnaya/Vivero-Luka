import Carrousel from '../components/Carrousel/Carrousel';
import MisVis from '../components/MisVis/MisVis';
import Cifras from '../components/Cifras/Cifras';
import Historia from '../components/Historia/Historia';
import Nosotros from '../components/Nosotros/Nosotros';

const SobreNosotros = () => {
  return (
    <div className="page">
      <Nosotros/>
      <br/>
      <Historia/>
      <br />
      <MisVis/>
      {/* <Cifras/>
      <br/>
      <MisVis/> */}
      <br/>
    </div>
  )
}

export default SobreNosotros