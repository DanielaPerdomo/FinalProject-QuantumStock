import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg">
  			<div class="container-fluid">
			  <Link to="/">
					<span className="navbar-brand mb-0 h1 text-light">
						<i class="fa-solid fa-boxes-packing"></i><br/>
						<strong> QuantumStorage </strong>
					</span>
				</Link>
    			<div class="position-relative" id="navbarSupportedContent">
					<Link to="/aboutUs">
						<button type="button" class="btn btn-outline-light border border-0 m-2" href="#">Nosotros
						</button>
					</Link>
					<Link to="/demo">
						<button class="btn btn-outline-info text-light m-2" type="submit">
							Iniciar Sesión <i class="fa-solid fa-user"></i>
						</button>
					</Link>
					<Link to="/">
						<button class="btn btn-outline-success text-light m-2" type="submit">
							Registrarse 
							<i class="fa-solid fa-right-to-bracket"></i>
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
