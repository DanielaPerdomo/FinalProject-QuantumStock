import React, { useState, useContext, useRef } from "react";
import { ModalClient } from "./modalClient.jsx";
import { Context } from "../store/appContext";
import { Toaster, toast } from 'sonner'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import "../../styles/clients.css"
import { Card } from "./prueba.jsx";


export const Clients = () => {
  const { store, actions } = useContext(Context);
  const [swiperRef, setSwiperRef] = useState(null);

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
        <Toaster position="top-right" richColors />
        <h1 className="text-light mb-2"><i className="fa-solid fa-person-circle-check"></i><span className="m-3">Clientes</span></h1>
      </div>

      <Swiper className="container MySwiper mt-2 mb-1"
        modules={[Navigation]} navigation={true}

      >

        {store.cliente.map((item, index) => {

          return (

            <SwiperSlide key={index} className="card myCard" style={{ "maxWidth": "17rem" }}>

              <div className="dataClient mb-auto p-2">
                <div className="userIcon-name text-center">
                  <i className="fa-solid fa-user fs-1 logo-user"></i>&ensp;
                  <h6 className="card-text  m-2 fs-4">{item.name_client}</h6>
                </div>

                <div className="user-info  mt-3 d-block align-items-start">
                  <p className="card-text m-2 fs-6"><i className="fa-solid fa-envelope m-1"></i>&ensp;{item.email_client}</p>
                  <p className="card-text  m-2 fs-6"><i className="fa-solid fa-phone"></i>&ensp;Telefono:&ensp;{item.phone_client}</p>
                  <p className="card-text  m-2 fs-6"><i className="fa-solid fa-city"></i>&ensp;Direccion:&ensp;{item.address_client}</p>
                  <p className="card-text  m-2 fs-6"><i className="fa-solid fa-file-lines"></i> &ensp;RIF:&ensp;{item.rif_client}</p>
                </div>

              </div>

              <div className="d-flex justify-content-center p-1">
                <button type="button" className="btn btn-primary m-2"
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
                ><i className="fa-regular fa-pen-to-square"></i>  Editar</button>
                <button type="button" className="btn btn-danger m-2"
                  onClick={() => {
                    handleDeleteClient(item.id)
                  }}
                ><i className="fa-regular fa-trash-can">

                  </i>&ensp;Eliminar</button>
              </div>
              {/* </div> */}
            </SwiperSlide>

          )

        })
        }
      </Swiper>
      {/* FIN DEL CARD DE CLIENTE */}

      {/* INICIO MODAL NUEVO CLIENTE */}
      <div className="container-fluid d-flex justify-content-center">
        <button type="button" className="btn btn-outline-primary AddButton m-2" data-bs-toggle="modal" data-bs-target="#createClient" data-bs-whatever="@mdo">
          <i className="fa-solid fa-square-plus"></i>&ensp;Crear nuevo cliente
        </button>
      </div>

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