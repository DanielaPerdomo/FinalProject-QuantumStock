import React, { useState, useContext } from "react";
import { Toaster, toast } from 'sonner'
import { Context } from "../store/appContext.js";




export const Almacen = () => {

    const { store, actions } = useContext(Context);
    const [address, setAddress] = useState("");
    const [rif, setRif] = useState("");

    const resetForm = () => {
        setAddress("");
        setRif("");

    };

    async function creat_stock(event) {
        event.preventDefault();

        try {
            const opts = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    address: address,
                    rif: rif,

                })
            };

            const resp = await fetch(process.env.BACKEND_URL + "api/stock", opts);

            if (resp.ok) {
                resetForm();
                toast.success('Registro de Almacen exitoso')
                actions.getStock()
                return await resp.json();


            } else {
                return toast.error("Almacen ya creado")
            }


        } catch (error) {
            console.error("There was an Error!!!", error);
        };
    };


    return (
        <div className="">
            <Toaster position="top-right" richColors />
            <div >
                <h1 className=" text-dark "><i className="fa-solid fa-warehouse"></i><span className="m-3">Almacen</span></h1>
            </div>
            {/* TABLA DE MOSTRAR PRODUCTOS CARGADOE EN EL INVENTARIO */}
            <table className="tableProducts table table-responsive table-hover m-1 mt-5 ">
                <thead className="">

                    <tr >
                        <th scope="col">ID</th>
                        <th scope="col">address</th>
                        <th scope="col">Rif</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {store.almacen.map((item, i) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.address}</td>
                                <td>{item.rif}</td>
                                <td>
                                    <button type="button" className="btn btn-outline-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                                        <i className="fa-regular fa-pen-to-square"></i>
                                    </button>
                                    <button type="button" className="btn btn-outline-danger m-2" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                                        <i className="fa-regular fa-trash-can"></i>
                                    </button>
                                </td>
                            </tr>

                        )
                    })}


                </tbody>
            </table>

            {/* MODAL PARA AGREGAR PRODUCTOS */}
            <div>
                <button type="button" className="btn btn-outline-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                    <i className="fa-regular fa-square-plus"></i>
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 text-dark" id="exampleModalLabel">Datos del Almacen</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={creat_stock}>

                                    <div className="mb-1">
                                        <label htmlFor="recipient-name" className="col-form-label">Address:</label>
                                        <input type="text" className="form-control" id="recipient-name" required value={address}
                                            onChange={e => setAddress(e.target.value)} />
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="recipient-name" className="col-form-label">Rif:</label>
                                        <input type="text" className="form-control" id="recipient-name"
                                                required
                                            value={rif}
                                            onChange={e => setRif(e.target.value)} />
                                    </div>
                                    <button type="submit" className=" btn btn-primary">Guardar Almacen</button>
                                </form>
                            </div>
                            <div className="modal-footer">


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}