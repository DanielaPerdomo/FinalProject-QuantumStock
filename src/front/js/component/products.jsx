import React, { useState, useEffect } from "react";
import "../../styles/homeForm.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Products = ({}) => {

    

    const [products, setProducts]= useState({
        name: "", 
        description: "",
        stock: "",
        price: "",
        admissionDate: "",
    })


    console.log(products)


    const handleInfo = (event) => {
        console.log(event)
        setProducts({
            ...products, 
            [event.target.name] : event.target.value
        })
    }

    return (

        <>
            <div>
                <h1 className=" text-dark "><i className="fa-brands fa-product-hunt"/><span className="m-3">Productos</span></h1>
            </div>
            {/* TABLA DE MOSTRAR PRODUCTOS CARGADOE EN EL INVENTARIO */}
            <table className="tableProducts table table-responsive table-hover m-1 mt-5">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Fecha de Ingreso</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    <tr>
                        <th scope="row">1</th>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>
                            <button type="button" className="btn btn-outline-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                                <i class="fa-regular fa-pen-to-square"></i>
                            </button>
                            <button type="button" className="btn btn-outline-danger m-2" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                                <i class="fa-regular fa-trash-can"></i>
                            </button>
                        </td>

                    </tr>
                </tbody>
            </table>

            {/* MODAL PARA AGREGAR PRODUCTOS */}
            <div>
                <button type="button" className="btn btn-outline-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                    <i className="fa-regular fa-square-plus"></i>
                </button>

                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 text-dark" id="exampleModalLabel">Datos de Producto</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-1">
                                        <label htmlFor="recipient-name" className="col-form-label">Nombre del Producto:</label>
                                        <input type="text" className="form-control" id="recipient-name" onChange={handleInfo} name="name" value={products.name}/>
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="recipient-name" className="col-form-label">Descripción:</label>
                                        <input type="text" className="form-control" id="recipient-name" onChange={handleInfo} name="description" value={products.description}/>
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="recipient-name" className="col-form-label">Cantidad:</label>
                                        <input type="text" className="form-control" id="recipient-name" onChange={handleInfo} name="stock" value={products.stock}/>
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="recipient-name" className="col-form-label">Precio:</label>
                                        <input type="text" className="form-control" id="recipient-name" onChange={handleInfo} name="price" value={products.price}/>
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="recipient-name" className="col-form-label">Fecha de Ingreso:</label>
                                        <input type="text" className="form-control" id="recipient-name"onChange={handleInfo}  name="admissionDate" value={products.admissionDate}/>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className=" btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className=" btn btn-primary">Send message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>



    )
}



