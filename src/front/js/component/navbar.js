import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Login } from "./login.jsx";


export const Navbar = ({onLoginClick}) => {

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
						<button onClick={onLoginClick} type="button" className="btn btn-primary m-2">Iniciar Sesión <i className="fa-solid fa-user"></i></button>
            
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