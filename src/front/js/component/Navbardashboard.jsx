import React from "react";
import "../../styles/navDashboard.css";
import { Link } from "react-router-dom";
import logo from "../../img/Logo.jpg";
export const Navbardashboard = () => {

    return (

        <div className=" m-0 p-0" >

            <nav class="navbar navbar-expand-lg bg-light navbar-light " width="150px">
                
                    <div className="container-fluid m-0 p-0">
                     <div className="row d-flex flex-row m-0 p-0">
                     <div className="col-4 d-flex align-items-start m-0 p-0">
                        <img className="nav mx-2 " src={logo} />

                        <a class="navbar-brand" href="#">QuantumStock</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <ul className="navbar-nav  m-0 p-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">algo</a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link active" aria-current="page" href="#">algo</a>
                                </li>

                            </ul>
                        </div>
                        </div>
                        <div className="col-3 mt-2  ">
                        <div className=""  >Bienvenido estimad@</div>
                        </div>
                        <div className="col-5 m-0 p-0 d-flex justify-content-evenly ">
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Introducir busqueda rapida" aria-label="Search" />
                            <button class="btn btn-dark boton rounded " type="submit">Busqueda</button>
                        </form>

                        <div className=" nav-icon fs-4 mt-1"><i className="fa-solid fa-gears"></i><span className="m"></span></div>
                        <div className=" nav-icon fs-4 mt-1"><i className="fa-solid fa-right-from-bracket"></i><span className="m"></span></div>
                        
                    </div>
                  </div>
                  </div>
            </nav>
        </div>


);

};