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

				<div className=" p-0 col-lg-3 col-4">

					<Sidebar />
				</div>
				<div className=" m-0 p-0 col-lg-9 col-8">
					<Navbardashboard />

					<RequestInformation />

				</div>
			</div>
		</div>
	);
};
