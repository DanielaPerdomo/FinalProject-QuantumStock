
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { toast, Toaster } from "sonner";

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

    const deleteReport = async (report_id) => {
        try {
            const response = await fetch(process.env.BACKEND_URL + `api/delete/report/${report_id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify()
            })

            if (response.ok) {
                getReport()
                toast.success("Se elimino el reporte")
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
                <Toaster position="top-right" richColors />
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
                            <div className="d-flex justify-content-center p-1">
                                <button type="button" className="btn btn-danger m-2"
                                    onClick={() => {
                                        deleteReport(item.id)
                                    }}
                                ><i className="fa-regular fa-trash-can">

                                    </i>&ensp;Eliminar</button>
                            </div>

                        </SwiperSlide>
                    )
                })
                }

            </Swiper >

        </>

    )

}