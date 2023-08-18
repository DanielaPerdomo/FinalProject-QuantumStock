import React from "react";
import { Link } from "react-router-dom";
import { Search } from "./Search.jsx";

export const RequestInformation = () => {
    return(

        <div className="container information mt-3">
            <div className="info-top">
            <div className="row">
                <div className="col-7">
                    <p>Saludo de bienvenida,</p>
                    <h6>Nombre del usuario</h6>
                </div>
                <div className="col-3">
                    <Search />
                </div>
                <div className="col-2">
                    <div className="d-flex">
                    <p>[Notificacion]</p>
                    <p>[perfil]</p>
                    </div>
                </div>
            </div>
            </div>
            <div className="info-mid">
                <div className="row">
                    <div className="col-8">
                        <div className="card" style={{width: '30rem'}}>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>
                    <div className="col-4"></div>
                    </div>
                </div>
            </div>
        </div>

    )
}



