
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Toaster, toast } from "sonner";
import { Almacen } from "../pages/Almacen";






export const BuyOrder = () => {
    const { store, actions } = useContext(Context);

    const [report, setReport] = useState({

        email_client:""

    })

    const handleInfo = (event) => {
        setReport({
            ...report,
            [event.target.name]: event.target.value //Fin de codigo de Jose
        })
    }
    const resetForm = () => {
        setReport({

            email_client: ""

        });

    };

    async function createBusqueda(event) {
        event.preventDefault();
        
       
         const reporte = {}
        try {
            const opts = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${store.token}`

                },
                // body: JSON.stringify(report)

            };

            const resp = await fetch(process.env.BACKEND_URL + `api/clients?search=${report.email_client}`, opts);
            if (resp.ok) {
                //resetForm();

                // actions.getReport()
                console.log("soy exitoso")
                toast.success('Busqueda exitosa')
                const body = await resp.json()
                  {reporte:body}
               console.log(reporte)
                return 
            } else {
                return toast.error("Nose encontro el cliente")
            }
        } catch (error) {

            console.error("There was an Error!!!", error);
        };
    };

    async function createReport(event) {
        event.preventDefault();

        try {
            const opts = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${store.token}`
                },
                body: JSON.stringify(report)

            };

            const resp = await fetch(process.env.BACKEND_URL + "api/report", opts);
            if (resp.ok) {
                resetForm();
                // actions.getReport()
                console.log("soy exitiso")
                toast.success('El reporte se creo exitosamente')
                
                return await resp.json();
            } else {
                return toast.error("El reporte no pudo crearse")
            }
        } catch (error) {

            console.error("There was an Error!!!", error);
        };
    };

    return (
        <>

<Toaster position="top-right" richColors />
            <div className="row d-flex justify-content-center">
                <div className="col-10">

                    <h3 className="text-white">Introducir Email del cliente</h3>
                    <form onSubmit={createBusqueda}>
                        <div className="input-group mb-3">

                            <input type="text" className="form-control" placeholder="email" aria-label="Recipient's username" aria-describedby="button-addon2"
                                required value={report.email_client} name="email_client"
                                onChange={handleInfo}
                            />
                            <button className="btn btn-outline-secondary" type="submit" id="button-addon2 " >Buscar</button>
                        </div>
                    </form>



                    <div className="container-fluid d-flex justify-content-center">
                        <button type="button" className="btn btn-outline-primary m-2" >
                            <i className="fa-solid fa-square-plus"></i>&ensp;Crear Reporte
                        </button>
                    </div>

                </div>
            </div>
        </>
    )

}