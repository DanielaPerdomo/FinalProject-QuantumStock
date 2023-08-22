import React from "react";
import { Login } from "./login.jsx";
import "../../styles/bodyHome.css"

export const Body = ({showLoginForm}) => {
    return(
        <div className="bodycontainer">
            <div className="leftside">
                <h1>¡Controla, supervisa y prospera!</h1>
                <p>La fórmula de éxito para tu inventario está aquí</p>
            </div>
            <div className="rightside">
                <p>Aqui deberia ir una imagen cool</p>
            </div>
            {showLoginForm && <Login />}
        </div>
    );
};