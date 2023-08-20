import React from "react";


export const SignUp = () => {
    return (
      <div className="container">
        <div className="row main-row">
          <div className="col SingUp-form">
            <form action="#" className="formSignUp needs-validation" noValidate>
              <div className="row">
                <div className="col-10 d-flex gap-2">
                  <div><i className="fa-solid fa-user-plus fa-bounce ico"></i></div>
                  <div className="newUser">
                    <h2 className="fs-4">Registra tus datos</h2>
                    <p className="font-monospace text-center">Bienvenidos a QuantumStock</p>
                  </div>
                </div>
                <div className="col-2 text-end">
                  <button type="button" className="btn exit"><i className="fa-solid fa-arrow-right-from-bracket ico-exit"></i></button>
                </div>
              </div>
              <div className="row">
                <div className="col">
                    <label for="nameCompany" className="form-label">Nombre de la empresa </label>
                    <input type="text" className="form-control" id="nameCompany" placeholder="Ferrari" required />
                    <div className="valid-tooltip">
                      Looks good!
                    </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                    <label for="rolCompany" className="form-label">Rol de la empresa</label>
                    <select className="form-select" id="rolCompany" required>
                      <option selected disabled Value="">Selecciona un Rol</option>
                      <option value="Automovilismo">Automovilismo</option>
                      <option value="Farmacia">Farmacia</option>
                      <option value="Electrodomesticos">Electrodomesticos</option>
                      <option value="Tecnoligia">Tecnologia</option>
                    </select>
                    <div className="invalid-tooltip">
                      Please select a valid state.
                    </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col position-relative">
                  <label for="userName" className="form-label">Nombre Completo</label>
                  <input type="text" className="form-control" id="userName" placeholder="Enzo Ferrari" required />
                  <div className="valid-tooltip">
                    Looks good!
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col position-relative">
                  <label for="validationTooltip04" className="form-label">Correo Electronico</label>
                  <input type="email" className="form-control" id="validationTooltip04" placeholder="enzo-ferrari@gmail.com" required />
                  <div className="valid-tooltip">
                    Looks good!
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-6 position-relative">
                  <label for="validationTooltip05" className="form-label">Cotraseña</label>
                  <input type="password" className="form-control" id="validationTooltip05"  required />
                </div>
                <div className="col-6 position-relative">
                  <label for="validationTooltip06" className="form-label">Confirmar Cotraseña</label>
                  <input type="password" className="form-control" id="validationTooltip06"  required />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col d-flex justify-content-center">
                    <button className="btn button" type="submit">Guardar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };