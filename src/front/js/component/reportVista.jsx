
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

export const ReportVista = () => {
    const [report, setReport] = useState([])
    const { store, actions } = useContext(Context);
    async function getReport() {
        // event.preventDefault();

        try {
            const response = await fetch(process.env.BACKEND_URL + "api/reports", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${store.token}`
                },
            })
            if (response.ok) {
                const body = await response.json()
                setReport(body)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getReport()
    }, [])

    return (
        <>
            <div >

                <h1 className="text-light mb-2"><i className="fa-regular fa-folder-open"></i><span className="m-3">Reportes</span></h1>
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
                {report.map((item, index) => {

                    return (

                        <SwiperSlide key={index} className="card myCard" style={{ "maxWidth": "40rem" }}>

                            <div className="dataClient mb-auto p-2">
                                <div className="userIcon-name text-center">
                                    <h5 className="card-text  m-2">{item.name_client}</h5>
                                </div>

                                <div className="user-info  mt-3 d-block align-items-start">
                                <span className="d-flex">Email : &ensp;<span className="text-secondary">{item.client_email}</span></span><br />
                                    <span className="d-flex">&ensp;Descripcion: &ensp; <span className="text-secondary">{item.buy_order[0].product.description}</span></span><br />
                                    
                                    <span className="d-flex">&ensp;Cantidad: &ensp;<span className="text-secondary">{item.buy_order[0].amount}</span></span><br />
                                    <span className="d-flex">&ensp;Nombre : &ensp;<span className="text-secondary">{item.buy_order[0].product.product_name}</span></span><br />
                                    <span className="d-flex">&ensp;Precio : &ensp;<span className="text-secondary">{item.buy_order[0].product.price}</span></span><br />
                                </div>

                            </div>

                        </SwiperSlide>
                    )
                })
                }

            </Swiper>

            {/* <div className="card container-fluid d-flex justify-content-center" style={{ "maxWidth": "18rem" }} >
                <ul className="list-group list-group-flush">
                    {report.map((item, index) => {
                        console.log(item)
                        return (
                            <>

                                <li key={index} className="list-group-item"> Email del cliente: {item.client_email}</li>
                                <li key={index} className="list-group-item">cantidad: {item.buy_order[0].amount}</li>
                                <li key={index} className="list-group-item">Nombre del producto: {item.buy_order[0].product.product_name}</li>
                                <li key={index} className="list-group-item">Precio del producto: {item.buy_order[0].product.price}</li>
                                <li key={index} className="list-group-item">Descripción del producto: {item.buy_order[0].product.description}</li>
                                <li key={index} className="list-group-item">Nombre del cliente: {item.name_client}</li>

                            </>

                        )

                    })


                    }

                </ul>
            </div > */}


        </>

    )

}