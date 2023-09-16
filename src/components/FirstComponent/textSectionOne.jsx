import React from "react"

export const TextSectionOne = () => {
  const textStyle={
    marginTop: "50px"
  }

  return (
    <div className="texto" style={textStyle}>
      <h2>PORTAFOLIO PERSONAL</h2>
      <br/>
      <p>   Mi nombre es Esteban Herrera soy autodidacto me gusta
      <br/> la ciberseguridad, sistemas, software, computacion, AI,
      <br/> etc...
      <br/>
      <br/> Ultimamente estoy en worldskill, bootcamp y un
      <br/> hacktoon de ciberseguridad ya que esto me apasiona.</p>
      <br/>
      <footer>
        <p>contacto</p>
        <br/>
        <p>
          <img src="../public/img/wha.png"
          className="h-5 w-5"/> 
          +57300611****
        </p>
      </footer>
    </div>
  )
}
