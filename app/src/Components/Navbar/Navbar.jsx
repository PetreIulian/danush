import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

import { UserAuth } from "../../Context/AuthContext";
import LogoCC from "../../Assets/LogoCC.svg";
import LogoOSFIIR from "../../Assets/LogoOSFIIR.svg";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const toggleMenu = () => {
    setIsMenuClicked((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuClicked(false);
  };

  useEffect(() => {
    if (!user) navigate("/");
  }, [user, navigate]);

  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsMenuClicked(false);
    }
  };

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo-container">
          <a href="https://cadathon.osfiir.ro"><img id="LogoCC-nav" src={LogoCC} alt="LogoCC" /></a>
          <a href="https://osfiir.ro"><img id="LogoOSFIIR-nav" src={LogoOSFIIR} alt="LogoOSFIIR" /></a>
        </div>

        <ul className="nav-links">
          <li>
            <NavLink to="/dashboard">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">Imprimante</NavLink>
          </li>
          <li>
            <NavLink to="/rules">Regulament Imprimare</NavLink>
          </li>
        </ul>

        <div className="user-action">
          <p>{user?.displayName}</p>
          <button onClick={logOut}>Logout</button>
        </div>

        <div
          className={`burger-menu ${isMenuClicked ? "clicked" : ""}`}
          onClick={toggleMenu}
        >
          <div className="burger"></div>
          <div className="burger"></div>
          <div className="burger"></div>
        </div>
      </div>

      <div className={`menu-class ${isMenuClicked ? "visible" : "hidden"}`}>
        <ul>
          <li>
            <NavLink to="/dashboard" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu}>
              Imprimante
            </NavLink>
          </li>
          <li>
            <NavLink to="/rules" onClick={closeMenu}>
              Regulament Imprimare
            </NavLink>
          </li>
          <li>
            <p>{user?.displayName}</p>
          </li>
          <li>
            <button onClick={logOut}>Logout</button>
          </li>  
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
