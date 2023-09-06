import React, { useState, useEffect, useContext } from "react";
import "../../styles/dashboardPage.css";
import { Context } from "../store/appContext";


export const DashboardHome = () => {

  const { store, actions } = useContext(Context);
  return (
    <div className="container text-center gap-4 animate__animated animate__fadeInDown">
      <div className="row prueba2 p-0 mt-2 m-5 d-flex justify-content-center ">


        {/*  CARD 1 */}
        <div className="col col-md-4 mb-4 card m-1 fondo" style={{ "minWidth": "5rem" }}>

          <div className="card-header text-white">
            <i className="fa-solid fa-warehouse fa-fade"></i>
            &ensp; Almacen
          </div>

          {store.almacen.map((item, index) => {

            return (
              <div key={index} className="card-body text-white">
                <p>Nombre: {item.name_Stock}</p>
                <p>Direccion: {item.address}</p>
                <p>RIF: {item.rif}</p>
              </div>

            )

          })}

          {/* <div className="card-footer text-white">
            Pie de tarjeta
          </div> */}
        </div>

        {/*  CARD 2 */}
        <div className="col col-md-4 mb-4 card m-1 fondo" style={{ "minWidth": "5rem" }}>

          <div className="card-header text-white">
            <i className="fa-brands fa-product-hunt fa-fade"></i>
            &ensp;Productos
          </div>
          <div className="card-body text-white">
         {
          store.product.length == 0 ? (
                           <p>Ningun producto añadido</p>

          ):(
           <p>Total de Productos Cargados:&ensp;{store.product.length} </p>
           )
          }
          </div>


          {/* <div className="card-footer">
            Pie de tarjeta
          </div> */}
        </div>

    
        
        {/*  CARD 3 */}
        <div className="col col-md-4 mb-4 card m-1 fondo" style={{ "minWidth": "5rem" }}>

          <div className="card-header text-white">
            <i className="fa-solid fa-person-circle-check fa-fade"></i>
            &ensp;Clientes
          </div>

          <div className="card-body text-white">

          {
          store.cliente.length == 0 ? (
                           <p>Ningun cliente añadido</p>

          ):(
           <p>   Total de Cliente:&ensp;{store.cliente.length} </p>
           )
          }          
          </div>

          {/* <div className="card-footer">
            Pie de tarjeta
          </div> */}
        </div>

      </div>
    </div>

  )
}



/* row-cols-1 row-cols esto se quito del div con clase prueba2*/ 