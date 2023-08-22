import React, { useContext, useState} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import { Body } from "../component/body.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const [showLoginForm, setShowLoginForm] = useState(false);

	const handleLoginClick = () =>{
		setShowLoginForm(!showLoginForm);
	};


	return (
		<div className="loginContainer vh-100 m-0 p-0">
			<div className="row">
				<div className="col-12">
					<Navbar onLoginClick={handleLoginClick}/>
				</div>
			</div>	
			<div className="row">
				<div className="col-12">
			 		 <Body showLoginForm={showLoginForm}/>
				</div>
			</div>	
			<div className="row">
				<div className="col-12">

					<Footer />
				</div>
			</div>
				
			
		</div>
	);
};
