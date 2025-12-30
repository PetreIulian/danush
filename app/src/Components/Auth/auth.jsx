import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import GoogleLogo from "../../Assets/GoogleLogo.svg";
import { UserAuth } from "../../Context/AuthContext";

const Auth = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <section className="auth-section">
      <div className="auth-container">
        <div className="text-container">
          <h1>Autentificare</h1>
          <span className="line"></span>
          <h2>Conectează-te pentru a accesa dashboardul evenimentului</h2>
          <button className="log-button" onClick={handleGoogleSignIn}>
            <img className="GoogleLogo" src={GoogleLogo} alt="GoogleLogo" />
            Conectează-te
          </button>
          <span className="line"></span>
          <button className="reg-button">Înregistrare</button>
        </div>
      </div>
    </section>
  );
};

export default Auth;
