import React, { useEffect } from "react";



export const ModalClient = ({ handleInfo, handleUpdate, data, id, resetForm = () => { } }) => {

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
        <div>
            {/* INICIO DE MODAL DE PRUEBA */}
            <div className="modal fade" id={id} tabIndex="-1" aria-labelledby={id + `Label`} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title text-dark fs-5" id={id + `Label`}><i className="fa-solid fa-person-circle-check fa-fade"></i> &ensp; Datos del Cliente {data.id}</h1>
                            <button type="button" onClick={resetForm}  className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={sendForm}>
                                <div className="mb-1">
                                    <label htmlFor="recipient-name"  className="col-form-label"><i className="fa-solid fa-user"></i> &ensp; Nombre:</label>
                                    <input type="text" className="form-control" id="recipient-name" onChange={handleInfo} required name="name_client" value={data.name_client} />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="recipient-name"  className="col-form-label"><i className="fa-solid fa-envelope"></i> &ensp; Correo Electronico:</label>
                                    <input type="text" className="form-control" id="recipient-name" onChange={handleInfo} required name="email_client" value={data.email_client} />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="recipient-name"  className="col-form-label"> <i className="fa-solid fa-phone"></i> &ensp; Telefono:</label>
                                    <input type="text" className="form-control" id="recipient-name" onChange={handleInfo}  required name="phone_client" value={data.phone_client}/>
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="recipient-name"  className="col-form-label"><i className="fa-solid fa-city"></i> &ensp; Direccion:</label>
                                    <input type="text" className="form-control" id="recipient-name" onChange={handleInfo}  required name="address_client" value={data.address_client}/>
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="recipient-name"  className="col-form-label"><i className="fa-regular fa-file-lines"></i> &ensp; RIF:</label>
                                    <input type="text" className="form-control" id="recipient-name" onChange={handleInfo} required name="rif_client" value={data.rif_client} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={resetForm} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* FIN DE MODAL DE PRUEBA */}
        </div>


    )
}