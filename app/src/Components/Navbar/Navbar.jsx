import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";
import LogoCC from "../../Assets/LogoCC.svg";
import LogoOSFIIR from "../../Assets/LogoOSFIIR.svg";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!user) navigate("/");
  }, [user, navigate]);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo-container">
          <img id="LogoCC" src={LogoCC} alt="LogoCC" />
          <img id="LogoOSFIIR" src={LogoOSFIIR} alt="LogoOSFIIR" />
        </div>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><NavLink to="/dashboard" onClick={() => setOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={() => setOpen(false)}>Imprimante</NavLink></li>
          <li><NavLink to="/rules" onClick={() => setOpen(false)}>Regulament Imprimare</NavLink></li>
        </ul>

        <div className="user-action">
          <p>{user?.displayName}</p>
          <button onClick={logOut}>Logout</button>
        </div>
        <div className={`hamburger ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
