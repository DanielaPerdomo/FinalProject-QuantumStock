import React from "react";
import "../../styles/aboutUs.css";
import { Link } from "react-router-dom";
import homeImageUrl from "../../img/HomeTechnology.jpg";

export const AboutUs = () => {

	return (
		<div className="bodyWelcome vh-100 m-0 p-0 w-100">
			<div>
				<div className="navbarDashboard">

					<nav className="navbar navbar-expand-lg ">
						<div className="container-fluid">

							<span className="navbar-brand mb-0 h1 text-light">
								<strong> QuantumStock</strong>
							</span>

							<button className="navbar-toggler bs-navbar-color-light bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>
							<div className="collapse navbar-collapse position-relative" id="navbarSupportedContent">
								<ul className="navbar-nav me-auto mb-2 mb-lg-0">
									<li className="nav-item">
										<Link to="/">
											<button type="button" className="btn btn-sm btn-outline-light border border-0 m-2 buttonNav" href="#">
												<i className="fa-solid fa-house-user fa-fade"></i>&ensp;
												Home
											</button>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</div>

				<div className="sectionOne bodycontainer container-fluid">
					<div className="textSide">
						<h3>Bienvenidos a QuantumStock!</h3>
						<p>Somos líderes en innovación tecnológica y desarrollo web. Fundada con la pasión por crear soluciones digitales de vanguardia, nuestra empresa se destaca por la creación de plataformas web modernas, intuitivas y altamente funcionales.</p>
					</div>
					<div className="imageSide">
						<img className="homeImage" src={homeImageUrl} />
					</div>
				</div>
				<div className="sectionTwo bodycontainer container-fluid">
					<div className="imageSide">
						<img className="homeImage" src={homeImageUrl} />
					</div>
					<div className="textSide">
						<h3>Nuestra Misión</h3>
						<p>Nuestra misión en QuantumStock es simplificar la gestión de inventarios y permitir que las empresas optimicen sus operaciones. Creemos que cada empresa, independientemente de su tamaño, merece tener acceso a herramientas poderosas y fáciles de usar que les ayuden a maximizar su eficiencia y rentabilidad.</p>
					</div>
				</div>
				<div className="sectionThree bodycontainer container-fluid">
					<div className="textSide">
						<h3>Nuestra Tecnología</h3>
						<h3>Frontend: React y JavaScript</h3>
						<p>Nuestro equipo de desarrollo frontend utiliza React, una de las bibliotecas más populares y poderosas para construir interfaces de usuario interactivas y dinámicas. React nos permite crear componentes reutilizables que agilizan el proceso de desarrollo y aseguran la coherencia en toda la aplicación. Además, el uso de JavaScript como lenguaje principal nos permite brindar experiencias de usuario fluidas y atractivas.</p>
					</div>
					<div className="imageSide">
						<img className="homeImage" src={homeImageUrl} />
					</div>
				</div>
				<div className="sectionFour bodycontainer container-fluid">
					<div className="imageSide">
						<img className="homeImage" src={homeImageUrl} />
					</div>
					<div className="textSide">
						<h3>Backend</h3>
						<h3>Python y SQLAlchemy</h3>
						<p>En la capa de backend, confiamos en Python, un lenguaje versátil y eficiente, para desarrollar la lógica empresarial que impulsa nuestras aplicaciones. Para la gestión de bases de datos, hemos adoptado SQLAlchemy, una herramienta poderosa que facilita la interacción con diversas bases de datos relacionales de manera eficiente y segura. Esta combinación nos permite crear sistemas robustos y escalables.</p>
					</div>
				</div>
				<div className="sectionFive bodycontainer container-fluid">
					<div className="textSide">
						<h3>Autenticación</h3>
						<h3>JWT (JSON Web Tokens)</h3>
						<p>La seguridad es una prioridad en cada proyecto que emprendemos. Para garantizar la autenticación y autorización seguras de los usuarios, implementamos JSON Web Tokens (JWT). Esta tecnología nos permite generar tokens cifrados que se utilizan para autenticar a los usuarios y garantizar que solo aquellos con los permisos adecuados accedan a las áreas restringidas de la plataforma.</p>
					</div>
					<div className="imageSide">
						<img className="homeImage" src={homeImageUrl} />
					</div>
				</div>
			</div>
		</div>
	);
};
