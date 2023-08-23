import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";



export const Navbar = ({onLoginClick, onSignUpClick}) => {     

	return (
		<nav className="navbar navbar-expand-lg headerHome">         
  			<div className="container-fluid">
			  <Link to="/">
					<span className="navbar-brand mb-0 h1 text-light">     
						<i className="fa-solid fa-boxes-packing"></i><br/>           
						<strong> QuantumStock</strong>
					</span>
				</Link>
    			<div className="position-relative" id="navbarSupportedContent">
					<Link to="/aboutUs">
						<button type="button" className="btn btn-outline-light border border-0 m-2 buttonNav" href="#">Nosotros
						</button>
					</Link>
						<button onClick={onLoginClick} type="button" className="btn btn-primary m-2 buttonNav">Iniciar Sesión&ensp;<i className="fa-solid fa-user"></i></button>
          
					<Link to="/">
						<button onClick={onSignUpClick} className="btn btn-outline-success text-light m-2 buttonNav" type="submit">
							Registrarse&ensp;<i className="fa-solid fa-right-to-bracket"></i>
						</button> 
					</Link> 
				</div>
			</div>
		</nav>
	);
};