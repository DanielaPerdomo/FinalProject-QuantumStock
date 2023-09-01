import React from "react";
import { ModalClient } from "./modalClient.jsx";

export const Clients = () => {

  return (
    <>
      {/* Inicio de Card de clientes */}
      <div className=" ">
        <div >
          <h1 className=" text-dark "><i className="fa-solid fa-person-circle-check"></i><span className="m-3">Clientes</span></h1>
        </div>

        <div className="card " style={{ maxWidth: "18rem" }}>
          <div>
            <img src="" className="card-img-top" alt="..."></img>
          </div>
          <div className="card-body "  >
            <div className="d-flex justify-content-center">
              <h5 className="card-title  m-1 fs-6">Algo</h5>
            </div>
            <p className="card-text  m-1 fs-6 ">Nombre del cliente:Juan  </p>
            <p className="card-text m-1 fs-6 ">Email del cliente: Juan@juan.com</p>
            <p className="card-text  m-1 fs-6">Telefono del cliente: </p>
            <p className="card-text  m-1 fs-6">Dirección del cliente: </p>
            <p className="card-text  m-1 fs-6">Rif del cliente: </p>
            <div className="d-flex justify-content-between m-1 ">
              <button className="btn border border-primary"><i className="fa-regular fa-pen-to-square"></i> &ensp; Editar</button>
              <button className="btn border border-danger"><i className="fa-regular fa-trash-can"></i> &ensp; Eliminar</button>
            </div>
          </div>
        </div>
        {/* FIN DEL CARD DE CLIENTE */}

        {/* INICIO MODAL NUEVO CLIENTE */}
        <button type="button" className="btn btn-outline-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <i className="fa-regular fa-square-plus"></i>
        </button>
        <ModalClient />
      </div>
    </>

  )
}