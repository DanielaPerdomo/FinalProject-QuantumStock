import React from "react";




export const ModalBuyOrder = () => {

return (

<div>
            {/* INICIO DE MODAL DE PRUEBA */}
            
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title text-dark fs-5"  id="exampleModalLabel"><i className="fa-solid fa-person-circle-check fa-fade"></i> &ensp; Datos de la Orden de Compra</h1>
                            <button type="button"  className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit="">
                                <div className="mb-1">
                                    <label htmlFor="recipient-name" className="col-form-label"><i className="fa-solid fa-user"></i> &ensp; Cliente:</label>
                                    <input type="text" className="form-control" id="recipient-name"  required name="name_client"  />
                                </div>
                              

                                <div className="modal-footer">
                                    <button type="button" onClick="" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    <button type="submit" className="btn btn-primary">Buscar</button>
                                </div>
                            </form>
                        </div>


                    </div>
                </div>
            </div>
            {/* FIN DE MODAL DE PRUEBA */}
        </div>



)

}