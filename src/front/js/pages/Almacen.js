import React, { useState, useContext } from "react";
import { Toaster, toast } from 'sonner'
import { Context } from "../store/appContext.js";
import { ModalStock } from "../component/modalStock.jsx";
import "../../styles/dashboardPage.css";

export const Almacen = () => {
    const { store, actions } = useContext(Context);
    //cambios 
    const [Stock, setStock] = useState({

        name_Stock: "",
        address: "",
        rif: "",
    })

    const handleInfo = (event) => {
        setStock({
            ...Stock,
            [event.target.name]: event.target.value

            //Fin de codigo de Jose
        })
        /* console.log("me ejeuto",event.target.name) */
    }
    const resetForm = () => {
        setStock({
            name_Stock: "",
            address: "",
            rif: "",
        });
    };
    async function creat_stock(event) {
        event.preventDefault();

        try {
            const opts = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${store.token}`
                },
                body: JSON.stringify(Stock)



            };

            if (store.almacen.length < 1) {

                const resp = await fetch(process.env.BACKEND_URL + "api/stock", opts);

                if (resp.ok) {
                    resetForm();
                    toast.success('Registro de Almacen exitoso')
                    actions.getStock()
                    return await resp.json();


                } else {
                    return toast.error("Hubo un error")
                }
            } else {
                resetForm();
                return toast.error("Almacen ya creado")
            }



        } catch (error) {
            console.error("There was an Error!!!", error);
        };
    };

    const handleDeleteStock = () => {
        actions.deleteStock()
        actions.getStock()
    }
    return (
        <div className="">
            <Toaster position="top-center" richColors />
            <div >
                <h1 className=" text-light "><i className="fa-solid fa-warehouse"></i><span className="m-3">Almacen</span></h1>
            </div>

            {/* INICIO DEL CARD DE LA INFORMACION DEL ALMACEN */}

            <div className="elementsLayout container text-center gap-4 animate__animated animate__fadeInDown cardStock">
                <div className="elementsLayout row ">

                    {
                        Object.keys(store.almacen).map((itemId, index) => {
                            const item = store.almacen[itemId];
                            return (
                                <div className="col col-md-4 mb-4 card m-1 fondo" style={{ "maxWidth": "30rem" }}>
                                    <div key={index}>
                                        <div className="card-header text-white">
                                            <i className="fa-solid fa-warehouse fa-fade"></i>
                                            &ensp; {item.name_Stock}
                                        </div>

                                        <div className="card-body text-white">
                                            
                                            <span className="d-flex"><i className="fa-solid fa-city"></i>&ensp;Direccion:&ensp;<span className="text-secondary">{item.address}</span></span><br />
                                            
                                            <span className="d-flex"><i className="fa-solid fa-file-lines"></i>&ensp; RIF:&ensp;<span className="text-secondary">{item.rif}</span></span><br />

                                            <span className="d-flex"><i className="fa-solid fa-file-lines"></i>&ensp; Total de Productos:&ensp;<span className="text-secondary">{store.product.length - 1}</span></span><br />

                                            <div className="actionButton card-footer text-white">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-primary m-2"


                                                    onClick={(event) => {
                                                        setStock(prev => ({
                                                            name_Stock: item.name_Stock,
                                                            address: item.address,
                                                            rif: item.rif,

                                                            id: item.id
                                                        }))
                                                        console.log(event.target.getAttribute('data-modal-name'))
                                                    }}
                                                    data-modal-name={item.id}
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#updateStock`}
                                                    data-bs-whatever="@mdo"
                                                >
                                                    <i className="fa-regular fa-pen-to-square"></i>&ensp;Editar
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-danger m-2"
                                                    data-bs-whatever="@mdo"
                                                    onClick={() => {
                                                        handleDeleteStock()
                                                    }}

                                                >
                                                    <i className="fa-regular fa-trash-can"></i>&ensp;Eliminar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })

                    }
                </div>

            </div>
            {/* MODAL PARA AGREGAR ALMACEN*/}
            <div className="container-fluid d-flex justify-content-center">
                <button type="button" className="btn btn-outline-primary AddButton m-2" data-bs-toggle="modal" data-bs-target="#creat_stock" data-bs-whatever="@mdo">
                    <i className="fa-solid fa-square-plus"></i>&ensp;Crear nuevo almacen
                </button>
            </div>

            <ModalStock
                id={"creat_stock"}
                handleUpdate={creat_stock}
                handleInfo={handleInfo}
                data={Stock}
            />
            <ModalStock
                id={"updateStock"}
                handleUpdate={actions.putStock}
                handleInfo={handleInfo}
                data={Stock}
                resetForm={resetForm}
            />
        </div>
    )
}
