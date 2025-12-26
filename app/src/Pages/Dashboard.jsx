import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

const Dashboard = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/");
  }, [user, navigate]);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{user?.displayName}</p>
      <button onClick={logOut}>Logout</button>
    </div>
  );
};

export default Dashboard;
