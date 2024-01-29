import React, { FormEvent, useRef } from "react";
import APP_ASSETS from "../../config/assets";
import emailjs from "@emailjs/browser";

function Contacto() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    console.log("form", form);
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_taqqbpa",
        "template_p44qfwj",
        form.current,
        "xjSAOQb25O4fN31Ey"
      )
      .then(
        (result) => {
          console.log("hkjhk", result.text);
        },
        (error: any) => {
          console.log("sdasd", error.text);
        }
      );
  };

  return (
    <div
      className="h-full w-[100%] flex flex-col py-10"
      style={{
        backgroundImage: `url(${APP_ASSETS.HOME_BG1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex w-screen justify-center items-center">
        <iframe
          className="w-[90%] h-[50vh] lg:h-[70vh] justify-center border-solid border-8 border-white"
          src="https://maps.google.com/maps?q=-0.1240276,-78.4721252&z=15&output=embed"
          aria-hidden="false"
        ></iframe>
      </div>
      <div>
        <p className="font-poppins font-bold text-primary text-[36px] pt-5 ">
          FORMULARIO
        </p>
        <p className="font-poppins font-normal text-black text-[16px] py-2">
          Contáctenos y nos pondremos en contacto con ustedes en la mayor
          brevedad posible.
        </p>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-screen px-10 lg:px-20"
        >
          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input
                name="empresa"
                className="text-[16px] appearance-none block w-full bg-white text-[#848484] border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="text"
                placeholder="Empresa*"
              />
              <p className="text-xs italic"></p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <input
                className="text-[16px] appearance-none block w-full bg-white text-[#848484] border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Nombres y Apellidos*"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input
                className="text-[16px] appearance-none block w-full bg-white text-[#848484] border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="text"
                placeholder="Cargo*"
              />
              <p className="text-xs italic"></p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <input
                className="text-[16px] appearance-none block w-full bg-white text-[#848484] border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Teléfono*"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input
                className="text-[16px] appearance-none block w-full bg-white text-[#848484] border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="text"
                placeholder="Correo Electrónico*"
              />
              <p className="text-xs italic"></p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <input
                className="text-[16px] appearance-none block w-full bg-white text-[#848484] border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Dirección*"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input
                className="text-[16px] appearance-none block w-full bg-white text-[#848484] border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="text"
                placeholder="Ciudad*"
              />
              <p className=" text-xs italic"></p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <input
                className="text-[16px] appearance-none block w-full bg-white text-[#848484] border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="País*"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              ></label>
              <input
                className="text-[16px] appearance-none block w-full bg-white text-[#848484] border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                placeholder="Consulta*"
              />
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white text-[18px] font-bold py-2 px-4 rounded-2xl">
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacto;
