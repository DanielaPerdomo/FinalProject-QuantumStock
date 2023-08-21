import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import { Body } from "../component/body.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center container-fluid vh-100 w-100 m-0 p-0">
			<div className="row">
				<div className="col">
					<Navbar />
				</div>
			</div>	
			<div className="row">
				<div className="col">
			 		 <Body />
				</div>
			</div>	
			<div className="row">
				<div className="col">

					<Footer />
				</div>
			</div>
				
			
		</div>
	);
};
