import React from "react";
import { IconContext } from "react-icons";
import { AiFillWindows } from 'react-icons/ai'
import { DiLinux, DiMysql,
         DiMongodb } from 'react-icons/di'
import { SiMicrosoftsqlserver, SiCyberdefenders } from 'react-icons/si'
import { LuNetwork } from 'react-icons/lu'

export const Ciber = () => {
    return(
        <IconContext.Provider value={{ className: "global-class-name w-14 h-14"} }>
            <div>
                <div>
                    <h2><i>CIBERSEGURIDAD</i></h2>
                </div>
                <br/>
                <div>
                    <h2><i>|HABILIDADES|</i></h2>
                </div>
                <p><i>Sistemas Operativos</i></p>
                <div className="ciber">
                    <p>windows</p>
                    <AiFillWindows/>
                    {/* ------------- */}
                    <p>Linux</p>
                    <DiLinux/>
                </div>
                <br/>
                <p>Bases de datos</p>
                <div className="base">
                    <p>Sql Server</p>
                    <SiMicrosoftsqlserver/>
                    {/* ------------ */}
                    <p>Mysql</p>
                    <DiMysql/>
                    {/* ------------  */}
                    <p>MongoBD</p>
                    <DiMongodb/>
                </div>
                <br/>
                <p>Redes</p>
                <div className="red">
                    <p>CCST</p>
                    <LuNetwork/>
                </div>
                <br/>
                <p></p>
            </div>
        </IconContext.Provider>
    );
};