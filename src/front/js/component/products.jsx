import React, { useState, useEffect, useContext } from "react";
import "../../styles/homeForm.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from 'sonner'
export const Products = () => {
    const { store, actions } = useContext(Context);
    //Inicio Codigo de Jose
    const [products, setProducts] = useState({
        product_name: "",
        description: "",
        item: "",
        price: "",
        admission_date: "",
    })

    const handleInfo = (event) => {
        setProducts({
            ...products,
            [event.target.name]: event.target.value //Fin de codigo de Jose
        })
    }


    const resetForm = () => {
        setProducts({
            product_name: "",
            description: "",
            item: "",
            price: "",
            admission_date: ""
        });

    };
    async function createProduct(event) {
        event.preventDefault();
        try {
            const opts = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(products)

            };

            const resp = await fetch(process.env.BACKEND_URL + "api/product", opts);
            if (resp.ok) {
                resetForm();
                actions.getProduct()
                toast.success('Registro de Producto Exitoso')
                return await resp.json();
            } else {
                return toast.error("Producto creado exitosamente")
            }
        } catch (error) {
            console.error("There was an Error!!!", error);
        };
    };

    return (

        <>
            <div>
                <Toaster position="top-right" richColors />
                <h1 className=" text-dark "><i className="fa-brands fa-product-hunt" /><span className="m-3">Productos</span></h1>
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

                    {store.product.map((item, index) => {
                        return (
                            
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.product_name}</td>
                                <td>{item.description}</td>
                                <td>{item.item}</td>
                                <td>{item.price}</td>
                                <td>{item.admission_date}</td>
                                <td>
                                    <button type="button" className="btn btn-outline-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                                        <i className="fa-regular fa-pen-to-square"></i>
                                    </button>
                                    <button type="button" className="btn btn-outline-danger m-2" data-bs-whatever="@mdo"
                                     onClick={()=>{actions.deleteProduct(item.id)}}

                                    
                                    
                                    >
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
                                <h1 className="modal-title fs-5 text-dark" id="exampleModalLabel">Datos de Producto</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={createProduct }>
                                    <div className="mb-1">
                                        <label htmlFor="recipient-name" className="col-form-label">Nombre del Producto:</label>
                                        <input type="text" className="form-control" id="recipient-name" onChange={handleInfo} required name="product_name" value={products.product_name} />
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="recipient-name" className="col-form-label">Descripción:</label>
                                        <input type="text" className="form-control" id="recipient-name" onChange={handleInfo} required name="description" value={products.description} />
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="recipient-name" className="col-form-label">Cantidad:</label>
                                        <input type="text" className="form-control" id="recipient-name" onChange={handleInfo} required name="item" value={products.item} />
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="recipient-name" className="col-form-label">Precio:</label>
                                        <input type="text" className="form-control" id="recipient-name" onChange={handleInfo} required name="price" value={products.price} />
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="recipient-name" className="col-form-label">Fecha de Ingreso:</label>
                                        <input type="text" className="form-control" id="recipient-name" onChange={handleInfo} required name="admission_date" value={products.admission_date} />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className=" btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="submit"  className=" btn btn-primary">Crear Producto</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>



    )
}



