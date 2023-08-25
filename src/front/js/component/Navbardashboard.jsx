import React from "react";
import "../../styles/navDashboard.css";
import { Link } from "react-router-dom";
import logo from "../../img/Logo.jpg";
import { Search } from "./Search.jsx";
import homeImageUrl from "../../img/HomeTechnology.jpg";




export const Navbardashboard = () => {

    return (

        <div className=" m-0 p-0" >

            <nav class="navbar navbar-expand-lg bg-dark navbar-dark " width="150px">
                
                    <div className="container-fluid m-0 p-0">
                     <div className="row d-flex flex-row m-0 p-0">
                     <div className="col-4 d-flex align-items-start m-0 p-0">
                        <img className="nav mx-2 " src={ homeImageUrl} />

                        <a class="navbar-brand" href="#">QuantumStock</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class=""></span>
                        </button>

                       
                        </div>
                        <div className="col-3 mt-2  ">
                        <div className=""  >Bienvenido estimad@</div>
                        </div>
                        <div className="col-5 m-0 p-0 d-flex justify-content-evenly ">
                        
                          <Search/>
                        <div className=" nav-icon fs-4 mx-2 p-0"><i class="fa-regular fa-user text-light"></i><span className="m"></span></div>
                        <div className=" nav-icon fs-4 mx-2 p-0"><i className="fa-solid fa-right-from-bracket text-light"></i><span className="m"></span></div>
                        
                    </div>
                  </div>
                  </div>
            </nav>
        </div>


);

};