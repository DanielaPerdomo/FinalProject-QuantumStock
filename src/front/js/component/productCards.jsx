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

        <>
            <div>
                {/* alerta del producto */}
                <Toaster position="top-right" richColors />
                <h1 className=" text-dark "><i className="fa-brands fa-product-hunt" /><span className="m-3">Productos</span></h1>
            </div>
            {/* CARD PARA MOSTRAR PRODUCTOS CARGADOS EN EL INVENTARIO */}
            <div className="card border-success mb-3" style={{ "max-width": "18rem" }}>
                <div className="card-header bg-transparent border-success">Encabezado</div>
                <div className="card-body text-success">
                    <h5 className="card-title">Título de tarjeta Success</h5>

                    {store.product.map((item, index) => {
                        return (

                            <ul className="list-group" key={index}>
                                <li className="list-group-item">{item.product_name}</li>
                                <li className="list-group-item">{item.description}</li>
                                <li clasclassNames="list-group-item">{item.item}</li>
                                <li className="list-group-item">{item.price}</li>
                                <li className="list-group-item">{item.admission_date}</li>
                            </ul>
                        )
                    }) 
                    }    
                </div>
                <div className="card-footer bg-transparent border-success">
                    <button type="button" className="btn btn-outline-primary m-2" onClick={(event) => {setProducts(prev => ({
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
                </div>
            </div>

            {/* MODAL PARA AGREGAR PRODUCTOS */}
            <div>
                <button type="button" className="btn btn-outline-primary m-2" data-bs-toggle="modal" data-bs-target="#createProduct" data-bs-whatever="@mdo">
                    <i className="fa-regular fa-square-plus"></i>
                </button>
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
        </>

    )
}



