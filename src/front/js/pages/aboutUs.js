import React, { useContext, useState} from "react";
import { Context } from "../store/appContext";
import "../../styles/aboutUs.css";
import { Navbar } from "../component/homeNavbar.jsx";
import { Footer } from "../component/homeFooter.jsx";
import { Body } from "../component/homeBody.jsx";

export const AboutUs = () => {
	const { store, actions } = useContext(Context);

	const [showLoginForm, setShowLoginForm] = useState(false);
	const [showSignUp, setShowSignUp] = useState(false)

	/* LOGIN */
	const handleLoginClick = () =>{
		setShowLoginForm(!showLoginForm);
	};

	const handleCloseForm = () =>{
		setShowLoginForm(!showLoginForm);
	}
	
	/* SIGNUP */

	const handleSignUpClick = () => {
		setShowSignUp(!showSignUp);
	};

	const handleCloseFormSingUp = () => {
		setShowSignUp(!showSignUp);
	};

	/* CAMBIAR DE REGISTRO A SIGNUP */

	const handleChage = () => {
		handleCloseForm();
		setShowSignUp(true)
	}

	const handleChageLogin = () =>{
		handleCloseFormSingUp();
		setShowLoginForm(true)
	}

	
	return (
		<div className="Container vh-100 m-0 p-0 w-100">
			<div className="row">
				<div className="col">
					<Navbar onLoginClick={handleLoginClick} onSignUpClick={handleSignUpClick} />
				</div>
			</div>
			<div className="bodyAboutUs ">


			</div>
			<div className="footerHome col">
				<Footer />
			</div>
			
		</div>
	);
};
