import React from "react";
import { Navbar } from "./navbar";
import { Conectar } from "./lenguaje";
import { Ciber} from "./ciberseguridad"

export const ModuloDos = () => {
  return (
    <div className="d">
      <div className="es">
          <Navbar />
        </div>
        <br/>
        <div className="di">
          <Conectar/>
        </div>
        <br/>
        <div className="ci">
          <Ciber/>
        </div>
    </div>
  );
};







