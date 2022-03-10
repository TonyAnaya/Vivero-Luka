import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Landing from "./Pages/Landing";
import Catalogo from "./Pages/Catalogo";
import Compensacion from "./Pages/Compensacion";
import Contacto from "./Pages/Contacto";
import Servicios from "./Pages/Servicios";
import SobreNosotros from "./Pages/SobreNosotros";
import Trabajos from "./Pages/Trabajos";
import Listar from "./Pages/Listar";
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

ReactDOM.render(
  <BrowserRouter >
    <Navbar/>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/Catalogo" element={<Catalogo />} />
      <Route path="/Compensacion" element={<Compensacion />} />
      <Route path="/Contacto" element={<Contacto />} />
      <Route path="/Servicios" element={<Servicios />} />
      <Route path="/SobreNosotros" element={<SobreNosotros />} />
      <Route path="/Trabajos" element={<Trabajos />} />
      <Route path="/Listar" element={<Listar />} />
    </Routes>
    <Footer/>
  </BrowserRouter>,
  document.getElementById("root")
);
