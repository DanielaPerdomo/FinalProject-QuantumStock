import React,{useState,useContext} from "react";
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
  async function createProduct(event) {
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
              <button className="btn border border-primary" >Editar</button>
              <button className="btn border border-danger">Eliminar</button>
            </div>
          </div>
        </div>

        {/* INICIO MODAL NUEVO CLIENTE */}
        {/* <!-- Button trigger modal --> */}
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>

        {/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        {/* FIN DE MODAL NUEVO CLIENTE */}
      </div>
    </>

  )
}