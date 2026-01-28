import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavbarGreen.css";

import { UserAuth } from "../../Context/AuthContext";
import LogoCC from "../../Assets/LogoCCwhite.svg";
import LogoOSFIIR from "../../Assets/LogoOSFIIRwhite.svg";

const NavbarGreen = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const toggleMenu = () => {
    setIsMenuClicked((prev) => {
      const newState = !prev;

      if (newState) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }

      return newState;
    });
  };

  const closeMenu = () => {
    setIsMenuClicked(false);
    document.body.classList.remove("no-scroll");
  };

  useEffect(() => {
    if (!user) navigate("/");
  }, [user, navigate]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuClicked(false);
        document.body.classList.remove("no-scroll");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <nav>
      <div className="nav-container">
        <a href="https://cadathon.osfiir.ro">
          <img id="LogoCC-nav" src={LogoCC} alt="Logo CC" />
        </a>

        <div
          className={`burger-menu ${isMenuClicked ? "clicked" : ""}`}
          onClick={toggleMenu}
        >
          <div className="burger" />
          <div className="burger" />
          <div className="burger" />
        </div>

        <ul className="nav-links">
          <li>
            <NavLink to="/dashboard">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">Despre Imprimante</NavLink>
          </li>
          <li>
            <NavLink to="/rules">Regulament Imprimare</NavLink>
          </li>
          <li>
            <button className="log-btn" onClick={logOut}>
              Log Out
            </button>
          </li>
        </ul>

        <a href="https://osfiir.ro">
          <img id="LogoOSFIIR-nav" src={LogoOSFIIR} alt="Logo OSFIIR" />
        </a>
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
            <button onClick={logOut}>Log Out</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarGreen;