
import React from "react";
import { ModalBuyOrder } from "./modalBuyOrder.jsx";







export const BuyOrder = () => {

    return (
        <>
            <div className="container-fluid d-flex justify-content-center">
                <button type="button" className="btn btn-outline-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                    <i className="fa-solid fa-square-plus"></i>&ensp;Crear Orden de Compra
                </button>
            </div>

            <ModalBuyOrder
                // id={""}
                // handleUpdate={},
                // handleInfo={},
                // data={},
            />
        </>
    )

}