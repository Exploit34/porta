import React from "react"
import  {Navbar}  from "./navbar.jsx"
import {SectionOne} from "./sectionOne.jsx"


export const FirstComponent = () => {
  const navstyle={
    display:"flex",
  }

  return (
    <div id="total">
    <div id="menuP" style={navstyle}>
      <h1></h1>
      <Navbar/>
      </div>
    <div id="inf">
      <SectionOne></SectionOne>
    </div>
    </div>
  )
}
