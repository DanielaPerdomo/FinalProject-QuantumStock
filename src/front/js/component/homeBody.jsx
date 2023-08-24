import React, { useState } from "react";
import { Login } from "./homeLogIn.jsx";
import { SignUp } from "./homeSignUp.jsx";
import "../../styles/homeBody.css";
import homeImageUrl from "../../img/HomeTechnology.jpg";

export const Body = ({ showLoginForm, showSignUp, onClose, onCloseSignUp, OnChageClick, OnChageClickLogin }) => {

    return (
        <div className="bodycontainer container">
            <div className="leftside">
                <h1>¡Controla, su<span className="text-info">per<span className="text-info-emphasis">vi</span></span>sa y prospera!</h1>
                <p>La fórmula de éxito para tu inventario está aquí</p>
            </div>
            <div className="rightside">
                <img className="homeImage" src={homeImageUrl} />
            </div>
            {showLoginForm && <Login onCloseForm={onClose} onChangeClick={OnChageClick} />}
            {showSignUp && <SignUp onCloseSignUpForm={onCloseSignUp} onChageClicLoginForm={OnChageClickLogin} />}
        </div>
    );
};