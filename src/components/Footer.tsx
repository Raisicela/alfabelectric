import React from "react";
import APP_ASSETS from "../config/assets";

const Footer = () => {
  return (
    <footer>
      <div>
        <div
          className={`w-screen flex flex-col lg:flex-row bg-black py-5 gap-6`}
        >
          <div className="flex flex-col lg:w-1/3 justify-center items-center">
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-4">
              <div>
                <img
                  src={APP_ASSETS.FOOTER_CONTACT}
                  alt="servicios"
                  className="w-[auto] h-[auto] object-cover justify-center items-center"
                />
              </div>
              <div>
                <p className="font-poppins font-bold text-white text-[14px] lg:text-[18px] text-center lg:text-left">
                  CONTÁCTANOS
                </p>
                <p className="font-poppins font-normal text-white text-[12px] lg:text-[14px] text-center lg:text-left">
                  (+593) 99 803 - 1971
                </p>
                <p className="font-poppins font-normal text-white text-[12px] lg:text-[14px] text-center lg:text-left">
                  (+593) 98 925 - 2001
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:w-1/3 justify-center items-center">
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-4">
              <div>
                <img
                  src={APP_ASSETS.FOOTER_MAIL}
                  alt="servicios"
                  className="object-cover justify-center items-center"
                />
              </div>
              <div>
                <p className="font-poppins font-bold text-white text-[14px] lg:text-[18px] text-center lg:text-left">
                  INFORMACIÓN PERSONALIZADA
                </p>
                <p className="font-poppins font-normal text-white text-[12px] lg:text-[14px] text-center lg:text-left">
                  ventas@alfabelectric.com
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:w-1/3 justify-center items-center">
            <div className="flex flex-row justify-center">
              <div className="">
                <img
                  src={APP_ASSETS.LOGO}
                  alt="servicios"
                  className="object-cover justify-center items-center"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-primary border-t-[2px]  py-4 bg-black">
          <p className="text-white text-center font-poppins text-[8px] px-2 md:text-[15px] md:px-4 ">
            Copyright 2023 ALFAB Electric Solutions SAS by GS Design. Todos los
            Derechos Reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
