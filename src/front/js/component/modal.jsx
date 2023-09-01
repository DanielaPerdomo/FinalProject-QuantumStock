import React, { useEffect } from "react";



export const Modal = ({ handleInfo, handleUpdate, data, id, resetForm = () => { } }) => {

    const sendForm = (event) => {
        event.preventDefault()
        if (data.id != undefined) {
            handleUpdate(data)
            resetForm()
            return
        }
        handleUpdate(event)
    }

    useEffect(() => {
        return resetForm()
    }, [])
    return (

        <div className="modal fade" id={id} tabIndex="-1" aria-labelledby={id + `Label`} aria-hidden="true" >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5 text-dark" id={id + `Label`}><i className="fa-brands fa-product-hunt"></i>&ensp;Datos de Producto {data.id}</h1>
                        <button type="button" onClick={resetForm} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={sendForm}>
                            <div className="mb-1">
                                <label htmlFor="recipient-name" className="col-form-label"><i className="fa-solid fa-box-open"></i>&ensp;Nombre del Producto:</label>
                                <input type="text" className="form-control" id="recipient-name" onChange={handleInfo} required name="product_name" value={data.product_name} />
                            </div>
                            <div className="mb-1">
                                <label htmlFor="recipient-name" className="col-form-label"><i className="fa-solid fa-circle-info"></i>&ensp;Descripción:</label>
                                <input type="text" className="form-control" id="recipient-name" onChange={handleInfo} required name="description" value={data.description} />
                            </div>
                            <div className="mb-1">
                                <label htmlFor="recipient-name" className="col-form-label"><i class="fa-solid fa-arrow-up-wide-short"></i>&ensp;Cantidad:</label>
                                <input type="text" className="form-control" id="recipient-name" onChange={handleInfo} required name="item" value={data.item} />
                            </div>
                            <div className="mb-1">
                                <label htmlFor="recipient-name" className="col-form-label"><i className="fa-solid fa-money-bill-wave"></i>&ensp;Precio:</label>
                                <input type="text" className="form-control" id="recipient-name" onChange={handleInfo} required name="price" value={data.price} />
                            </div>
                            <div className="mb-1">
                                <label htmlFor="recipient-name" className="col-form-label"><i className="fa-solid fa-calendar-days"></i>&ensp;Fecha de Ingreso:</label>
                                <input type="text" className="form-control" id="recipient-name" onChange={handleInfo} required name="admission_date" value={data.admission_date} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" onClick={resetForm} className=" btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className=" btn btn-primary">Guardar</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div >
    )
}