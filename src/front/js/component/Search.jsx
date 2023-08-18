import React from "react";
import { Link } from "react-router-dom";

export const Search = () =>{

    return(
        <div className="container">
            <div className="input-group mb-3">
                <input
                type="text"
                className="form-control"
                placeholder="Buscar..."
                />
                <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                    Buscar
                </button>
                </div>
            </div>
            {/* Aquí puedes mostrar los resultados de la búsqueda */}
        </div>
    )
}
