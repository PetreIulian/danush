import React from "react";
import "./Rules.css";
import NavbarYellow from "../Components/Navbar-Yellow/NavbarYellow";

const Rules = () => {
  return (
    <section className="section_rules">   
      <div className="rules-container">  
        <NavbarYellow  />
        <h1 className="rules-title">Regulament Imprimare</h1>
        <ul className="writen-content">
          <li id="p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra dignissim mauris ac tristique. Nulla hendrerit nec erat bibendum lacinia. Aenean cursus nibh eget odio bibendum aliquet. Nunc eu sapien vel diam posuere tincidunt vitae eget lectus. Fusce vel nisi vel nisi pulvinar luctus quis non erat. Nulla porta ex id volutpat feugiat. Maecenas suscipit elit et dignissim ullamcorper. Mauris enim est, bibendum quis purus sit amet, dignissim posuere tortor. </li>
          <li id="p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra dignissim mauris ac tristique. Nulla hendrerit nec erat bibendum lacinia. Aenean cursus nibh eget odio bibendum aliquet. Nunc eu sapien vel diam posuere tincidunt vitae eget lectus. Fusce vel nisi vel nisi pulvinar luctus quis non erat. Nulla porta ex id volutpat feugiat. Maecenas suscipit elit et dignissim ullamcorper. Mauris enim est, bibendum quis purus sit amet, dignissim posuere tortor. </li>
          <li id="p3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra dignissim mauris ac tristique. Nulla hendrerit nec erat bibendum lacinia. Aenean cursus nibh eget odio bibendum aliquet. Nunc eu sapien vel diam posuere tincidunt vitae eget lectus. Fusce vel nisi vel nisi pulvinar luctus quis non erat. Nulla porta ex id volutpat feugiat. Maecenas suscipit elit et dignissim ullamcorper. Mauris enim est, bibendum quis purus sit amet, dignissim posuere tortor. </li>
        </ul>
      </div>    
    </section>
    );  
};

export default Rules;   