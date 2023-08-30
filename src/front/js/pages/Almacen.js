import React, { useState, useContext } from "react";
import { Toaster, toast } from 'sonner'
import { Context } from "../store/appContext.js";
import { ModalStock } from "../component/modalStock.jsx";

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
        console.log("me ejeuto",event.target.name)
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

            // if (store.almacen.length < 1) {

                const resp = await fetch(process.env.BACKEND_URL + "api/stock", opts);

                if (resp.ok) {
                    resetForm();
                    toast.success('Registro de Almacen exitoso')
                    actions.getStock()
                    return await resp.json();


                } else {
                    return toast.error("Hubo un error")
                }
            // } else {
            //     resetForm();
            //     return toast.error("Almacen ya creado")
            // }



        } catch (error) {
            console.error("There was an Error!!!", error);
        };
    };

    const handleDeleteStock = () => {
         actions.deleteStock()
         actions.getStock()
    }
    return (
     <>
        
            <Toaster position="top-center" richColors />
            <div >
                <h1 className=" text-dark "><i className="fa-solid fa-warehouse"></i><span className="m-3">Almacen</span></h1>
            </div>
            {/* TABLA DE MOSTRAR PRODUCTOS CARGADOE EN EL INVENTARIO */}
            <table className="tableProducts table table-responsive table-hover m-1 mt-5 ">
                <thead className="">

                    <tr >
                        <th scope="col">Nombre del almacen</th>
                        <th scope="col">Direccion</th>
                        <th scope="col">Rif</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {
                    Object.keys(store.almacen).length > 0 ? (
                        Object.keys(store.almacen).map((itemId, index) => {
                            const item = store.almacen[itemId];
                            return (
                                <tr key={index}>
                                    <td>{item.name_Stock}</td>
                                    <td>{item.address}</td>
                                    <td>{item.rif}</td>
                                    <td>
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
                                            <i className="fa-regular fa-pen-to-square"></i>
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-danger m-2"
                                            data-bs-whatever="@mdo"
                                            onClick={() => {
                                                handleDeleteStock()
                                            }}
                                            
                                        >
                                            <i className="fa-regular fa-trash-can"></i>
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td colSpan="4">Añadir Almacen</td>
                        </tr>
                    )
                }
          </tbody>


            </table>

            {/* MODAL PARA AGREGAR ALMACEN*/}
            <div>
                <button type="button" className="btn btn-outline-primary m-2" data-bs-toggle="modal" data-bs-target="#creat_stock" data-bs-whatever="@mdo">
                    <i className="fa-regular fa-square-plus"></i>
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
        </>
           

       
    )

}