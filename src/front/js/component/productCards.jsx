import React, { useState, useEffect, useContext } from "react";
import "../../styles/dashboardPage.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from 'sonner'
import { Modal } from "./modalProduct.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

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
                <Toaster position="top-right" richColors />
                <h1 className=" text-light "><i className="fa-brands fa-product-hunt" /><span className="m-3">Productos</span></h1>
            </div>

            <Swiper className="container MySwiper mt-2 mb-1"
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}

                modules={[EffectCoverflow]}
            >

                {store.product.map((item, index) => {

                    return (

                        <SwiperSlide key={index} className="card myCard" style={{ "maxWidth": "17rem" }}>

                            <div className="dataClient mb-auto p-2">
                                <div className="userIcon-name text-center">
                                    <h5 className="card-text  m-2">{item.product_name}</h5>
                                </div>

                                <div className="user-info  mt-3 d-block align-items-start">
                                    <span className="d-flex"><i className="fa-solid fa-circle-info"></i>&ensp;Descripcion: &ensp; <span className="text-secondary">{item.description}</span></span><br />
                                    <span className="d-flex"><i className="fa-solid fa-arrow-up-wide-short"></i>Cantidad: &ensp;<span className="text-secondary">{item.item}</span></span><br />
                                    <span className="d-flex"><i className="fa-solid fa-money-bill-wave"></i>&ensp;Precio:&ensp;<span className="text-secondary">{item.price}</span></span><br />
                                    <span className="d-flex"><i className="fa-solid fa-calendar-days"></i>&ensp;Fecha de Ingreso:&ensp;<span className="text-secondary">{item.admission_date}</span></span><br />
                                </div>

                            </div>

                            <div className="d-flex justify-content-center p-1">
                                <button type="button" className="btn btn-primary m-2"
                                    onClick={(event) => {
                                        setProducts(prev => ({
                                            product_name: item.product_name,
                                            description: item.description,
                                            item: item.item,
                                            price: item.price,
                                            admission_date: item.admission_date,
                                            id: item.id
                                        }))
                                        console.log(event.target.getAttribute('data-modal-name'))
                                    }} data-modal-name={item.id} data-bs-toggle="modal" data-bs-target={`#updateProduct`} data-bs-whatever="@mdo"
                                ><i className="fa-regular fa-pen-to-square"></i>  Editar</button>
                                <button type="button" className="btn btn-danger m-2"
                                    onClick={() => {
                                        handleDeleteProduct(item.id)
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

            <div>
                {/* CARD PARA MOSTRAR PRODUCTOS CARGADOS EN EL INVENTARIO */}



                {/* MODAL PARA AGREGAR PRODUCTOS */}
                <div>
                    <div className="container-fluid d-flex justify-content-center">
                        <button type="button" className="btn btn-outline-primary AddButton m-2 mt-4" data-bs-toggle="modal" data-bs-target="#createProduct" data-bs-whatever="@mdo">
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
        </>

    )
}



