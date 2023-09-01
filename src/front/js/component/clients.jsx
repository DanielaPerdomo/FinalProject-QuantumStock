import React, { useState, useContext } from "react";
import { ModalClient } from "./modalClient.jsx";
import { Context } from "../store/appContext";
import { Toaster, toast } from 'sonner'


export const Clients = () => {
  const { store, actions } = useContext(Context);

  const [client, setClient] = useState({
    name_client: "",
    email_client: "",
    phone_client: "",
    address_client: "",
    rif_client: "",
  })
  const handleInfo = (event) => {
    setClient({
      ...client,
      [event.target.name]: event.target.value //Fin de codigo de Jose
    })
  }

  const resetForm = () => {
    setProducts({
      name_client: "",
      email_client: "",
      phone_client: "",
      address_client: "",
      rif_client: ""
    });

  };
  async function createClient(event) {
    event.preventDefault();

    try {
      const opts = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${store.token}`
        },
        body: JSON.stringify(client)

      };

      const resp = await fetch(process.env.BACKEND_URL + "api/client", opts);
      if (resp.ok) {
        resetForm();
        actions.getClient()
        toast.success('El cliente se creo exitosamente')
        return await resp.json();
      } else {
        return toast.error("El cliente no pudo crearse")
      }
    } catch (error) {

      console.error("There was an Error!!!", error);
    };
  };



  return (
    <>
      {/* Inicio de Card de clientes */}
      <div className=" ">
        <div >
          <h1 className=" text-dark "><i className="fa-solid fa-person-circle-check"></i><span className="m-3">Clientes</span></h1>
        </div>


        {store.cliente.map((item, index) => {

          return (

            <div className="card " style={{ maxWidth: "18rem" }}>

              <div className="card-body "  >
                <div className="d-flex justify-content-center">
                  <h5 className="card-title  m-1 fs-6">Algo</h5>
                </div>
                <p></p>
                  <p className="card-text  m-1 fs-6 ">Nombre del cliente: Juan  </p>
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

          )

        })
        }


        {/* FIN DEL CARD DE CLIENTE */}

        {/* INICIO MODAL NUEVO CLIENTE */}
        <button type="button" className="btn btn-outline-primary m-2" data-bs-toggle="modal" data-bs-target="#createClient">
          <i className="fa-regular fa-square-plus"></i>
        </button>


        <ModalClient
          id={"createClient"}

        />
      </div>
    </>

  )
}