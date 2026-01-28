import React from "react";
import "./About.css";
import NavbarYellow from "../Components/Navbar-Yellow/NavbarYellow";
import PrinterInfo from "../Components/PrinterInfo/PrinterInfo"

const About = () => {
  const text = [
    { name: "SV 06 Plus", dimension: "300cm x 300cm", speed: "150 mm/s" },
    { name: "SV 06 Ace", dimension: "250cm x 250cm", speed: "300 mm/s" },
    { name: "Zortrak", dimension: "1000cm x 1000cm", speed: "50 mm/s" }
  ];

  return (
    <section className="section_about">       
      <div className="about-container"> 
        <NavbarYellow />
        <div className="PrintersInfo">
          {text.map((printer, index) => (
            <PrinterInfo
            key={index}
            name={printer.name}
            dimension={printer.dimension}
            speed={printer.speed}
            />
          ))}
        </div>
      </div>
    </section>
    );  
};

export default About;