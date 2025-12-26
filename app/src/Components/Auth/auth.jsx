import React from "react";
import "./auth.css";
import GoogleLogo from "../../Assets/GoogleLogo.svg";

const Auth = () => {
  return (
     <section className="auth-section">
        <div className="auth-container">
          <div className="text-container">
            <h1>Autentificare</h1>
            <span clasName="line"></span>
            <h2>Conectează-te pentru a accesa dashboardul evenimetului</h2>
            <button> <img className="GoogleLogo" src={GoogleLogo} alt="GoogleLogo" ></img>Conectează-te</button>
          </div>
        </div>  
     </section>        
    );
};

export default Auth;