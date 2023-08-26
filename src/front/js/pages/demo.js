import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sidebar } from "../component/Sidebar.jsx";
import { RequestInformation } from "../component/dashboardRequestedInfo.jsx";
import { Navbardashboard } from "../component/Navbardashboard.jsx"
import { Context } from "../store/appContext";


export const Demo = () => {
	const navigate = useNavigate();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		if (store.token == undefined) {
			navigate("/")

		}
	}, [])

	return (
		<div className="container-fluid information">
			<div className="row">

				<div className="col-2 p-0">
					<Sidebar />
				</div>
				<div className="col-10 m-0 p-0">
					<div className="container">
						<Navbardashboard />
						<RequestInformation />
					</div>
				</div>
			</div>
		</div>
	);
};
