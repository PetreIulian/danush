import Navbar from "../Components/Navbar/Navbar";
import { useState } from "react";
import Timer from "../Components/Timer/Timer";

const Dashboard = () => {
  const [start, setStart] = useState(true);;

  return (
    <div>
      <Navbar />
      <Timer duration={24 * 60 * 60 * 1000} start={start} />
    </div>  
  );
};

export default Dashboard;
