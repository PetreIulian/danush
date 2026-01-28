import NavbarGreen from "../Components/Navbar-Green/NavbarGreen";
import Timer from "../Components/Timer/Timer";
import Printer from "../Components/Printer/Printer";
import Left from "../Assets/left.png";
import Right from "../Assets/right.png";
import "./Dashboard.css";

const Dashboard = () => {
  const printers = [
    { id: 1, status: "busy" },
    { id: 2, status: "warning" },
    { id: 3, status: "available" },
    { id: 4, status: "error" },
    { id: 5, status: "busy" },
    { id: 6, status: "busy" },
  ];

  /*
  const [printers, setPrinters] = useState([]);

  useEffect(() => {
  fetch("/api/printers")
    .then(res => res.json())
    .then(data => setPrinters(data));
  }, []);
  */

  return (
    <section className="section_dashboard">
      <div className="dashboard-container">
        <NavbarGreen />

        <div className="content">
          <div className="timer_container">
            <img src={Left} alt="Matei Stanga" />
            <Timer />
            <img src={Right} alt="Matei Dreapta" />
          </div>

          <div className="printers">
            {printers.map((printer) => (
              <Printer
                key={printer.id}
                number={printer.id}
                status={printer.status}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;