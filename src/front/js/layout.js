import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { Context } from "./store/appContext";
import { AboutUs } from "./pages/aboutUs";

import { Home } from "./pages/home";
import { Dashboard } from "./pages/Dashboard";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";


import { Footer } from "./component/homeFooter.jsx";
import { useContext } from "react";
import { Almacen } from "./pages/Almacen";

//create your first component
const Layout = () => {
    const {actions,store} = useContext(Context) 
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;
console.log("esto es store",store)

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
         
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Dashboard />} path="/Dashboard" />
                        <Route element={<AboutUs />} path="/aboutUs" />
                        <Route element={<Single />} path="/single/:theid" />
                                             
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
