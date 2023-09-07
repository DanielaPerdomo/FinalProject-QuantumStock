import React from "react";
import "../../styles/aboutUs.css";
import { Link } from "react-router-dom";
import homeImageUrl from "../../img/HomeTechnology.jpg";
import Logo from "../../img/LogoQuantumStock.png";
import Samuel from "../../img/Samuel_Herrera.png";
import Daniela from "../../img/Daniela_Perdomo.png";
import Miguel from "../../img/Miguel_Ojeda.png";
import HTML from "../../img/LogoHTML.png";
import CSS from "../../img/LogoCSS.png";
import JAVASCRIPT from "../../img/LogoJS.png";
import REACT from "../../img/LogoReact.png";
import PYTHON from "../../img/LogoPYTHON.png";
import FLASK from "../../img/Logoflask.png";
import NODE from "../../img/LogoNodejs.png";

export const AboutUs = () => {

	return (
		<div className="bodyWelcome vh-100 m-0 p-0 w-100">
			<div>
				{/* INICIO DEL NAVBAR */}
				<div className="navbarDashboard">
					<nav className="navbar navbar-expand-lg ">
						<div className="container-fluid">
							<span className="navbar-brand mb-0  text-light">
								<h2><strong> QuantumStock</strong></h2>
							</span>

							<button className="navbar-toggler bs-navbar-color-light bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>
							<div className="collapse navbar-collapse position-relative" id="navbarSupportedContent">
								<ul className="navbar-nav me-auto mb-2 mb-lg-0">
									<li className="nav-item">
										<Link to="/">
											<button type="button" className="btn btn-sm btn-outline-light border border-0 m-2 buttonNav" >
												<i className="fa-solid fa-house-user fa-fade"></i>&ensp;
												Inicio
											</button>
										</Link>
									</li>
								
							</ul>
						</div>

						<div>
							<span><i className="redIcon fa-brands fa-instagram" width="50" height="50"></i></span>
							<span><i className="redIcon fa-brands fa-x-twitter" width="50" height="50"></i></span>
							<span><i className="redIcon fa-brands fa-twitter" width="50" height="50"></i></span>
							<span><i className="redIcon fa-brands fa-facebook" width="50" height="50"></i></span>
							<span><i className="redIcon fa-brands fa-linkedin-in" width="50" height="50"></i></span>
							<span><i className="redIcon fa-brands fa-tiktok" width="50" height="50"></i></span>
						</div>

				</div>
			</nav>
		</div>
				{/* FIN DEL NAVBAR */ }

	{/* INICIO DEL SIDEBAR */ }

	{/* <div className="miniSidebar container" data-bs-backdrop="static">
		<div className="row">
			<div className="col d-flex align-items-start flex-column">

				<div className="miniSidebarBody">
					<div className="miniSidebarOptions fs-6"><button type="button" className="miniSidebarButton"><i className="miniIcon fa-solid fa-house"></i></button></div>
					<div className="miniSidebarOptions fs-6"><button type="button" className="miniSidebarButton"><i className="miniIcon fa-solid fa-handshake"></i></button></div>
					<div className="miniSidebarOptions fs-6"><button type="button" className="miniSidebarButton"><i className="miniIcon fa-solid fa-chart-line"></i></button></div>
					<div className="miniSidebarOptions fs-6"><button type="button" className="miniSidebarButton"><i className="miniIcon fa-solid fa-laptop-code"></i></button></div>
					<div className="miniSidebarOptions fs-6"><button type="button" className="miniSidebarButton"><i className="miniIcon fa-solid fa-users"></i></button></div>
				</div>
			</div>
		</div>
	</div> */}

	{/* FIN DEL SIDEBAR */ }

	{/* INICIO DEL SECCION-1 BIENVENIDO */ }
	<section className="section1">

		<div className="sectionImage1">
			<img className="homeImage" src={homeImageUrl} />
		</div>
		<div className="sectionText1">
			<span className="tittleSection1">
				Bienvenidos a QuantumStock!</span>
			<br />
			<span className="tittleParagraph">Somos líderes en innovación tecnológica y desarrollo web.</span>
		</div>

	</section>
	{/* FIN DEL SECCION-1 BIENVENIDO */ }

	{/* INICIO DEL SECCION-2 SOLUCION */ }
	<section className="section2">

		{/* <div className="sectionText2">
						<span className="tittleSection2">¿Por qué QuantumStock?</span>
						<p className="tittleParagraph2">- Seguimiento en tiempo real</p>
						<p className="tittleParagraph2">- Gestión de existencias</p>
						<p className="tittleParagraph2">- Optimización de espacio</p>
						<p className="tittleParagraph2">- Integración con proveedores y clientes</p>
						<p className="tittleParagraph2">- Seguridad y control de acceso</p>
					</div> */}
		<div className="sectionText1">
			<span className="tittleSection1">Objetivo Principal</span>
			<span className="tittleParagraph">Nuestro objetivo principal es gestionar eficientemente los niveles de existencias de una empresa, garantizando que se disponga de la cantidad adecuada de productos en el momento adecuado y evitando tanto el sobrestock como el subestock. Adicionalmente, buscamos proporcionar una visibilidad en tiempo real de los activos de inventario, optimizando el uso del espacio de almacenamiento y permitiendo la toma de decisiones informadas sobre compras, producción y distribución.</span>

		</div>
		<div className="sectionImage2">
			<img className="imageSection2" src="https://sinovencargo.com/wp-content/uploads/2022/03/foto-5.jpg" />
		</div>
	</section>
	{/* FIN DEL SECCION-2 SOLUCION */ }


	{/* INICIO DEL SECCION-4  TECNOLOGIA */ }
	<section className="section4">
		<h1>Nuestra Tecnologia</h1>
		<div className="techSection">
			<div className="sectionText4">

				<img className="imageHtml" src={HTML} />
				<img className="imageCss" src={CSS} />
				<img className="imageJs" src={JAVASCRIPT} />
				<img className="imageReact" src={REACT} />
				<img className="imageNode" src={NODE} />
			</div>
			<div className="sectionText4">

				<img className="imagePython" src={PYTHON} />
				<img className="imageFlask" src={FLASK} />
				<img className="imageJWT" src="https://jwt.io/img/logo-asset.svg" />
			</div>
		</div>
	</section>
	{/* FIN DEL SECCION-4 TECNOLOGIA */ }

	{/* INICIO DEL SECCION-5 NOSOTROS */ }
	<section className="section5">
		<div className="tittleSection5">
			<h1>Equipo de Trabajo</h1>
		</div>
		<div className="workTeam">
			<div className="workCard" style={{ "width": "18rem" }}>
				<img src={Samuel} className="card-img-top" alt="Samuel Herrera" />
				<div className="workbody">
					<span className="workName">Samuel Herrera</span><br />
					<span className="card-text-5">Full-Stack Developer</span><br />
					<span className="card-text-5">Analista de Sistema</span>
				</div>
			</div>
			<div className="workCard" style={{ "width": "18rem" }}>
				<img src={Daniela} className="card-img-top" alt="Daniela Perdomo" />
				<div className="workbody">
					<span className="workName">Daniela Perdomo</span><br />
					<span className="card-text-5">Full-Stack Developer</span><br />
					<span className="card-text-5">Ing. Administracion de Obras</span>
				</div>
			</div>
			<div className="workCard" style={{ "width": "18rem" }}>
				<img src={Miguel} className="card-img-top" alt="Miguel Ojeda" />
				<div className="workbody">
					<span className="workName">Miguel Ojeda</span><br />
					<span className="card-text-5">Full-Stack Developer</span><br />
					<span className="card-text-5">
						Téc. Lab. de electrónica y de linea de prototipado LPKF</span>
				</div>
			</div>
		</div>
	</section>
	{/* FIN DEL SECCION-5 NOSOTROS */ }


			</div >
		</div >
	);
};