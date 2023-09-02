import React, { useState, useEffect, useContext } from "react";
import "../../styles/dashboardPage.css";
import { Context } from "../store/appContext";


export const DashboardHome = () => {
  const { actions, store } = useContext(Context);

  return (
    <div className="d-flex justify-content-center m-5 animate__animated animate__fadeInDown">

      <div className="card text-bg-primary  m-2" style={{ "minWidth": "15rem" }}>
        <div className="card-header"><i className="fa-solid fa-warehouse fa-fade"></i>&ensp;Almacen</div>
        <div className="card-body">

          <h6 className="card-text">Nombre:</h6><br />
          <h6 className="card-text">Direccion:</h6><br />
          <h6 className="card-text">RIF:</h6><br />
        </div>
      </div>

      <div className="card text-bg-dark  m-2" style={{ "minWidth": "15rem" }}>
        <div className="card-header"><i className="fa-brands fa-product-hunt fa-fade"></i>&ensp;Productos</div>
        <div className="card-body">
          <h6 className="card-text">Total de Productos:</h6>
        </div>
      </div>

      <div className="card text-bg-secondary  m-2" style={{ "minWidth": "15rem" }}>
        <div className="card-header"><i className="fa-solid fa-person-circle-check fa-fade"></i>&ensp;Clientes</div>
        <div className="card-body">
          <h6 className="card-text">Total de Clientes:</h6>
        </div>
      </div>

      <div className="card text-bg-info  m-2" style={{ "minWidth": "15rem" }}>
        <div className="card-header"><i className="fa-solid fa-people-carry-box fa-fade"></i>&ensp;Proveedores</div>
        <div className="card-body">
          <h6 className="card-text">Total de Proveedores:</h6>
        </div>
      </div>
    </div>
  )
}
