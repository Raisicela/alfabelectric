import React from "react";
import APP_ASSETS from "../../config/assets";

const data = [
  {
    title: "MISIÓN:",
    content: `La misión de nuestra empresa es convertirnos en líderes innovadores
        en el mercado, proporcionando soluciones tecnológicas de vanguardia
        para conectar a las personas de manera rápida, confiable y segura.
        Buscamos ofrecer servicios de telecomunicaciones de alta calidad,
        tanto en el ámbito nacional como internacional, adaptados a las necesidades cambiantes de nuestros
        clientes.`,
  },
  {
    title: "VISIÓN:",
    content: `En nuestra empresa nos esforzamos
        por ser líderes en proporcionar soluciones innovadoras y servicios de alta calidad de nuestros clientes.
        Nuestra visión es ser reconocidos como el proveedor preferido de servicios de telecomunicaciones, enfocados en la búsqueda constante
        de la excelencia y la satisfacción del
        cliente.`,
  },
];

const Nosotros3 = () => {
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center h-screen w-full"
      style={{
        backgroundImage: `url(${APP_ASSETS.NOSOTROS_BG5})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col  items-start justify-center bg-white my-4 py-4 mx-6"
        >
          <div className="flex flex-row w-full justify-between pl-10 pr-5 my-4">
            <p className="font-poppins font-bold text-[35px] lg:text-[40px] text-left text-primary">
              {item.title}
            </p>
            <figure className="w-[60px]">
              <img src={APP_ASSETS.NOSOTROS_COMILLAS} />
            </figure>
          </div>
          <p className="font-poppins font-light text-[15px] lg:text-[20px] text-justify text-black px-10">
            {item.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Nosotros3;
