import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";




export const Report = ({ dataReport }) => {
    const { store, actions } = useContext(Context)
    const [buyOrder, setBuyOrder] = useState({ product_id: "", amount: "" })
    return (
        <form >
            <select
                value={buyOrder.product_id}
                class="form-select"
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
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>

            <button type="submit" class="btn btn-primary">Agregar al reporte</button>
        </form>
    )



}