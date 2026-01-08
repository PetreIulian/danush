import React from "react";
import "./nav-log.css";
import LogoCC from "../../Assets/LogoCC.svg";
import LogoOSFIIR from "../../Assets/LogoOSFIIR.svg";
  

const Nav = () => {
  return (
     <section className="nav-log">
        <div className="logo_container">
          <a href="https://cadathon.osfiir.ro"><img id="LogoCC" src={LogoCC} alt="LogoCC" /></a>
          <a href="https://osfiir.ro"><img id="LogoOSFIIR" src={LogoOSFIIR} alt="LogoOSFIIR" /></a>
        </div>
     </section>         
    );
};

export default Nav;