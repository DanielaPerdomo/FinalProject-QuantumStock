import React, { useContext, useState } from "react";

export const SignUp = ({ onCloseSignUpForm, onChageClicLoginForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company_name, setCompany_name] = useState("");
  const [rol_company, setRol_company] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  async function creat_user(event) {
    event.preventDefault();

    if (password != confirmpassword) {
      return alert("la contraseñas no coinciden !")
    } else {

      try {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            company_name: company_name,
            rol_company: rol_company
          })
        };

        const resp = await fetch(process.env.BACKEND_URL + "api/signup", opts);
        if (resp.ok) return await resp.json();
        else return alert("Usuario ya creado");
      } catch (error) {
        console.error("There was an Error!!!", error);
      };
      return alert("Registro exitoso")
    }
  };

  return (
    <div className="form-logIn">
      <div className="container">
        <div className="row main-row">
          <div className="col SingUp-form">
            <form onSubmit={creat_user} action="#" className="formSignUp needs-validation">
              <div className="row">
                <div className="col-10 d-flex gap-2">
                  <div><i className="fa-solid fa-user-plus fa-bounce ico"></i></div>
                  <div className="newUser">
                    <h2 className="fs-4">Registra tus datos</h2>
                    <p className="font-monospace text-center">Bienvenidos a QuantumStock</p>
                  </div>
                </div>
                <div className="col-2 text-end">
                  <button onClick={onCloseSignUpForm} type="button" className="btn exit"><i className="fa-solid fa-arrow-right-from-bracket ico-exit"></i></button>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="nameCompany" className="form-label">Nombre de la empresa </label>
                  <input type="text" className="form-control" id="nameCompany" placeholder="Ferrari" required
                    value={company_name}
                    onChange={e => setCompany_name(e.target.value)}
                  />
                  <div className="valid-tooltip">
                    Looks good!
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <label htmlFor="rolCompany" className="form-label">Rol de la empresa</label>
                  <select className="form-select" id="rolCompany" required
                    value={rol_company}
                    onChange={e => setRol_company(e.target.value)}
                  >
                    <option value="">Selecciona un Rol</option>
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
                  <label htmlFor="userName" className="form-label">Nombre Completo</label>
                  <input type="text" className="form-control" id="userName" placeholder="Enzo Ferrari" required
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                  <div className="valid-tooltip">
                    Looks good!
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col position-relative">
                  <label htmlFor="validationTooltip04" className="form-label">Correo Electronico</label>
                  <input type="email" className="form-control" id="validationTooltip04" placeholder="enzo-ferrari@gmail.com" required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <div className="valid-tooltip">
                    Looks good!
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-6 position-relative">
                  <label htmlFor="validationTooltip05" className="form-label">Cotraseña</label>
                  <input type="password" className="form-control" id="validationTooltip05" required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <div className="col-6 position-relative">
                  <label htmlFor="validationTooltip06" className="form-label">Confirmar Cotraseña</label>
                  <input type="password" className="form-control" id="validationTooltip06" required
                    value={confirmpassword}
                    onChange={e => setConfirmpassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col d-flex justify-content-center">
                  <button type="submit"  /* onClick={onChageClicLoginForm} */ className="btn button" >Guardar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};