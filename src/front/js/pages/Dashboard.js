import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sidebar } from "../component/Sidebar.jsx";
import { Clients } from "../component/clients.jsx";
import { Navbardashboard } from "../component/Navbardashboard.jsx"
import { Context } from "../store/appContext.js";
import { Almacen } from "./Almacen.js";
import { DashboardHome } from "../component/dashboardHome.jsx";
import { Products } from "../component/productTable.jsx";

export const Dashboard = () => {
	const navigate = useNavigate();
	const { store, actions } = useContext(Context);


	const [showAlmacen, setShowAlmacen] = useState(false);
	const [showProduct, setShowProduct] = useState(false);
	const [showHome, setShowHome] = useState(true);
	const [showClient, setShowClient] = useState(false);
	/*almacen*/
	const handlealmacenClick = () => {
		actions.getStock()
		if (showAlmacen == false) {
			setShowAlmacen(true);
			setShowProduct(false);
			setShowHome(false);
			setShowClient(false);
		}

	};

	const handleproductClick = () => {
		actions.getProduct()
		if (showProduct == false) {
			setShowProduct(true);
			setShowAlmacen(false);
			setShowHome(false);
			setShowClient(false);
		}
	};

	const handlehomeClick = () => {

		if (showHome == false) {
			setShowHome(true);
			setShowAlmacen(false);
			setShowProduct(false);
			setShowClient(false);
		}
	}

	const handleclientClick = () => {

		if (showClient == false) {
			setShowClient(true);
			setShowHome(false);
			setShowAlmacen(false);
			setShowProduct(false);

		}
	}

	useEffect(() => {
		if (store.token == undefined) {
			navigate("/")

		}
	}, [])

	useEffect(() => {
		actions.getUser()
		actions.getProduct()
		actions.getStock()
		actions.getClient()
	}, [])

	/* console.log("Esto es la info en el dashboard:", store.info); */
	return (
		<div className="container-fluid information vh-100">
			<div className="row">
				<div className="p-0 col-2 animate__animated animate__slideInRight animate__fast 800ms">

					<Sidebar onAlmacenClick={handlealmacenClick}
						onProduckClick={handleproductClick}
						onHomeClick={handlehomeClick}
						onClientClick={handleclientClick}
					/>
				</div>
				<div className=" m-0 p-0  col-10 vh'100">

					<Navbardashboard />

					{showAlmacen && <Almacen />}
					{showProduct && <Products />}
					{showHome && <  DashboardHome />}
					{showClient && < Clients />}


				</div>
			</div>
		</div>
	);
};
