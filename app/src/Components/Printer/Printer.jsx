import React from "react"
import "./Printer.css"

function Printer({ number, status }) {
return (
    <div className={`printer-container ${status}`}>
        <h1 className="printer-title">Imprimantă {number}</h1>
        <h2 className="status-text">Status:</h2>
        <span className="status-dot" />
    </div>
    );
}

export default Printer