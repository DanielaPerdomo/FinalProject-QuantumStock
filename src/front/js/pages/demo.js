import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sidebar } from "../component/Sidebar.jsx";
import { RequestInformation } from "../component/requestedInfo.jsx";
import { Navbardashboard} from "../component/Navbardashboard.jsx"
import { Context } from "../store/appContext";
import { SignUp } from "../component/homeSignUp.jsx";
import { Login } from "../component/homeLogIn.jsx";


export const Demo = () => {
	const navigate = useNavigate();
	const { store, actions } = useContext(Context);

	useEffect(() =>{
		if(store.token == undefined){   
			navigate("/")
			
		} 
	}, [])

	return (
		<div className="container-fluid m-0 p-0">
			<div className="row">
			  
				<div className="col-3 m-0 p-0">
				
					 <Sidebar />    
				</div>
				<div className="col-9 ">   
				    <Navbardashboard/>  
					<RequestInformation /> 
					{/* <Login />  */}
				</div>
			</div>
		</div>
	);
};
