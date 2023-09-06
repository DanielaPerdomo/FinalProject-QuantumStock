import React, { useState, useEffect, useContext } from "react";
import "../../styles/homeForm.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from 'sonner'
import { Modal } from "./modal.jsx";

export const Products = () => {
    const { store, actions } = useContext(Context);

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

        <div>
            <div>
                <Toaster position="top-right" richColors />
                <h1 className=" text-light "><i className="fa-brands fa-product-hunt" /><span className="m-3">Productos</span></h1>
            </div>
            {/* CARD PARA MOSTRAR PRODUCTOS CARGADOS EN EL INVENTARIO */}

            <div className="container text-center gap-4 animate__animated animate__fadeInDown">
                <div className="row prueba2 p-0 mt-2 m-5 d-flex justify-content-center ">


                    {/*  CARD 1 */}
                    <div className="col col-md-4 mb-4 card m-1 fondo" style={{ "minWidth": "5rem" }}>

                        <div className="card-header text-white">
                            <i className="fa-brands fa-product-hunt fa-fade"></i>
                            &ensp;Nombre del Producto
                        </div>

                        <div className="card-body text-white">
                            <span><i className="fa-solid fa-circle-info"></i>&ensp;Descripción:&ensp;</span><br/>
                            <span><i className="fa-solid fa-arrow-up-wide-short"></i>&ensp;Cantidad:&ensp;</span><br/>
                            <span><i className="fa-solid fa-money-bill-wave"></i>&ensp;Precio:&ensp;</span><br/>
                            <span><i className="fa-solid fa-calendar-days"></i>&ensp;Fecha de Ingreso:&ensp;</span><br/>
                        </div>

                        <div className="card-footer text-white">

                            <button type="button" className="btn btn-outline-primary m-2" data-bs-toggle="modal" data-bs-target="" data-bs-whatever="@mdo">
                                <i className="fa-regular fa-pen-to-square"></i>&ensp;Editar
                            </button>

                            <button type="button" className="btn btn-outline-danger m-2" data-bs-whatever="@mdo">
                                <i className="fa-regular fa-trash-can"></i>&ensp;Eliminar
                            </button>
                        </div>
                    </div>

                    {/* MODAL PARA AGREGAR PRODUCTOS */}
                    <div>
                        <div className="container-fluid d-flex justify-content-center">
                            <button type="button" className="btn btn-outline-primary AddButton m-2" data-bs-toggle="modal" data-bs-target="#createProduct" data-bs-whatever="@mdo">
                                <i className="fa-solid fa-square-plus"></i>&ensp;Crear nuevo producto
                            </button>
                        </div>

                    </div>

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
                </div>
            </div>
        </div>

    )
}