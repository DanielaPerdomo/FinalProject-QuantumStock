import React, { useContext } from "react";
import "../../styles/sidebar.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";


export const Sidebar = ({onAlmacenClick,onProduckClick,onHomeClick,onClientClick} ) => {
    const { actions, store } = useContext(Context);
    const navigate = useNavigate();

   

    const handleLogOut = () => {
        actions.logOut();
        navigate("/")
    }
    return (
        <div className="container Sidebar vh-100">
            <div className="row">
                <div className="col vh-100 d-flex align-items-start flex-column">
                    <div className="Sidebar-header p-2 mt-4">
                        <div className="name-company">
                            <h5>Nombre de la empresa</h5>
                        </div>
                        <div className="user d-flex mt-3">
                            <span>[Nombre de usuario]</span>
                        </div>
                    </div>

                    <div className="Sidebar-body mb-auto mt-4 p-2">
                        <div className="Sidebar-options fs-6" onClick={onHomeClick}><button type="button" className="Sidebar-button" ><i className="fa-solid fa-house"></i><span className="m-3">Home</span></button></div>
                        <div className="Sidebar-options fs-6"onClick={onAlmacenClick} ><button type="button" className="Sidebar-button" ><i className="fa-solid fa-warehouse"></i><span className="m-3">Almacen</span></button></div>
                        <div className="Sidebar-options fs-6"onClick={onProduckClick} ><button type="button" className="Sidebar-button"  ><i className="fa-brands fa-product-hunt"></i><span className="m-3">Productos</span></button></div>
                        <div className="Sidebar-options fs-6" onClick={onClientClick}><button type="button" className="Sidebar-button"><i className="fa-solid fa-person-circle-check"></i><span className="m-3">Clientes</span></button></div>
                        <div className="Sidebar-options fs-6"><button type="button" className="Sidebar-button"><i className="fa-solid fa-people-carry-box"></i><span className="m-3">Proveedores</span></button></div>
                        <div className="Sidebar-options fs-6"><button type="button" className="Sidebar-button"><i className="fa-regular fa-folder-open"></i><span className="m-3">Reportes</span></button></div>
                    </div>

                    <div className="Sidebar-footer mb-5 p-2">
                        {/* <div className="Sidebar-options fs-6"><button type="button" className="Sidebar-button"><i className="fa-solid fa-gears"></i><span className="m-3">Configuraciones</span></button></div> */}
                        <div className="Sidebar-options fs-6"><button type="button" className="Sidebar-button" onClick={handleLogOut}><i className="fa-solid fa-right-from-bracket"></i><span className="m-3">Cerrar session</span></button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

