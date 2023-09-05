import React, { useState, useEffect, useContext } from "react";
import "../../styles/dashboardPage.css";
import { Context } from "../store/appContext";


export const DashboardHome = () => {
  const { actions, store } = useContext(Context);

  return (

    <div className="row row-cols-1 row-cols p-0 mt-2 animate__animated animate__fadeInDown">

      <div className="col col-md-4 mb-4 card border-primary m-1" style={{ "minWidth": "5rem" }}>
        <div className="card-header text-white bg-primary"><i className="fa-solid fa-warehouse fa-fade"></i>&ensp;Almacen</div>
        <div className="card-body">

          <h5 className="card-title">Título de la tarjeta Info</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Un elemento</li>
            <li className="list-group-item">Un segundo elemento</li>
            <li className="list-group-item">Un tercer elemento</li>
          </ul>

          <div className="card-footer">
            Pie de tarjeta
          </div>

        </div>
      </div>

      <div className="col col-md-4 mb-4 card border-secondary m-1" style={{ "minWidth": "5rem" }}>
        <div className="card-header text-white bg-secondary "><i className="fa-brands fa-product-hunt fa-fade"></i>&ensp;Productos</div>
        <div className="card-body">

          <h5 className="card-title">Título de la tarjeta Info</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Un elemento</li>
            <li className="list-group-item">Un segundo elemento</li>
            <li className="list-group-item">Un tercer elemento</li>
          </ul>

          <div className="card-footer">
            Pie de tarjeta
          </div>

        </div>
      </div>

      <div className="col col-md-4 mb-4 card border-info m-1" style={{ "minWidth": "5rem" }}>
        <div className="card-header text-dark bg-info "><i className="fa-solid fa-person-circle-check fa-fade"></i>&ensp;Clientes</div>
        <div className="card-body">

          <h5 className="card-title">Título de la tarjeta Info</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Un elemento</li>
            <li className="list-group-item">Un segundo elemento</li>
            <li className="list-group-item">Un tercer elemento</li>
          </ul>

          <div className="card-footer">
            Pie de tarjeta
          </div>

        </div>
      </div>

      <div className="col col-md-4 mb-4 card border-dark m-1" style={{ "minWidth": "5rem" }}>
        <div className="card-header text-white bg-dark "><i className="fa-solid fa-people-carry-box fa-fade"></i>&ensp;Proveedores</div>
        <div className="card-body">

          <h5 className="card-title">Título de la tarjeta Info</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Un elemento</li>
            <li className="list-group-item">Un segundo elemento</li>
            <li className="list-group-item">Un tercer elemento</li>
          </ul>

          <div className="card-footer">
            Pie de tarjeta
          </div>

        </div>
      </div>

    </div>
  )
}
