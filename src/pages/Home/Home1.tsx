import React from "react";
import APP_ASSETS from "../../config/assets";
import URLS from "../../config/enums";

const Home1 = () => {
  return (
    <div
      className="h-[90vh] bg-white flex flex-row"
      style={{
        backgroundImage: `url(${APP_ASSETS.HOME_BG1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col justify-around items-center pl-0 md:px-10 lg:pl-20">
        {/* <div></div> */}
        <div className="flex flex-col items-center lg:items-start">
          <p className="font-poppins font-normal text-black text-[20px] lg:text-[40px] text-left ">
            Servicios
          </p>
          <p className="font-poppins text-black  text-[30px] lg:text-[60px] font-bold text-center lg:text-left">
            ELÉCTRICOS Y TELECOMUNICACIONES
          </p>
          <p className="font-poppins text-black text-[12px] lg:text-[25px] text-center lg:text-left">
            Proveemos la mejor solución y asistencia en el diseño de sistemas
            con productos de primera línea.
          </p>
        </div>

        <div className=" h-[40%] w-[50%] visible lg:hidden ">
          <img
            className="h-full w-full cover object-fill"
            src={APP_ASSETS.HOME_IMG1}
            alt="Services"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-5 items-center lg:items-start w-[100%]">
          <p className="font-poppins text-[18px] text-black text-left">
            También estamos en:
          </p>
          <div className="flex flex-row gap-10">
            <button onClick={() => window.open(URLS.INSTAGRAM, "_blank")}>
              <img
                src={APP_ASSETS.LOGO_INSTAGRAM}
                alt="Instagram"
                width={40}
                height={40}
              />
            </button>
            <button onClick={() => window.open(URLS.FACEBOOK, "_blank")}>
              <img
                src={APP_ASSETS.LOGO_FACEBOOK}
                alt="Facebook"
                width={40}
                height={40}
              />
            </button>
            <button onClick={() => window.open(URLS.LINKEDIN, "_blank")}>
              <img
                src={APP_ASSETS.LOGO_LINKEDIN}
                alt="LinkedIn"
                width={40}
                height={40}
                onClick={() => window.open(URLS.LINKEDIN, "_blank")}
              />
            </button>
            <button onClick={() => window.open(URLS.TIKTOK, "_blank")}>
              <img
                src={APP_ASSETS.LOGO_TIKTOK}
                alt="TikTok"
                width={40}
                height={40}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-col justify-end mx-4 w-1/3 ">
        <div className=" flex flex-col justify-end h-[75%] ">
          <img
            className="h-full w-full object-fill"
            src={APP_ASSETS.HOME_IMG1}
            alt="Services"
          />
        </div>
      </div>
    </div>
  );
};

export default Home1;
