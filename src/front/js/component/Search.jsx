import React from "react";
import { Link } from "react-router-dom";

export const Search = () =>{

    return(
        <div className="container">
            <div className="input-group mb-3">
             <div className="input-group-append nav-icon mt-2 me-2">
                <i class="fa-solid fa-magnifying-glass text-light"></i>
                </div>
                <input
                

                type="text"
                className="form-control"
                placeholder="Buscar..."
                />
                
            </div>
            {/* Aquí puedes mostrar los resultados de la búsqueda */}
        </div>
    )
}
