import React from "react";
import Contacto from "./Contactos/Contacto";
import Footer from "../components/Footer";

const Contactos = () => {
  return (
    <>
      <main className=" min-h-screen w-screen flex-col items-center">
        <Contacto />
      </main>
      <Footer />
    </>
  );
};

export default Contactos;
