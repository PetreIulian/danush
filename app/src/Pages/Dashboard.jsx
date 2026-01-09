import Navbar from "../Components/Navbar/Navbar";
import Timer from "../Components/Timer/Timer";
import Printer from "../Components/Printer/Printer";
import "./Dashboard.css";

const Dashboard = () => {

  return (
    <section>
      <Navbar />
      <div className="dashboard-content">
        <div className="timer-container">
          <Timer />
        </div>  
        <div className="printer-container">
          <Printer />
          <Printer />
          <Printer />
          <Printer />
          <Printer />
          <Printer />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
