import "./PrinterInfo.css"
import PrinterImg from "../../Assets/SV06PLUS.png"

function PrinterInfo({ name, dimension, speed}) {
    return (
        <div className="PrinterInfo-Container">
            <div className="Printer-Avatar">
                <img src={PrinterImg} alt="Printer" />
            </div>

            <div className="PrinterInfo-Card">
                <ul className="Wrapper">
                    <li>Nume Imprimantă: {name}</li>
                    <li>Dimensiune Pat: {dimension}</li>
                    <li>Viteză Printare: {speed}</li>
                </ul>
            </div>
        </div>
    );
};

export default PrinterInfo;
