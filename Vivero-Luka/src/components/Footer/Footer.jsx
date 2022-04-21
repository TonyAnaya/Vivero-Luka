import Logo from "./assets/isotiporulcas.png";
import './Footer.css'

const Footer = () => {
  return (
    <div className="d-flex footy" id='footer'>
        <div className="foot-logo">
            <img src={Logo} className="logo-foot"></img>
            <h1 href="#"> Viveros Rulcas</h1>
            <h6>Desarrollado por &lt;Insert Name&gt;</h6>
        </div>
    </div>
  )
}

export default Footer