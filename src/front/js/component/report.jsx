import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { toast, Toaster } from "sonner";



export const Report = ({ dataReport, handleChange }) => {
    const { store, actions } = useContext(Context)
    const [buyOrder, setBuyOrder] = useState({ product_id: "", amount: "" })

    async function createBuyOrder(event) {
        event.preventDefault();

        try {
            const opts = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${store.token}`
                },
                body: JSON.stringify({
                    ...buyOrder,
                    client_id: dataReport.id,
                    report_id: dataReport.report.id
                })

            };

            const resp = await fetch(process.env.BACKEND_URL + "api/buy-order", opts);
            if (resp.ok) {
                /* resetForm(); */
                // actions.getReport()
                /* console.log("soy exitiso creando la orden") */
                toast.success('Reporte creado exitosamente')
                const body = await resp.json()
                /* setShowReport((prev) => {
                    return {
                        ...prev,
                        report: body.reporte
                    }
                }); */

            } else {
                return toast.error("La orden de compra no pudo crearse")
            }
        } catch (error) {

            console.error("There was an Error!!!", error);
        };
    };


    return (

        <>
            <form onSubmit={createBuyOrder}>
                <select
                    value={buyOrder.product_id}
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(event) => {
                        setBuyOrder((prev) => {
                            return {
                                ...prev,
                                product_id: event.target.value
                            }

                        }
                        )
                    }}
                >
                    <option selected>Selecciona un producto</option>
                    {store.product.map((item, index) => {
                        return (
                            <option value={item.id} key={index}>{item.product_name}</option>
                        )

                    })}
                </select>
                <div className="mb-3">
                    <label htmlFor="amout" className="form-label text-white">Cantidad de productos</label>
                    <input
                        value={buyOrder.amount}
                        onChange={(event) => {
                            setBuyOrder((prev) => {
                                return {
                                    ...prev,
                                    amount: event.target.value
                                }
                            }
                            )
                        }}
                        type="number"
                        className="form-control"
                        id="amout"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="container">
                    <button type="submit" className="btn btn-primary AddButton">Agregar al reporte</button>
                    <button
                        type="button"
                        className="btn btn-primary m-3 AddButton"
                        onClick={handleChange}
                    >
                        finalizar reporte
                    </button>
                </div>

            </form>


        </>

    )



}