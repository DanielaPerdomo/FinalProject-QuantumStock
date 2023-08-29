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

     <div className="modal fade" id={id} tabIndex="-1" aria-labelledby={id + `Label`} aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5 text-dark" id="exampleModalLabel">Datos del Almacen</h1>
                    <button type="button" className="btn-close"  onClick={resetForm} data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form onSubmit={sendForm}>
                        <div className="mb-1">
                            <label htmlFor="recipient-name" className="col-form-label">Nombre:</label>
                            <input type="text" className="form-control" id="recipient-name" required value={data.nameStock}
                                onChange={handleInfo} />
                        </div>

                        <div className="mb-1">
                            <label htmlFor="recipient-name" className="col-form-label">Address:</label>
                            <input type="text" className="form-control" id="recipient-name" required value={data.address}
                                onChange={handleInfo} />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="recipient-name" className="col-form-label">Rif:</label>
                            <input type="text" className="form-control" id="recipient-name"
                                required
                                value={data.rif}
                                onChange={handleInfo} />
                        </div>
                        <button type="button" onClick={resetForm} className=" btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" className=" btn btn-primary">Crear Almacen</button>

                    </form>
                </div>
                <div className="modal-footer">


                </div>
            </div>
        </div>
    </div>
    )
}