import React from "react";
import "./Whatsapp.css"

const Whatsapp = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
      />
      <a
        href="https://api.whatsapp.com/send?phone=5217223509058&text=Hola%20le%20escribo%20para%20obtener%20informacion%20de%20Viveros%20Rulca"
        className="float"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa fa-whatsapp my-float"></i>
      </a>
    </div>
  );
};

export default Whatsapp;
