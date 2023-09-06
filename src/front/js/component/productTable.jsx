import React, { useState, useEffect, useContext } from "react";
import "../../styles/homeForm.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from 'sonner'
import { Modal } from "./modal.jsx";

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
                    authorization: `Bearer ${store.token}`
                },
                body: JSON.stringify(products)

            };

            const resp = await fetch(process.env.BACKEND_URL + "api/product", opts);
            if (resp.ok) {
                resetForm();
                actions.getProduct()
                toast.success('El producto se creo exitosamente')
                return await resp.json();
            } else {
                return toast.error("El producto no pudo crearse")
            }
        } catch (error) {

            console.error("There was an Error!!!", error);
        };
    };

    const handleDeleteProduct = (product_id) => {
        actions.deleteProduct(product_id)
        actions.getProduct()
    }

    return (

        <>
            <div>
                <Toaster position="top-right" richColors />
                <h1 className=" text-light "><i className="fa-brands fa-product-hunt" /><span className="m-3">Productos</span></h1>
            </div>
            {/* TABLA DE MOSTRAR PRODUCTOS CARGADOE EN EL INVENTARIO */}
            <table className="tableProducts table table-responsive table-hover m-1 mt-5 animate__animated animate__fadeInDown">
                <thead>
                    <tr>
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
                                <td>{item.product_name}</td>
                                <td>{item.description}</td>
                                <td>{item.item}</td>
                                <td>{item.price}</td>
                                <td>{item.admission_date}</td>
                                <td>
                                    <button type="button" className="btn btn-outline-primary m-2" onClick={(event) => {
                                        setProducts(prev => ({
                                            product_name: item.product_name,
                                            description: item.description,
                                            item: item.item,
                                            price: item.price,
                                            admission_date: item.admission_date,
                                            id: item.id
                                        }))
                                        console.log(event.target.getAttribute('data-modal-name'))
                                    }} data-modal-name={item.id} data-bs-toggle="modal" data-bs-target={`#updateProduct`} data-bs-whatever="@mdo">
                                        <i className="fa-regular fa-pen-to-square"></i>
                                    </button>
                                    <button type="button" className="btn btn-outline-danger m-2" data-bs-whatever="@mdo"
                                        onClick={() => {
                                            handleDeleteProduct(item.id)
                                        }}
                                    >
                                        <i className="fa-regular fa-trash-can"></i>
                                    </button>
                                </td>
                            </tr>

                        )
                    })
                    }
                </tbody>
            </table>

            {/* MODAL PARA AGREGAR PRODUCTOS */}

            <div className="container-fluid d-flex justify-content-center">
                <button type="button" className="btn btn-outline-primary AddButton m-2" data-bs-toggle="modal" data-bs-target="#createProduct" data-bs-whatever="@mdo">
                <i className="fa-solid fa-square-plus"></i>&ensp;Crear nuevo producto
                </button>
            </div>

            {/* <div>
                <button type="button" className="btn btn-outline-primary m-2" data-bs-toggle="modal" data-bs-target="#createProduct" data-bs-whatever="@mdo">
                    <i className="fa-regular fa-square-plus"></i>
                </button>
            </div> */}

            <Modal
                id={"createProduct"}
                handleUpdate={createProduct}
                handleInfo={handleInfo}
                data={products}
            />
            <Modal
                id={"updateProduct"}
                handleUpdate={actions.putProduct}
                handleInfo={handleInfo}
                data={products}
                resetForm={resetForm}
            />
        </>

    )
}



