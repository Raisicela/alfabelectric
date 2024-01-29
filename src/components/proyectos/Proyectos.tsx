import React from "react";
import APP_ASSETS from "../../config/assets";
import Carrusel from "../home/Carrusel";

type Props = {
  title: string;
  subtitle: string;
  mainImage: string;
  number: string;
  title2: string;
  subtitle2: string;
  images: string[];
  invert?: boolean;
};

const ProyectosComponent = (props: Props) => {
  return (
    <div
      className=" lg:h-screen bg-white flex flex-col py-4  "
      style={{
        backgroundImage: `url(${APP_ASSETS.PROYECTOS_BG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`flex flex-col items-center ${
          props.invert ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <div className="flex flex-col px-10 lg:w-5/12 ">
          <p className="font-poppins text-primary text-[20px] lg:text-[40px] font-bold text-center ">
            {props.title}
          </p>
          <p className="font-poppins text-black text-[12px] lg:text-[25px] font-normal text-justify ">
            {props.subtitle}
          </p>
        </div>
        <div className="flex flex-col px-10 py-4 lg:w-7/12 ">
          <figure className="w-full h-[auto] px-10">
            <img src={props.mainImage} alt="Alfab Electric" />
          </figure>
          <div className="bg-primary w-[200px] lg:w-[60%] pl-6 pr-4 py-4 -translate-y-14 -translate-x-6">
            <p className="font-poppins text-white text-[60px] lg:text-[120px] font-bold text-right -translate-y-14  lg:-translate-y-24 mb-[-80px] lg:mb-[-150px]">
              {props.number}
            </p>
            <p className="font-poppins text-white text-[25px] lg:text-[50px] font-bold text-left ">
              {props.title2}
            </p>
            <p className="font-poppins text-white text-[20px] lg:text-[40px] text-left">
              {props.subtitle2}
            </p>
          </div>
          <div className="lg:hidden">
            <Carrusel images={props.images} />
          </div>
        </div>
      </div>
      <div className="pb-0 mt-[-50px]">
        <div className="hidden lg:flex flex-row justify-between mb-8 mx-20 gap-4">
          {props.images.map((image, index) => (
            <div
              key={index}
              className="container items-center justify-center w-1/4 h-[auto] hover:bg-primary hover:opacity-80"
            >
              <figure>
                <img src={image} alt="Proyectos" />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProyectosComponent;
