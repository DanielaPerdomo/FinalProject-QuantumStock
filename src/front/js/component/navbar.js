import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg bg-body-tertiary">
  			<div class="container-fluid">
			  <Link to="/">
					<span className="navbar-brand mb-0 h1">
						<i class="fa-solid fa-boxes-packing"></i><br/>
						<strong> QuantumStorage </strong>
					</span>
				</Link>
    			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      				<span class="navbar-toggler-icon"></span>
    			</button>
    			<div class="collapse navbar-collapse position-relative" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
						<Link to="/aboutUs">
							<button class="btn btn-outline-secondary border border-0 text-primary-emphasis m-2 position-absolute top-0 start-50 translate-middle-x" type="submit" href="#">Nosotros</button>
						</Link>
						</li>
					</ul>
						<Link to="/demo">
							<button class="btn btn-outline-primary text-primary-emphasis m-2" type="submit">
								Iniciar Sesión <i class="fa-solid fa-user"></i>
							</button>
						</Link>
						<Link to="/">
							<button class="btn btn-outline-primary text-primary-emphasis m-2" type="submit">
								Registrarse <i class="fa-solid fa-right-to-bracket"></i>
							</button>
						</Link>
				</div>
			</div>
		</nav>
	);
};
