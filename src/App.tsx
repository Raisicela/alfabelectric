import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import WhatsappButton from "./components/WhatsappButton";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "./config/enums";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Proyectos from "./pages/Proyectos";
import Contactos from "./pages/Contactos";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Routes>
            <Route path={ROUTES.INICIO} element={<Home />} />
            <Route path={ROUTES.NOSOTROS} element={<Nosotros />} />
            <Route path={ROUTES.SERVICIOS} element={<Servicios />} />
            <Route path={ROUTES.PROYECTOS} element={<Proyectos />} />
            <Route path={ROUTES.CONTACTENOS} element={<Contactos />} />
          </Routes>
          <WhatsappButton />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
