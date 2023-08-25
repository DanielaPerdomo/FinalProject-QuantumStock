import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sidebar } from "../component/Sidebar.jsx";
import { RequestInformation } from "../component/dashboardRequestedInfo.jsx";

import { Context } from "../store/appContext";


export const Demo = () => {
	const navigate = useNavigate();
	const { store, actions } = useContext(Context);

	useEffect(() =>{
		if(store.token == undefined){   
			navigate("/")
			
		} 
	}, [])

	return (
		<div className="information container-fluid m-0 p-0">
			<div className="row">
				<div className="col-3">

					 <Sidebar />    
				</div>
				<div className="col-9 mt-5">     
					<RequestInformation /> 
					
				</div>
			</div>
		</div>
	);
};
