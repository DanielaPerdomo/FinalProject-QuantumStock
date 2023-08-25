import React from "react";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";


export const Sidebar = () => {
    return(
        <div className="Sidebar vh-100 bg-light  m-0 p-0">
            <div className="row">
                <div className="col">
                    <div className="Sidebar-top">
                        <h3 className="title">QuantumStok</h3>
                        <div className="log">
                            <figure className="photo-profile">
                                
                            </figure>
                            <div className="personal-information">
                                <h6 className="name">Nombre de usuario</h6>
                            </div>
                        </div>
                    </div>
                    <div className="Sidebar-mid">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link" href="#">DashBoard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Almacen</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Proveedor</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Clientes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Reportes</a>
                            </li>
                            {/* Agrega más opciones de menú según sea necesario */}
                        </ul>
                    </div>
                    <div className="Sidebar-below bg-dark">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Configuraciones</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Cerrar Session</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

