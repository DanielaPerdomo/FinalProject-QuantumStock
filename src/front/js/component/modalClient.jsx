import React from "react";



export const ModalClient = () => {

    // const sendForm = (event) => {
    //     event.preventDefault()
    //     if (data.id != undefined) {
    //         handleUpdate(data)
    //         resetForm()
    //         return
    //     }
    //     handleUpdate(event)
    // }

    // useEffect(() => {
    //     return resetForm()
    // }, [])
    return (
        <div>
            {/* INICIO DE MODAL DE PRUEBA */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title text-dark fs-5" id="exampleModalLabel"><i className="fa-solid fa-person-circle-check fa-fade"></i> &ensp; Datos del Cliente</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-1">
                                    <label htmlFor="recipient-name" className="col-form-label"><i className="fa-solid fa-user"></i> &ensp; Nombre:</label>
                                    <input type="text" className="form-control" id="recipient-name" />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="message-text" className="col-form-label"><i className="fa-solid fa-envelope"></i> &ensp; Correo Electronico:</label>
                                    <input type="text" className="form-control" id="recipient-name" />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="message-text" className="col-form-label"> <i className="fa-solid fa-phone"></i> &ensp; Telefono:</label>
                                    <input type="text" className="form-control" id="recipient-name" />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="message-text" className="col-form-label"><i className="fa-solid fa-city"></i> &ensp; Direccion:</label>
                                    <input type="text" className="form-control" id="recipient-name" />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="message-text" className="col-form-label"><i className="fa-regular fa-file-lines"></i> &ensp; RIF:</label>
                                    <input type="text" className="form-control" id="recipient-name" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* FIN DE MODAL DE PRUEBA */}
        </div>


    )
}