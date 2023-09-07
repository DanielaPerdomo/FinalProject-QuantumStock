import React from "react";
import { Link } from "react-router-dom";
import "../../styles/homeNavbar.css";



export const Navbar = ({ onLoginClick, onSignUpClick }) => {

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">

        <span className="navbar-brand mb-0 h1 text-light">
          <h2><strong>QuantumStock</strong></h2>
        </span>

        <button className="navbar-toggler bs-navbar-color-light bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse position-relative" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/aboutUs">
                <button type="button" className="btn btn-sm btn-outline-light border border-0 m-2 buttonNav" href="#">
                  <i className="fa-solid fa-users fa-fade"></i>&ensp;
                  Nosotros
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <button onClick={onLoginClick} type="button" className="btn  btn-sm btn-info text-light  m-2 buttonNav">
                <i className="fa-solid fa-user fa-fade text-dark"></i> &ensp;
                <span className="text-dark">Iniciar Sesión</span>
              </button>
            </li>

            <li className="nav-item">
              <Link to="/">
                <button onClick={onSignUpClick} className="btn  btn-sm btn-info text-light m-2 buttonNav" type="submit">
                  <i className="fa-solid fa-right-to-bracket fa-fade text-dark"></i> &ensp;
                  <span className="text-dark">Registrarse</span>
                </button>
              </Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>

  );
};

// Navbar que funciona
{/* <nav className="navbar navbar-expand-lg headerHome">         
  			<div className="container-fluid">
				
			  
					<span className="navbar-brand mb-0 h1 text-light">          
						<strong> QuantumStock</strong>
					</span>
				
    			<div className="position-relative" id="navbarSupportedContent">
					<Link to="/aboutUs">
						<button type="button" className="btn btn-sm btn-outline-light border border-0 m-2 buttonNav" href="#">Nosotros
						</button>
					</Link>
						<button onClick={onLoginClick} type="button" className="btn  btn-sm btn-info text-light  m-2 buttonNav">Iniciar Sesión&ensp;<i className="fa-solid fa-user"></i></button>
          
					<Link to="/">
						<button onClick={onSignUpClick} className="btn  btn-sm btn-outline-info text-light m-2 buttonNav" type="submit">
							Registrarse&ensp;<i className="fa-solid fa-right-to-bracket"></i>
						</button> 
					</Link> 
				</div>
			</div>
		</nav> */}