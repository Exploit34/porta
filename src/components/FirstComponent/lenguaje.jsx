import React from "react";
import { IconContext } from "react-icons";
import { RiJavascriptFill } from 'react-icons/ri';
import { DiPython, DiJava,
         DiRuby, DiPerl,
         DiPhp, DiRust} from 'react-icons/di'
import { BiLogoTypescript } from 'react-icons/bi'
import { SiKotlin } from 'react-icons/si'

export const Conectar = () => {
  return (
    <IconContext.Provider value={{ className: "global-class-name w-14 h-14"} }>
      <div>
        <div>
          <h2><i>LENGUAJES DE PROGRAMACION</i></h2>
        </div>
        <br/>
        <div className="progra">
          <p>Python</p>
            <DiPython />
          {/* ----------- */}
          <p>Javascript</p>
            <RiJavascriptFill/>
          {/* ----------- */}
          <p>Java</p>
            <DiJava/>
          {/* ----------- */}
          <p>Ruby</p>
            <DiRuby/>
          {/* ----------- */}
          <p>Perl</p>
            <DiPerl/>
          {/* ----------- */}
          <p>Php</p>
            <DiPhp/>
          {/* ---------- */}
          <p>Rust</p>
            <DiRust/>
          {/* ----------- */}
          <p>Typescript</p>
            <BiLogoTypescript/>
          {/* ----------- */}
          <p>kotli</p>
            <SiKotlin/>
        </div>
      </div>
    </IconContext.Provider>
  );
};