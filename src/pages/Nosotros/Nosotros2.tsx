import React from "react";
import APP_ASSETS from "../../config/assets";

const data = [
  {
    title: "EXPERIENCIA",
    content: `20 años de experiencia en formación,
        distribución y mantenimiento dando
        soluciones de conectividad mediante
        las tecnologías más avanzadas.`,
    icon: APP_ASSETS.NOSOTROS_LOGO1,
  },
  {
    title: "CALIDAD",
    content: `Cartera de productos de primera línea,
        no brindamos sólo una herramienta, sino
        un método de trabajo que orienta la forma de pensar y actuar de la organización.`,
    icon: APP_ASSETS.NOSOTROS_LOGO2,
  },
  {
    title: "PERSONALIZACIÓN",
    content: `Capacidad y adecuación a todos los requerimientos del cliente, personal ampliamente cualificado y con experiencia demostrada.`,
    icon: APP_ASSETS.NOSOTROS_LOGO3,
  },
  {
    title: "ASISTENCIA",
    content: `Asistencia en el diseño de sistemas, posicionamiento de mercado, memoria técnica final, capacitación personalizada.`,
    icon: APP_ASSETS.NOSOTROS_LOGO4,
  },
];

const Nosotros2 = () => {
  return (
    <div className="flex flex-col">
      <div
        className=" h-[200px]"
        style={{
          backgroundImage: `url(${APP_ASSETS.NOSOTROS_BG2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="flex flex-row">
        <div className="lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-3 bg-primary p-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4"
            >
              <div className="flex flex-row gap-3 mb-4">
                <p className="font-poppins font-bold text-[15px] lg:text-[20px] text-center">
                  {item.title}
                </p>
                <img
                  src={item.icon}
                  alt="Alfab Electric"
                  width={17}
                  height={17}
                />
              </div>
              <p className="font-poppins font-extralight text-[14px] lg:text-[14px] text-justify">
                {item.content}
              </p>
            </div>
          ))}
        </div>
        <div
          className="w-1/2 hidden lg:block  "
          style={{
            backgroundImage: `url(${APP_ASSETS.NOSOTROS_BG3})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <div
        className=" h-[200px]"
        style={{
          backgroundImage: `url(${APP_ASSETS.NOSOTROS_BG4})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default Nosotros2;
