import React, { useState, useEffect, useContext } from "react";
import "../../styles/dashboardPage.css";
import { Context } from "../store/appContext";


export const DashboardHome = () => {
  const { actions, store } = useContext(Context);

  return (
    <div className="container text-center gap-4 animate__animated animate__fadeInDown">
      <div className="row prueba2 p-0 mt-2 m-5 d-flex justify-content-center ">


        {/*  CARD 1 */}
        <div className="col col-md-4 mb-4 card m-1 fondo" style={{ "minWidth": "5rem" }}>

          <div className="card-header text-white">
          <i className="fa-solid fa-warehouse fa-fade"></i>
            &ensp; Almacen
          </div>

          <div className="card-body text-white">
          
          </div>

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

          <div className="card-body  text-white bg-transparent">
          <table className="bg-transparent">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Fecha de Ingreso</th>
                        
                    </tr>
                </thead>

                <tbody className="table-group-divider">

                    {store.product.map((item, index) => {
                        return (

                            <tr key={index}>
                                <td>{item.product_name}</td>
                                <td>{item.description}</td>
                                <td>{item.item}</td>
                                <td>{item.price}</td>
                                <td>{item.admission_date}</td>
                                <td>
                                    
                                </td>
                            </tr>

                        )
                    })
                    }
                </tbody>
            </table>

          </div>

    
          {/* <div className="card-footer">
            Pie de tarjeta
          </div> */}
        </div>

        {/*  CARD 3 */}
        <div className="col col-md-4 mb-4 card m-1 fondo" style={{ "minWidth": "5rem" }}>

          <div className="card-header text-white">
            <i className="fa-solid fa-people-carry-box fa-fade"></i>
            &ensp;Proveedores
          </div>

          <div className="card-body text-white">
            <p>3</p>
            <p>3</p>
            <p>3</p>
            <p>3</p>
          </div>

          {/* <div className="card-footer">
            Pie de tarjeta
          </div> */}
        </div>

        {/*  CARD 4 */}
        <div className="col col-md-4 mb-4 card m-1 fondo" style={{ "minWidth": "5rem" }}>

          <div className="card-header text-white">
            <i className="fa-solid fa-person-circle-check"></i>
            &ensp;Clientes
          </div>

          <div className="card-body text-white">
            <p>4</p>
            <p>4</p>
            <p>4</p>
            <p>4</p>
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