import React from "react";
import "../../styles/logIn.css"


export const Login = ({onCloseForm}) => {
    return (
      <div className="form-logIn">
        <div className="container for-2">
          <div className="row main-row-login">
            <div className="col SingUp-form">
              <form action="#" className="formSignUp needs-validation" noValidate>
                <div className="row">
                  <div className="col-10 d-flex gap-2">
                    <div><i className="fa-solid fa-users fa-bounce ico"></i></div>
                    <div className="newUser">
                      <h2 className="fs-4">Iniciar sesion</h2>
                      <p className="font-monospace text-center">QuantumStock</p>
                    </div>
                  </div>
                  <div className="col-2 text-end">
                    <button onClick={onCloseForm} type="button" className="btn exit"><i className="fa-solid fa-arrow-right-from-bracket ico-exit"></i></button>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col position-relative">
                    <label htmlFor="validationTooltip04" className="form-label">Correo Electronico</label>
                    <input type="email" className="form-control" id="validationTooltip04" placeholder="enzo-ferrari@gmail.com" required />
                    <div className="valid-tooltip">
                      Looks good!
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col position-relative">
                    <label htmlFor="validationTooltip05" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="validationTooltip05"  required />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                      Recuerda mis datos
                    </label>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col d-flex justify-content-center">
                      <button className="btn button" type="submit">Iniciar</button>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col d-flex justify-content-center">
                      <button className="btn button" type="submit">Registrarse</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };