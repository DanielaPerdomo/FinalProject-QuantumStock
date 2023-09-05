import React, { useContext } from "react";
import "../../styles/navDashboard.css";
import { Search } from "./Search.jsx";
import homeImageUrl from "../../img/LogoQuantumStock.png";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbardashboard = () => {
    const { actions, store } = useContext(Context);
    const navigate = useNavigate();
    const handleLogOut = () => {
        actions.logOut();
        navigate("/")
    }


    return (

        <>
            <nav className="Move navbar container-fluid text-light mt-2">
                <div className="container-fluid">
                    <div className="">
                        <p className="welcome m-0">Bienvenido, </p>
                        <h3>{store.info.name}</h3>
                    </div>
                    <div className="">
                        <button className="btn btn-primary m-2" onClick={handleLogOut}>Cerrar Sesion&ensp;<i className="fa-solid fa-right-from-bracket  "></i></button>
                    </div>
                </div>
            </nav>
        </>



    );

};

{/* <div className="container  text-white  ">
            <nav className="navbar w-100 d-flex justify-content-center" >
                <div className="container m-0 p-0 w-100">
                    <div className="row d-flex flex-row m-0 p-0 ">
                        <div className="col-4 d-flex align-items-start m-0 p-0">
                            <img className="nav mx-2" src={homeImageUrl} />
                            <a className="navbar-brand mt-2 text-white text-align-center">QuantumStock</a>
                            
                        </div>
                        <div className="col-3 mt-2">
                            <div className="m-0"> <h4 className="m-0">Bienvenido,</h4><span className="m-0">{store.info.name}</span></div>
                        </div>
                        <div className="col-5 m-0 p-0 d-flex justify-content-end ">

                            
                            <div className=" nav-icon fs-4 mx-2 p-0"><i className="fa-regular fa-user "></i><span className="m"></span></div>
                            <div className=" nav-icon fs-4 mx-2 p-0" onClick={handleLogOut}><i className="fa-solid fa-right-from-bracket  "></i><span className="m"></span></div>

                        </div>
                    </div>
                </div>
            </nav>
        </div> */}