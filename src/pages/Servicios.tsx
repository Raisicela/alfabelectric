import React from "react";
import Servicio1 from "./Servicios/Servicio1";
import Footer from "../components/Footer";

const Servicios = () => {
  return (
    <>
      <main className=" min-h-screen w-screen flex-col items-center">
        <Servicio1 />
      </main>
      <Footer />
    </>
  );
};

export default Servicios;
