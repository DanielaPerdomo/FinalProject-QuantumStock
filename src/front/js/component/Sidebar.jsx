import React from "react";
import "../../styles/sidebar.css";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";


export const Sidebar = () => {
    return (
        <div className="container Sidebar bg-light vh-100">
            <div className="row">
                <div className="col vh-100 d-flex align-items-start flex-column">
                    <div className="Sidebar-header p-2 mt-4">
                        <div className="name-company">
                            <h4>Nombre de la empresa</h4>
                        </div>
                        <div className="user d-flex">
                            <figure>
                                <img src="#" alt="Foto de perfil" />
                            </figure>
                            <span>[Nombre de usuario]</span>
                        </div>
                    </div>

                    <div className="Sidebar-body mb-auto mt-4 p-2">
                        <div className="Sidebar-options fs-6"><i className="fa-solid fa-house"></i><span className="m-3">Home</span></div>
                        <div className="Sidebar-options fs-6"><i className="fa-solid fa-warehouse"></i><span className="m-3">Almacen</span></div>
                        <div className="Sidebar-options fs-6"><i className="fa-brands fa-product-hunt"></i><span className="m-3">Productos</span></div>
                        <div className="Sidebar-options fs-6"><i className="fa-solid fa-person-circle-check"></i><span className="m-3">Clientes</span></div>
                        <div className="Sidebar-options fs-6"><i className="fa-solid fa-people-carry-box"></i><span className="m-3">Proveedores</span></div>
                        <div className="Sidebar-options fs-6"><i className="fa-regular fa-folder-open"></i><span className="m-3">Reportes</span></div>
                    </div>

                    <div className="Sidebar-footer mb-5 p-2">
                        <div className="Sidebar-options fs-6"><i class="fa-solid fa-gears"></i><span className="m-3">Configuraciones</span></div>
                        <div className="Sidebar-options fs-6"><i class="fa-solid fa-right-from-bracket"></i><span className="m-3">Cerrar session</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

