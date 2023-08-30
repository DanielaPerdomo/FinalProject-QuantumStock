import React, { useState, useEffect } from "react";
import "../../styles/dashboardPage.css";

export const DashboardHome = () => {
  return (
    <div className="d-flex justify-content-center m-2 ">
    
      <div className="card text-bg-primary  m-2" style={{"max-width": "18rem"}}>
        <div className="card-header">Almacen</div>
        <div className="card-body">
          <h5 className="card-title">Primary card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>

      <div className="card text-bg-dark  m-2" style={{"max-width": "18rem"}}>
        <div className="card-header">Productos</div>
        <div className="card-body">
          <h5 className="card-title">Primary card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>

      <div className="card text-bg-secondary  m-2" style={{"max-width": "18rem"}}>
        <div className="card-header">Clientes</div>
        <div className="card-body">
          <h5 className="card-title">Primary card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>

      <div className="card text-bg-info  m-2" style={{"max-width": "18rem"}}>
        <div className="card-header">Proveedores</div>
        <div className="card-body">
          <h5 className="card-title">Primary card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  )
}
