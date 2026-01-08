import Navbar from "../Components/Navbar/Navbar";
import { useState } from "react";
import Timer from "../Components/Timer/Timer";
import Printer from "../Components/Printer/Printer";

const Dashboard = () => {
  const [start, setStart] = useState(true);;

  return (
    <section>
      <Navbar />
      <div className="dashboard-content">
        <Timer duration={24 * 60 * 60 * 1000} start={start} />
        <div className="printer-container">
          <Printer />
        </div>  
      </div>
    </section>  
  );
};

export default Dashboard;
