import React from "react";





export const Almacen = () => {

    return (
    <>
<div className="">
<div >
                <h1 className=" text-dark "><i className="fa-solid fa-warehouse"></i><span className="m-3">Almacen</span></h1>
            </div>
            {/* TABLA DE MOSTRAR PRODUCTOS CARGADOE EN EL INVENTARIO */}
            <table className="tableProducts table table-responsive table-hover m-1 mt-5 ">
                <thead className="">
                    <tr >
                        
                        <th  scope="col">ID</th>
                        
                      
                        <th scope="col">Address</th>
                       
                        
                        <th scope="col">Rif</th>
                        
                        
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    <tr>
                        <th scope="row">1</th>
                        <td>algo</td>
                        <td>algo</td>
                        
                        
                        <td>
                            <button type="button" className="btn btn-outline-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                                <i class="fa-regular fa-pen-to-square"></i>
                            </button>
                            <button type="button" className="btn btn-outline-danger m-2" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                                <i class="fa-regular fa-trash-can"></i>
                            </button>
                        </td>

                    </tr>
                </tbody>
            </table>

            {/* MODAL PARA AGREGAR PRODUCTOS */}
            <div>
                <button type="button" className="btn btn-outline-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                    <i className="fa-regular fa-square-plus"></i>
                </button>

                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 text-dark" id="exampleModalLabel">Datos del Almacen</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                                                   
                                    <div className="mb-1">
                                        <label htmlFor="recipient-name" className="col-form-label">Address:</label>
                                        <input type="text" className="form-control" id="recipient-name" />
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="recipient-name" className="col-form-label">Rif:</label>
                                        <input type="text" className="form-control" id="recipient-name" />
                                    </div>
                                    
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className=" btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className=" btn btn-primary">Send message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>
                </>
                )

}