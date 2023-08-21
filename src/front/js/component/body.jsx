import React from "react";
import { Login } from "./login.jsx";

export const Body = ({showLoginForm}) => {
    return(
        <div className="container-fluid vh-100 w-100 m-0 p-0">
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