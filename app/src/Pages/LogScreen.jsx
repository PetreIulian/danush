import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../Components/Auth/auth";
import Nav from "../Components/Nav-Log/nav-log";
import { UserAuth } from "../Context/AuthContext";

const LogScreen = () => {
  const { user } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <section>
      <Nav />
      <Auth />
    </section>
  );
};

export default LogScreen;
