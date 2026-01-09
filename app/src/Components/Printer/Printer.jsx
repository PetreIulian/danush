import React from "react"
import "./Printer.css"

function Printer() {
    return (
        <div className="container">
            <h1 className="title-text">Imprimanta 1</h1>
            <div className="status-container">
                <h2 className="status-text">Status: </h2>
                <span className="status-label"></span>
            </div>
        </div>
    )
}

export default Printer