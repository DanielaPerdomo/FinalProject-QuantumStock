import React from "react";
import { Link } from "react-router-dom";

export const navbarDashboard =() => {

return (    

<div className="" >

<nav class="navbar navbar-expand-lg bg-dark navbar-dark" width="150px">
    <div class="container-fluid">
        <img src=" " alt="logo"></img>
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
                <li className="nav-item active">
                    <a className="nav-link active" aria-current="page" href="#">algo</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link active " aria-current="page" href="#"> algo</a>
                </li>
            </ul>
        </div>
        <div  className="text-white"  >Bienvenido estimad@</div>
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Indroducir busqueda" aria-label="Search"/>
                <button class="btn btn-primary" type="submit">Busqueda</button>
        </form>
        <i class="fa-regular fa-user"></i>
    </div>
</nav>
</div>


);

};