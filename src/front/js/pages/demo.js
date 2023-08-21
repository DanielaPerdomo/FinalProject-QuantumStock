import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "../component/Sidebar.jsx";
import { RequestInformation } from "../component/requestedInfo.jsx";

import { Context } from "../store/appContext";
import { SignUp } from "../component/SignUp.jsx";
import { Login } from "../component/login.jsx";
export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-3">
					{/* <Sidebar /> */}
				</div>
				<div className="col-9 mt-5">
					{/* <RequestInformation /> */}
					<Login /> 
				</div>
			</div>
		</div>
	);
};
