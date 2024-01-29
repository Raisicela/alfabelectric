import React from "react";
import APP_ASSETS from "../../config/assets";

type ServicioProps = {
  icono_number: string;
  titulo: string;
  subtitulo: string;
  imagen: string;
  titulo_2: string;
  subtitulo_2: string;
  contenido: string;
  lista_servicios: string[];
  invertir?: boolean;
};

const Servicio = (props: ServicioProps) => {
  return (
    <div
      className={`w-screen flex flex-col bg-white py-5 items-center ${
        props.invertir ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div
        className={`flex flex-col w-[100%] lg:w-1/4  lg:h-min justify-center items-centerlg:items-start ${
          props.invertir ? "lg:pl-16" : "lg:pl-20"
        }`}
      >
        <div className={`flex flex-col h-full justify-center items-center `}>
          <div className="w-[80px] ">
            <img
              src={APP_ASSETS.SERVICIOS_ELIPSE_2}
              alt=""
              className="w-[auto]  object-cover justify-center items-center"
            />
          </div>
          <div className="w-[30px]  -translate-y-3">
            <img
              src={props.icono_number}
              alt="servicios"
              className="w-[100%]  object-cover"
            />
          </div>
          <div className="w-0 lg:w-[AUTO] lg:h-[170px]">
            <img
              src={APP_ASSETS.SERVICIOS_BARRA_1}
              alt="servicios"
              className="w-[100%]  object-cover"
            />
          </div>
        </div>
        <div className="justify-start items-center lg:-translate-y-9">
          <p className="font-poppins font-bold text-black text-[30px] text-center lg:text-left">
            {props.titulo}
          </p>
          <p className="font-poppins font-normal text-black text-[20px] text-center lg:text-left">
            {props.subtitulo}
          </p>
        </div>
      </div>
      <div className="flex flex-col w-[100%] lg:w-1/4 h-[42vh]  lg:h-min justify-center items-center">
        <div
          className={`flex  justify-center items-center px-5 ${
            props.invertir ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div className="w-[36px] h-[auto]">
            <img
              src={APP_ASSETS.SERVICIOS_BARRA_2}
              alt="servicios"
              className="w-[auto] h-[auto] object-cover justify-center items-center"
            />
          </div>
          <div>
            <img
              src={props.imagen}
              alt="servicios"
              className="w-[100%] h-[auto] object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[100%] lg:w-1/2  lg:h-min justify-center items-center lg:items-start pr-10 pl-5">
        <p className="font-poppins font-bold text-black text-[30px] text-center lg:text-left ">
          {props.titulo_2}
        </p>
        <p className="font-poppins font-bold text-black text-[20px] text-center lg:text-left">
          {props.subtitulo_2}
        </p>
        <div className="w-0 lg:w-[auto] lg:h-[5px]">
          <img
            src={APP_ASSETS.SERVICIOS_BARRA_3}
            alt=""
            className="w-[auto] h-[auto] object-cover justify-center items-center -translate-x-12 translate-y-1"
          />
        </div>
        <p className="font-poppins font-normal text-black text-[15px] text-center lg:text-left pt-2">
          {props.contenido}
        </p>
        <p className="font-poppins font-bold text-primary text-[25px] text-left pt-2">
          Servicios
        </p>
        <ul className="font-poppins font-normal text-black text-[15px] text-left list-square marker:text-primary marker:text-[25px] pl-6 lg: 10">
          {props.lista_servicios.map((servicio) => (
            <li>{servicio}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Servicio;
