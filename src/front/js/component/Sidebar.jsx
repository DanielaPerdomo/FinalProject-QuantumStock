import React from "react";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";


export const Sidebar = () => {
    return (
        <div className="container Sidebar bg-light vh-100">
            <div className="row">
                <div className="col vh-100 d-flex align-items-start flex-column mb-3">
                    <div className="Sidebar-header p-2">
                        <div className="name-company">
                            <h3>Nombre de la empresa</h3>
                        </div>
                        <div className="user d-flex">
                            <figure>
                                <img src="#" alt="Foto de perfil" />
                            </figure>
                            <span>[Nombre de usuario]</span>
                        </div>
                    </div>

                    <div className="Sidebar-body mb-auto p-2">
                        <div><i className="fa-solid fa-house"></i> Home</div>
                        <div><i className="fa-solid fa-warehouse"></i>Almacen</div>
                        <div><i className="fa-brands fa-product-hunt"></i>Productos</div>
                        <div><i className="fa-solid fa-person-circle-check"></i>Clientes</div>
                        <div><i className="fa-solid fa-people-carry-box"></i>Proveedores</div>
                        <div><i className="fa-regular fa-folder-open"></i>Reportes</div>
                    </div>

                    <div className="Sidebar-footer mb-5 p-2">
                        <div><i class="fa-solid fa-gears"></i>Configuraciones</div>
                        <div><i class="fa-solid fa-right-from-bracket"></i>Cerrar session</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

