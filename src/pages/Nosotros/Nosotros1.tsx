import React from "react";
import APP_ASSETS from "../../config/assets";

const Nosotros1 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between">
      <div className="p-8 lg:pr-20">
        <p className="font-poppins font-extralight text-[17px] lg:text-[25px] text-justify">
          Somos una empresa especializada en la distribución, diseño, formación
          de sistemas y soluciones de conectividad, mediante conocimientos de
          electricidad y telecomunicaciones satisfaciendo las necesidades de
          nuestros clientes, adaptando, implantando a los mismos sobre los
          últimos avances tecnológicos.
        </p>
      </div>
      <div
        className="flex flex-row p-4"
        style={{
          backgroundImage: `url(${APP_ASSETS.NOSOTROS_BG1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" p-8 border-white border-solid border-[6px] lg:-translate-x-20">
          <p className="font-poppins font-extralight text-[15px] lg:text-[25px] lg:pl-20 text-justify">
            La tecnología de ALFAB Electric Solutions SAS., incluye un amplio
            espectro de productos contrastados, de reconocido prestigio
            internacional y basados en las tecnologías más avanzadas,
            facilitando la adaptación del ser humano que se encuentra,
            optimizando su administración y permitiendo incrementar la
            eficiencia de las operaciones que se llevan a cabo.
          </p>
        </div>
        <div className="flex bg-white h-32 items-center">
          <p className="rotate-[270deg] text-primary">2023</p>
        </div>
      </div>
    </div>
  );
};

export default Nosotros1;
