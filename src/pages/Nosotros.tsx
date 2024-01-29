import React from "react";
import APP_ASSETS from "../config/assets";
import Nosotros1 from "./Nosotros/Nosotros1";
import Nosotros2 from "./Nosotros/Nosotros2";
import Nosotros3 from "./Nosotros/Nosotros3";
import Footer from "../components/Footer";

const Nosotros = () => {
  return (
    <>
      <main className="flex-col ">
        <Nosotros1 />
        <Nosotros2 />
        <Nosotros3 />
      </main>
      <Footer />
    </>
  );
};
export default Nosotros;
