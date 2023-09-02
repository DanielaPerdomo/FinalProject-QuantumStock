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
    setClient({
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

  const handleDeleteClient = (client_id) => {
    actions.deleteClient(client_id)
    actions.getClient()
}

  return (
    <>
      {/* Inicio de Card de clientes */}
      
        <div >
          <h1 className=" text-dark "><i className="fa-solid fa-person-circle-check"></i><span className="m-3">Clientes</span></h1>
        </div>


        {store.cliente.map((item, index) => {

          return (

            <div key={index} className="card " style={{ maxWidth: "18rem" }}>
              <div>
                <img src="" className="card-img-top" alt="..."></img>
              </div>
              <div className="card-body "  >
                <div className="d-flex justify-content-center">
                  <h5 className="card-title  m-1 fs-6"><i className="fa-solid fa-address-book"></i> &ensp;Datos del Cliente</h5>
                </div>
                <span className="card-text  m-2 fs-6 "><i className="fa-solid fa-user"></i>&ensp;Nombre: {item.name_client}</span><br />
                <span className="card-text m-2 fs-6 "><i className="fa-solid fa-envelope"></i>&ensp;Correo Electronico:{item.email_client}</span><br />
                <span className="card-text  m-2 fs-6"><i className="fa-solid fa-phone"></i>&ensp;Telefono:{item.phone_client}</span><br />
                <span className="card-text  m-2 fs-6"><i className="fa-solid fa-city"></i>&ensp;Direccion:{item.address_client}</span><br />
                <span className="card-text  m-2 fs-6"><i className="fa-solid fa-file-lines"></i>&ensp; RIF:{item.rif_client}</span><br />
                <div className="d-flex justify-content-between m-1 ">
                  <button type="button"className="btn border border-primary"
                   onClick={(event) => {
                    setClient(prev => ({
                      name_client: item.name_client,
                      email_client: item.email_client,
                      phone_client: item.phone_client,
                      address_client: item.address_client,
                      rif_client: item.rif_client,
                        id: item.id
                    }))
                    console.log(event.target.getAttribute('data-modal-name'))
                }} data-modal-name={item.id} data-bs-toggle="modal" data-bs-target={`#updateProduct`} data-bs-whatever="@mdo"
                  ><i className="fa-regular fa-pen-to-square"></i> &ensp; Editar</button>
                  <button type="button" className="btn border border-danger"
                   onClick={() => {
                    handleDeleteClient(item.id)
                }}
                  ><i className="fa-regular fa-trash-can">
                    
                  </i> &ensp; Eliminar</button>
                </div>
              </div>
            </div>

          )

        })
        }
        {/* FIN DEL CARD DE CLIENTE */}

        {/* INICIO MODAL NUEVO CLIENTE */}
        <button type="button" className="btn btn-outline-primary m-2" data-bs-toggle="modal" data-bs-target="#createClient" data-bs-whatever="@mdo">
          <i className="fa-regular fa-square-plus"></i>
        </button>

        <ModalClient
          id={"createClient"}
          handleUpdate={createClient}
          handleInfo={handleInfo}
          data={client}


        />

        <ModalClient
                id={"updateProduct"}
                handleUpdate={actions.putClient}
                handleInfo={handleInfo}
                data={client}
                resetForm={resetForm}
            />
     
    </>

  )
}