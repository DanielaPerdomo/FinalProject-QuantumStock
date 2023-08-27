import React from "react";





export const Almacen = () => {

    return (
    <>

            <div>
                <h1 className=" text-dark ">Almacen</h1>
                <button type="button" className="btn btn-outline-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                    <i className="fa-regular fa-square-plus"></i>
                </button>
                <table class="table">
                    <thead>
                        <tr>
                            
                            <th scope="col">Company Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Rif</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                           
                            <td>Nokia</td>
                            <td>direccion</td>
                            <td>2323232</td>
                        </tr>
                       </tbody>
                    </table>
                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">New message</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="mb-3">
                                                <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
                                                <input type="text" className="form-control" id="recipient-name" />
                                            </div>
                                            <div className="mb-3">
                                                <label for="message-text" className="col-form-label">Message:</label>
                                                <textarea className="form-control" id="message-text"></textarea>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Send message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                </>
                )

}