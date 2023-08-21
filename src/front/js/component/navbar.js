import React from "react";
import { Link } from "react-router-dom";
import { Login } from "./login.jsx";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg">
  			<div className="container-fluid">
			  <Link to="/">
					<span className="navbar-brand mb-0 h1 text-light">
						<i className="fa-solid fa-boxes-packing"></i><br/>
						<strong> QuantumStock</strong>
					</span>
				</Link>
    			<div className="position-relative" id="navbarSupportedContent">
					<Link to="/aboutUs">
						<button type="button" className="btn btn-outline-light border border-0 m-2" href="#">Nosotros
						</button>
					</Link>
					{/* <Link to="/demo"> */}
					<button type="button" className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModal" >Iniciar Sesión <i className="fa-solid fa-user"></i></button>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div className="modal-dialog">
						  <Login/>
            </div>
            </div>
            
          {/* </Link>  */}
					<Link to="/">
						<button className="btn btn-outline-success text-light m-2" type="submit">
							Registrarse  
							<i className="fa-solid fa-right-to-bracket"></i>
						</button> 
					</Link> 
				</div>
			</div>
		</nav>
	);
};



{/* <button className="btn btn-outline-info text-light m-2" type="submit">
							Iniciar Sesión <i className="fa-solid fa-user"></i>
						</button> */}

{/* <button className="btn btn-outline-success text-light m-2" type="submit">
							Registrarse 
							<i className="fa-solid fa-right-to-bracket"></i>
						</button> */}