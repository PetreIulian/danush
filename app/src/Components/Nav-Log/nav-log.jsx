import React from "react";
import "./nav-log.css";
import LogoCC from "../../Assets/LogoCC.svg";
import LogoOSFIIR from "../../Assets/LogoOSFIIR.svg";
  

const Nav = () => {
  return (
     <section className="nav-log">
        <div className="logo_container">
          <img id="LogoCC" src={LogoCC} alt="LogoCC" />
          <img id="LogoOSFIIR" src={LogoOSFIIR} alt="LogoOSFIIR" />
        </div>
     </section>         
    );
};

export default Nav;