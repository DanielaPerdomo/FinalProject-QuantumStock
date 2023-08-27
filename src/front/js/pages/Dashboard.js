import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sidebar } from "../component/Sidebar.jsx";
import { RequestInformation } from "../component/dashboardRequestedInfo.jsx";
import { Navbardashboard } from "../component/Navbardashboard.jsx"
import { Context } from "../store/appContext.js";
import { Almacen } from "./Almacen.js";

export const Dashboard = ( ) => {
	const navigate = useNavigate();
	const { store, actions } = useContext(Context);
	
	const [showAlmacen, setShowAlmacen] = useState(false);
	const [showProduct, setShowProduc] = useState(false);
    /*almacen*/ 
	const handleLoginClick = () =>{
		setShowAlmacen(!showAlmacen);
		
	};

	const handleLoginClick2 = () =>{
		setShowProduc(!showProduct);
	};

	useEffect(() => {
		if (store.token == undefined) {
			navigate("/")

		}
	}, [])

	return (
		<div className="container-fluid information">
			<div className="row">

				<div className=" p-0 col-lg-3 col-4">

					<Sidebar onAlmacenClick={handleLoginClick} 
					         onProduckClick={handleLoginClick2}
					/>
				</div>
				<div className=" m-0 p-0 col-lg-9 col-8">
				
					<Navbardashboard />
                    {showAlmacen && <Almacen/>}
					{ showProduct && <RequestInformation /> }

				</div>
			</div>
		</div>
	);
};
